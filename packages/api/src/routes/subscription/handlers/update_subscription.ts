import { PrismaClient } from "@repo/db/types";
import { type Context } from "hono";
import { APPRouteHandler } from "~/lib/types";
import { UpdateSubscription } from "../subscription.routes";
import {
  transformedSubscriptionSchema,
  transformSubscription,
  updateSubscriptionSchema,
} from "../helpers";
import * as HttpStatusCodes from "~/lib/http-status-code";
import { DateTime } from "luxon";
import { calculateSubscriptionDates, getSubscriptionStatus } from "../fns";
import { z } from "zod";


const update_subscription: APPRouteHandler<UpdateSubscription> = async (
  c: Context
) => {
  const subscription_id = c.req.param("subscription_id");
  const db: PrismaClient = c.get("db");
  const input = updateSubscriptionSchema.parse(await c.req.json());
  const subscription = await db.subscriptions.findUnique({
    where: {
      id: subscription_id,
      project_id: c.get("organization_id"),
    },
    include: {
      discount: {
        include: {
          discount_prices: true,
        },
      },
      Subscription_Items: {
        include: {
          price: true,
        },
      },
      BillingDetails: true,
    },
  });

  if (!subscription) {
    return c.json(
      {
        error: "Not Found",
        message: "No Subscription found with the specified id",
      },
      HttpStatusCodes.NOT_FOUND
    );
  }

  // 2. Validate subscription state
  if (subscription.status === "cancelled") {
    return c.json(
      {
        error: "Bad Request",
        message: "Cannot update a cancelled subscription",
      },
      HttpStatusCodes.BAD_REQUEST
    );
  }

  // 3 Now we can validate currency changes using the existing data
  if (input.currency_code && input.items) {
    // Get prices from the provided items
    const newPrices = subscription.Subscription_Items.filter((item) =>
      input?.items?.some((newItem) => newItem.price_id === item.price_id)
    ).map((item) => item.price);

    // Check if any price is archived
    if (newPrices.some((p) => p.status === "archived")) {
      return c.json(
        {
          error: "Bad Request",
          message: "Cannot update subscription with archived prices",
        },
        HttpStatusCodes.BAD_REQUEST
      );
    }

    // Validate currency compatibility
    if (newPrices.some((p) => p.currency_code !== input.currency_code)) {
      return c.json(
        {
          error: "Bad Request",
          message: "All prices must be in the new currency",
        },
        HttpStatusCodes.BAD_REQUEST
      );
    }

    // 5. Validate next_billed_at
    if (input?.next_billed_at) {
      const nextBilledAt = DateTime.fromISO(input.next_billed_at);
      if (nextBilledAt <= DateTime.now()) {
        return c.json(
          {
            error: "Bad Request",
            message: "Next billing date must be in the future",
          },
          HttpStatusCodes.BAD_REQUEST
        );
      }
    }

    // 6. Prepare update data
    const updateData = {
      ...(input.customer_id && { customer_id: input.customer_id }),
      ...(input.address_id && { address_id: input.address_id }),
      //   ...(input.business_id !== undefined && {
      //     business_id: input.business_id,
      //   }),
      ...(input.currency_code && { currency_code: input.currency_code }),
      ...(input.next_billed_at && {
        next_billed_at: new Date(input.next_billed_at),
      }),
      ...(input.collection_mode && { collection_mode: input.collection_mode }),
      ...(input.discount && {
        discount_id: input.discount.id,
      }),
    };

    await db.$transaction(async (tx) => {
      // 7. Handle items update if provided
      if (input.items) {
        // Delete existing items not in the update
        const newPriceIds = input.items.map((item) => item.price_id);
        await tx.subscriptionItems.deleteMany({
          where: {
            subscription_id: subscription_id,
            price_id: { notIn: newPriceIds },
          },
        });

        const priceDetails = await Promise.all(
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
        );
        const dates = calculateSubscriptionDates(priceDetails);
        const { subscriptionStatus, itemStatus } =
          getSubscriptionStatus(priceDetails);

        // then create the new items
        await tx.subscriptionItems.createMany({
          data: input.items.map((item, index) => ({
            id: `si_${crypto.randomUUID()}`,
            price_id: item.price_id,
            subscription_id: subscription_id,
            quantity: Number(item.quantity),
            status: itemStatus,
            recurring: true,
            created_at: new Date(),
            updated_at: new Date(),
            // Only set trial dates if there's a trial
            trial_started_at: dates.has_trial ? dates.started_at : null,
            trial_ended_at: dates.has_trial
              ? dates.trial_end_dates[index]
              : null,
            previously_billed_at: dates.has_trial ? null : dates.started_at,
            next_billed_at: dates.next_billed_at,
          })),
        });

        // 9. Handle billing details update
        if (input.billing_details !== undefined) {
          if (input.billing_details === null) {
            await tx.billingDetails.delete({
              where: { subscription_id: subscription_id },
            });
          } else {
            await tx.billingDetails.upsert({
              where: { subscription_id: subscription_id },
              create: {
                id: `bd_${crypto.randomUUID()}`,
                subscription_id: subscription_id,
                enable_checkout:
                  input.billing_details.enable_checkout ?? undefined,
                purchase_order_number:
                  input.billing_details.purchase_order_number,
                additional_information:
                  input.billing_details.additional_information,
                payment_interval:
                  input.billing_details.payment_terms?.payment_interval!,
                payment_frequency:
                  input.billing_details.payment_terms?.payment_frequency!,
              },
              update: {
                enable_checkout: input.billing_details.enable_checkout!,
                purchase_order_number:
                  input.billing_details.purchase_order_number,
                additional_information:
                  input.billing_details.additional_information,
                payment_interval:
                  input.billing_details.payment_terms?.payment_interval,
                payment_frequency:
                  input.billing_details.payment_terms?.payment_frequency,
              },
            });
          }
        }

        // 10. Update subscription
        const updatedSubscription = await tx.subscriptions.update({
          where: { id: subscription_id, project_id: c.get("organization_id") },
          data: updateData,
          include: {
            discount: {
              include: {
                discount_prices: true,
              },
            },
            Subscription_Items: {
              include: {
                price: true,
              },
            },
            BillingDetails: true,
            Subscription_Scheduled_Changes: true,
          },
        });

        const formattedSubscription = transformSubscription(updatedSubscription);
        return c.json(
          formattedSubscription as z.infer<typeof transformedSubscriptionSchema>,
          HttpStatusCodes.OK
        );
      }
    });
  }
};

export default update_subscription;
