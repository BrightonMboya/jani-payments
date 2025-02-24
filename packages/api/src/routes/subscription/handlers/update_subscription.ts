import * as schema from "@repo/db/db/schema.ts";
import { db } from "@repo/db";
import { eq, and, inArray, notInArray } from "drizzle-orm";
import { type Context } from "hono";
import { APPRouteHandler } from "~/lib/types";
import { UpdateSubscription } from "../subscription.routes";
import { transformSubscription, updateSubscriptionSchema } from "../helpers";
import * as HttpStatusCodes from "~/lib/http-status-code";
import { DateTime } from "luxon";
import {
  calculateSubscriptionDates,
  getSubscriptionStatus,
  type PriceDetails,
} from "../fns";

const update_subscription: APPRouteHandler<UpdateSubscription> = async (
  c: Context
) => {
  const subscriptionId = c.req.param("subscription_id");
  const input = updateSubscriptionSchema.parse(await c.req.json());

  const subscription = await db.query.Subscriptions.findFirst({
    where: and(
      eq(schema.Subscriptions.id, subscriptionId),
      eq(schema.Subscriptions.project_id, c.get("organization_Id"))
    ),
    with: {
      BillingDetails: true,
      discount: {
        with: {
          discount_prices: true,
        },
      },
      Subscription_Items: {
        with: {
          price: true,
        },
      },
      Subscription_Scheduled_Changes: {
        where: inArray(schema.Subscription_Scheduled_Changes.action, [
          "pause",
          "cancel",
        ]),
      },
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
    const newPrices = subscription.Subscription_Items.filter(
      (item: { price_id: string }) =>
        (input.items as { price_id: string }[]).some(
          (newItem) => newItem.price_id === item.price_id
        )
    ).map((item) => item.price);

    // Check if any price is archived
    if (newPrices.some((p: { status: string }) => p.status === "archived")) {
      return c.json(
        {
          error: "Bad Request",
          message: "Cannot update subscription with archived prices",
        },
        HttpStatusCodes.BAD_REQUEST
      );
    }

    // Validate currency compatibility
    if (newPrices.some((p) => p.currencyCode !== input.currency_code)) {
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
      next_billed_at: new Date(input.next_billed_at).toISOString(),
    }),
    ...(input.collection_mode && { collection_mode: input.collection_mode }),
    ...(input.discount && {
      discount_id: input.discount.id,
    }),
  };

  const updatedSubscription = await db.transaction(async (tx) => {
    // 7. Handle items update if provided
    if (input.items) {
      // Delete existing items not in the update
      const newPriceIds = input.items.map((item) => item.price_id);
      await tx
        .delete(schema.SubscriptionItems)
        .where(
          and(
            eq(schema.SubscriptionItems.subscription_id, subscriptionId),
            notInArray(schema.SubscriptionItems.price_id, newPriceIds)
          )
        );
      const priceDetails = await Promise.all(
        input.items.map((item) =>
          db.query.Prices.findFirst({
            where: (fields, operators) =>
              operators.eq(fields.id, item.price_id),
            columns: {
              trialPeriodFrequency: true,
              trialPeriodInterval: true,
              billingCycleFrequency: true,
              billingCycleInterval: true,
              currencyCode: true,
              status: true,
            },
          })
        )
      );

      // Filter out undefined values
      const filteredPriceDetails = priceDetails.filter(
        (item): item is PriceDetails => item !== undefined
      );

      const dates = calculateSubscriptionDates(filteredPriceDetails);
      const { subscriptionStatus, itemStatus } =
        getSubscriptionStatus(filteredPriceDetails);

      // then create the new items
      await Promise.all(
        input.items.map((item, index) =>
          tx.insert(schema.SubscriptionItems).values({
            id: `si_${crypto.randomUUID()}`,
            price_id: item.price_id,
            subscription_id: subscriptionId,
            quantity: Number(item.quantity),
            status: itemStatus,
            recurring: true,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            trial_started_at: dates.has_trial
              ? dates.started_at.toISOString()
              : null,
            trial_ended_at: dates.has_trial
              ? dates.trial_end_dates[index]?.toISOString()
              : null,
            previously_billed_at: dates.has_trial
              ? null
              : dates.started_at.toISOString(),
            next_billed_at: dates.next_billed_at.toISOString(),
          })
        )
      );
    }

    // 9. Handle billing details update
    if (input.billing_details) {
      if (input.billing_details === null) {
        await tx
          .delete(schema.BillingDetails)
          .where(eq(schema.BillingDetails.subscription_id, subscriptionId));
      } else {
        const existingBillingDetail = await tx.query.BillingDetails.findFirst({
          where: (fields, operators) =>
            operators.eq(fields.subscription_id, subscriptionId),
        });

        if (existingBillingDetail) {
          // Update existing record

          await tx
            .update(schema.BillingDetails)
            .set({
              enable_checkout: input.billing_details.enable_checkout!,
              purchase_order_number:
                input.billing_details.purchase_order_number!,
              additional_information:
                input.billing_details?.additional_information!,
              payment_interval:
                input.billing_details.payment_terms?.payment_interval,
              payment_frequency:
                input.billing_details.payment_terms?.payment_frequency,
              updated_at: new Date().toISOString(),
            })
            .where(eq(schema.BillingDetails.subscription_id, subscriptionId));
        } else {
          // Create new record
          await tx.insert(schema.BillingDetails).values({
            id: `bd_${crypto.randomUUID()}`,
            subscription_id: subscriptionId,
            enable_checkout: input.billing_details.enable_checkout ?? undefined,
            purchase_order_number: input.billing_details.purchase_order_number,
            additional_information:
              input.billing_details.additional_information,
            payment_interval:
              input.billing_details.payment_terms?.payment_interval!,
            payment_frequency:
              input.billing_details.payment_terms?.payment_frequency!,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          });
        }
      }
    }

    // 10. Update subscription
    await tx
      .update(schema.Subscriptions)
      .set(updateData)
      .where(
        and(
          eq(schema.Subscriptions.id, subscriptionId),
          eq(schema.Subscriptions.project_id, c.get("organization_Id"))
        )
      );
    return await tx.query.Subscriptions.findFirst({
      where: and(
        eq(schema.Subscriptions.id, subscriptionId),
        eq(schema.Subscriptions.project_id, c.get("organization_Id"))
      ),
      with: {
        BillingDetails: true,
        discount: {
          with: {
            discount_prices: true,
          },
        },
        Subscription_Items: {
          with: {
            price: true,
          },
        },
        Subscription_Scheduled_Changes: {
          where: inArray(schema.Subscription_Scheduled_Changes.action, [
            "pause",
            "cancel",
          ]),
        },
      },
    });
  });
  const formattedSubscription = transformSubscription(updatedSubscription!);
  return c.json(formattedSubscription, HttpStatusCodes.OK);
};

export default update_subscription;
