import { createRoute } from "@hono/zod-openapi";
import { type Context } from "hono";
import { APPRouteHandler } from "~/lib/types";
import { CreateSubscription } from "./subscription.routes";
import { PrismaClient } from "@repo/db/types";
import { createSubscriptionSchema, transformSubscription } from "./helpers";
import { calculateSubscriptionDates } from "./fns";
import * as HttpStatusCodes from "~/lib/http-status-code";

export const create_subscription: APPRouteHandler<CreateSubscription> = async (
  c: Context
) => {
  const db: PrismaClient = c.get("db");
  const user = c.get("user");
  const input = createSubscriptionSchema.parse(await c.req.json());
  // 1. Fetch all prices to get trial periods and billing cycles
  const [project_id, priceDetails] = await Promise.all([
    db.project.findUnique({
      where: {
        slug: user?.user.defaultWorkspace,
      },
      select: {
        id: true,
      },
    }),

    Promise.all(
      input.items.map((item) =>
        db.prices.findUniqueOrThrow({
          where: { id: item.price_id },
          select: {
            trial_period_frequency: true,
            trial_period_interval: true,
            billing_cycle_frequency: true,
            billing_cycle_interval: true,
            currency_code: true,
            status: true,
          },
        })
      )
    ),
  ]);

  // 2. Validate currencies match & prices
  const currencies = new Set(priceDetails.map((p) => p.currency_code));
  if (currencies.size > 1) {
    throw new Error("All prices must be in the same currency");
  }
  if (priceDetails.some((p) => p.status === "archived")) {
    throw new Error("Cannot create subscription with archived prices");
  }
  // 3. calculate all subscription dates
  const dates = calculateSubscriptionDates(priceDetails);
  // 5. Create the subscription with a transaction
  return await db.$transaction(async (tx) => {
    // Create the subscription
    const subscription = await tx.subscriptions.create({
      data: {
        id: `sub_${crypto.randomUUID()}`,
        status: input.status,
        currency_code: input.currency_code,
        customer_id: input.customer_id,
        address_id: input.address_id,
        project_id: project_id?.id!,
        discount_id: input.discount_id,
        collection_mode: "automatic",

        // Billing cycle info from first price
        billing_cycle_interval: priceDetails[0].billing_cycle_interval,
        billing_cycle_frequency: priceDetails[0].billing_cycle_frequency,

        // Dates
        started_at: dates.started_at,
        first_billed_at: dates.first_billed_at,
        next_billed_at: dates.next_billed_at,
        current_period_starts: dates.current_period_starts,
        current_period_ends: dates.current_period_ends,

        // Create subscription items
        Subscription_Items: {
          createMany: {
            data: input.items.map((item, index) => ({
              id: `si_${crypto.randomUUID()}`,
              //   subscription_id: "",
              price_id: item.price_id,
              quantity: Number(item.quantity),
              status: "trialing",
              recurring: true,
              created_at: new Date(),
              updated_at: new Date(),
              trial_started_at: dates.started_at,
              trial_ended_at: dates.trial_end_dates[index],
              previously_billed_at: null,
              next_billed_at: dates.next_billed_at,
            })),
          },
        },

        // // Create billing details if provided
        // BillingDetails: input.billing_details
        //   ? {
        //       create: {
        //         id: generateId("bd"),
        //         payment_interval: input.billing_details.payment_interval,
        //         payment_frequency: input.billing_details.payment_frequency,
        //         enable_checkout: input.billing_details.enable_checkout,
        //         purchase_order_number:
        //           input.billing_details.purchase_order_number,
        //         additional_information:
        //           input.billing_details.additional_information,
        //       },
        //     }
        //   : undefined,
      },
      include: {
        Subscription_Items: {
          include: {
            price: true,
          },
        },
        BillingDetails: true,
      },
    });

    const formattedSubscription = transformSubscription({
      ...(subscription as any),
    });
    return c.json(formattedSubscription, HttpStatusCodes.OK);
  });
};
