import { type CreateSubscription } from "./subscription.routes";
import { type APPRouteHandler } from "~/lib/types";
import { type Context } from "hono";
import { PrismaClient } from "@repo/db/types";
import { z } from "zod";
import { type BillingInterval, SubscriptionItemsStatus } from "@repo/db/types";

const createSubscriptionSchema = z.object({
  customer_id: z.string(),
  address_id: z.string(),
  //   project_id: z.string(),
  currency_code: z.string(),
  collection_mode: z.enum(["automatic", "manual"]),
  billing_cycle: z.object({
    interval: z.enum(["day", "week", "month", "year"]),
    frequency: z.number().int().positive(),
  }),
  items: z
    .array(
      z.object({
        price_id: z.string(),
        quantity: z.number().int().positive(),
      })
    )
    .min(1),
  discount_id: z.string().optional(),
  billing_details: z
    .object({
      payment_interval: z.enum(["day", "week", "month", "year"]),
      payment_frequency: z.number().int().positive(),
      enable_checkout: z.boolean().optional(),
      purchase_order_number: z.string().optional(),
      additional_information: z.string().optional(),
    })
    .optional(),
});

export const create_subscription: APPRouteHandler<CreateSubscription> = async (
  c: Context
) => {
  const db: PrismaClient = c.get("db");
  const user = c.get("user");
  const unparsed_input = await c.req.json();
  const input = createSubscriptionSchema.parse(unparsed_input);

  const project_id = await db.project.findUnique({
    where: {
      slug: user?.user.defaultWorkspace,
    },
    select: {
      id: true,
    },
  });
  const subscription = await db.$transaction(async (tx) => {
    // 1. Verify all prices exist and belong to project
    const prices = await tx.prices.findMany({
      where: {
        id: {
          in: input.items.map((item) => item.price_id),
        },
        projectId: project_id?.id!,
      },
      include: {
        billing_cycle: true,
      },
    });

    if (prices.length !== input.items.length) {
      throw new Error(
        "One or more prices not found or do not belong to project"
      );
    }

    // 2. If discount provided, verify it exists and is valid
    let discount;
    if (input.discount_id) {
      discount = await tx.discounts.findFirst({
        where: {
          id: input.discount_id,
          projectId: project_id?.id!,
          status: "active",
          OR: [{ expires_at: null }, { expires_at: { gt: new Date() } }],
        },
      });

      if (!discount) {
        throw new Error("Discount not found or is invalid");
      }
    }

    // 3. Create the subscription
    const subscription = await tx.subscriptions.create({
      data: {
        id: `sub_${crypto.randomUUID()}`,
        status: "active",
        currency_code: input.currency_code,
        collection_mode: input.collection_mode,
        billing_cycle_interval: input.billing_cycle.interval,
        billing_cycle_frequency: input.billing_cycle.frequency,
        customer_id: input.customer_id,
        address_id: input.address_id,
        project_id: project_id?.id!,
        discount_id: input.discount_id,
        started_at: new Date(),
        // Calculate first billing date based on trial periods if any
        // first_billed_at: new Date(), // TODO: Handle trial periods
        // next_billed_at: new Date(), // TODO: Calculate based on billing cycle

        // Create subscription items
        Subscription_Items: {
          create: input.items.map((item) => ({
            id: `si_${crypto.randomUUID()}`,
            price_id: item.price_id,
            quantity: item.quantity,
            status: SubscriptionItemsStatus.active,
            recurring: true,
            // next_billed_at: new Date(), // TODO: Calculate based on trial
          })),
        },

        // Create billing details if provided
        BillingDetails: input.billing_details
          ? {
              create: {
                payment_interval: input.billing_details.payment_interval,
                payment_frequency: input.billing_details.payment_frequency,
                enable_checkout: input.billing_details.enable_checkout ?? false,
                purchase_order_number:
                  input.billing_details.purchase_order_number,
                additional_information:
                  input.billing_details.additional_information,
              },
            }
          : undefined,
      },
    });

    return subscription;
  });
  return c.json(subscription, 200);
};
