import { type Context } from "hono";
import { APPRouteHandler } from "~/lib/types";
import { ActivateSubscription } from "../subscription.routes";
import { transformSubscription } from "../helpers";
import { DateTime } from "luxon";
import * as HttpStatusCodes from "~/lib/http-status-code";
import { calculatePeriodEnd } from "../fns";
import * as schema from "@repo/db/db/schema.ts";
import { db } from "@repo/db";
import { sql, eq, and, inArray } from "drizzle-orm";



const activate_subscription: APPRouteHandler<ActivateSubscription> = async (
  c: Context
) => {
  const subscriptionId = c.req.param("subscription_id");

  // 1. Fetch subscription with all relevant data
  const subscription = await db
     .select({
       // Main subscription fields
       id: schema.Subscriptions.id,
       project_id: schema.Subscriptions.project_id,
       customer_id: schema.Subscriptions.customer_id,
       status: schema.Subscriptions.status,
       createdAt: schema.Subscriptions.createdAt,
       updatedAt: schema.Subscriptions.updatedAt,
       // Billing details as an object
       billingDetails: sql<string>`jsonb_build_object(
        'id', ${schema.BillingDetails.id},
        'paymentInterval', ${schema.BillingDetails.paymentInterval},
        'paymentFrequency', ${schema.BillingDetails.paymentFrequency},
        'enableCheckout', ${schema.BillingDetails.enableCheckout},
        'purchaseOrderNumber', ${schema.BillingDetails.purchaseOrderNumber},
        'additionalInformation', ${schema.BillingDetails.additionalInformation}
      )`,
       // Scheduled changes as an array
       scheduledChanges: sql<string>`COALESCE(jsonb_agg(
        jsonb_build_object(
          'id', ${schema.Subscription_Scheduled_Changes.id},
          'action', ${schema.Subscription_Scheduled_Changes.action},
          'effectiveAt', ${schema.Subscription_Scheduled_Changes.effectiveAt},
          'resumesAt', ${schema.Subscription_Scheduled_Changes.resumesAt},
          'status', ${schema.Subscription_Scheduled_Changes.status}
        ) ORDER BY ${schema.Subscription_Scheduled_Changes.effectiveAt}
      ) FILTER (WHERE ${schema.Subscription_Scheduled_Changes.id} IS NOT NULL), '[]')`,
       // Discount as an object
       discount: sql<string>`jsonb_build_object(
        'id', ${schema.Discounts.id},
        'status', ${schema.Discounts.status},
        'amount', ${schema.Discounts.amount},
        'type', ${schema.Discounts.type}
      )`,
       // Subscription items with prices as an array
       subscriptionItems: sql<string>`COALESCE(jsonb_agg(
        jsonb_build_object(
          'id', ${schema.SubscriptionItems.id},
          'quantity', ${schema.SubscriptionItems.quantity},
          'status', ${schema.SubscriptionItems.status},
          'price', jsonb_build_object(
            'id', ${schema.Prices.id},
            'name', ${schema.Prices.name},
            'description', ${schema.Prices.description},
            'amount', ${schema.Prices.amount}
          )
        ) ORDER BY ${schema.SubscriptionItems.created_at}
      ) FILTER (WHERE ${schema.SubscriptionItems.id} IS NOT NULL), '[]')`,
     })
     .from(schema.Subscriptions)
     .leftJoin(
       schema.BillingDetails,
       eq(schema.BillingDetails.subscription_id, schema.Subscriptions.id)
     )
     .leftJoin(
       schema.Subscription_Scheduled_Changes,
       and(
         eq(
           schema.Subscription_Scheduled_Changes.subscription_id,
           schema.Subscriptions.id
         ),
         inArray(schema.Subscription_Scheduled_Changes.action, [
           "pause",
           "cancel",
         ])
       )
     )
     .leftJoin(
       schema.Discounts,
       eq(schema.Discounts.id, schema.Subscriptions.discount_id)
     )
     .leftJoin(
       schema.DiscountPrices,
       eq(schema.DiscountPrices.discount_id, schema.Discounts.id)
     )
     .leftJoin(
       schema.SubscriptionItems,
       eq(schema.SubscriptionItems.subscription_id, schema.Subscriptions.id)
     )
     .leftJoin(
       schema.Prices,
       eq(schema.Prices.id, schema.SubscriptionItems.price_id)
     )
     .where(
       and(
         eq(schema.Subscriptions.id, "sub_09c027da-1cf9-467a-a89c-e5accb4c6d8d"),
         eq(schema.Subscriptions.project_id, "cm5m78h5a00011vectwxh5dcx")
       )
     )
     .groupBy(
       schema.Subscriptions.id,
       schema.BillingDetails.id,
       schema.Discounts.id
     );
   

  // const subscriptions = await db.subscriptions.findUniqueOrThrow({
  //   where: { id: subscriptionId, project_id: c.get("organization_Id") },
  //   include: {
  //     BillingDetails: true,
  //     Subscription_Scheduled_Changes: {
  //       where: {
  //         action: {
  //           in: ["pause", "cancel"],
  //         },
  //       },
  //     },
  //     discount: {
  //       include: {
  //         discount_prices: true,
  //       },
  //     },
  //     Subscription_Items: {
  //       include: {
  //         price: true,
  //       },
  //     },
  //   },
  // });

  if (!subscription) {
    return c.json(
      {
        error: "not found",
        message: "No subscription found with the specified Id",
      },
      HttpStatusCodes.NOT_FOUND
    );
  }
  // 2. Validate subscription state
  if (subscription[0].status !== "trial") {
    return c.json(
      {
        error: "Bad Request",
        message: `Cannot activate subscription with status: ${subscription[0].status}. Only trialing subscriptions can be activated.`,
      },
      HttpStatusCodes.BAD_REQUEST
    );
  }

  // should this be the correct logic? what if you make changes after the scheduled changes?
  if (subscription[0].scheduledChanges.length > 0) {
    return c.json(
      {
        error: "Bad Request",
        message: "Cannot activate subscription with pending scheduled changes",
      },
      HttpStatusCodes.BAD_REQUEST
    );
  }
  const now = DateTime.now();

  // 3. Calculate new billing dates
  const newPeriodEnd = calculatePeriodEnd(now.toJSDate(), subscription);

  const updatedSubscription = await db.transaction(async (tx) => {
    // 4. update the subscription
    await tx
      .update(schema.Subscriptions)
      .set({
        status: "active",
        // Update billing period to start now
        current_period_starts: now.toString(),
        current_period_ends: newPeriodEnd.toISOString(),
        // Set first billing to now since we're activating immediately
        first_billed_at: now.toString(),
        // Next billing will be at the end of new period
        next_billed_at: newPeriodEnd.toISOString(),
      })
      .where(
        and(
          eq(schema.Subscriptions.id, subscriptionId),
          eq(schema.Subscriptions.project_id, c.get("organization_Id"))
        )
      );

    // 5. Update subscription items
    // Note: We only update trial-related dates, not the status as per Paddle's behavior
    await tx
      .update(schema.SubscriptionItems)
      .set({
        trial_ended_at: now.toString(),
        next_billed_at: newPeriodEnd.toISOString(),
        previously_billed_at: now.toString()
      })
      .where(eq(schema.SubscriptionItems.subscription_id, subscriptionId));

    // forgive me my lord as i am repeating myself
    return await tx.select({
      // Main subscription fields
      id: schema.Subscriptions.id,
      project_id: schema.Subscriptions.project_id,
      customer_id: schema.Subscriptions.customer_id,
      status: schema.Subscriptions.status,
      createdAt: schema.Subscriptions.created_at,
      updatedAt: schema.Subscriptions.updated_at,
      // Billing details as an object
      billingDetails: sql<string>`jsonb_build_object(
        'id', ${schema.BillingDetails.id},
        'paymentInterval', ${schema.BillingDetails.paymentInterval},
        'paymentFrequency', ${schema.BillingDetails.paymentFrequency},
        'enableCheckout', ${schema.BillingDetails.enableCheckout},
        'purchaseOrderNumber', ${schema.BillingDetails.purchaseOrderNumber},
        'additionalInformation', ${schema.BillingDetails.additionalInformation}
      )`,
      // Scheduled changes as an array
      scheduledChanges: sql<string>`COALESCE(jsonb_agg(
        jsonb_build_object(
          'id', ${schema.Subscription_Scheduled_Changes.id},
          'action', ${schema.Subscription_Scheduled_Changes.action},
          'effectiveAt', ${schema.Subscription_Scheduled_Changes.effectiveAt},
          'resumesAt', ${schema.Subscription_Scheduled_Changes.resumesAt},
          'status', ${schema.Subscription_Scheduled_Changes.status}
        ) ORDER BY ${schema.Subscription_Scheduled_Changes.effectiveAt}
      ) FILTER (WHERE ${schema.Subscription_Scheduled_Changes.id} IS NOT NULL), '[]')`,
      // Discount as an object
      discount: sql<string>`jsonb_build_object(
        'id', ${schema.Discounts.id},
        'status', ${schema.Discounts.status},
        'amount', ${schema.Discounts.amount},
        'type', ${schema.Discounts.type}
      )`,
      // Subscription items with prices as an array
      subscriptionItems: sql<string>`COALESCE(jsonb_agg(
        jsonb_build_object(
          'id', ${schema.SubscriptionItems.id},
          'quantity', ${schema.SubscriptionItems.quantity},
          'status', ${schema.SubscriptionItems.status},
          'price', jsonb_build_object(
            'id', ${schema.Prices.id},
            'name', ${schema.Prices.name},
            'description', ${schema.Prices.description},
            'amount', ${schema.Prices.amount}
          )
        ) ORDER BY ${schema.SubscriptionItems.created_at}
      ) FILTER (WHERE ${schema.SubscriptionItems.id} IS NOT NULL), '[]')`,
    })
      .from(schema.Subscriptions)
      .leftJoin(
        schema.BillingDetails,
        eq(schema.BillingDetails.subscription_id, schema.Subscriptions.id)
      )
      .leftJoin(
        schema.Subscription_Scheduled_Changes,
        and(
          eq(
            schema.Subscription_Scheduled_Changes.subscription_id,
            schema.Subscriptions.id
          ),
          inArray(schema.Subscription_Scheduled_Changes.action, [
            "pause",
            "cancel",
          ])
        )
      )
      .leftJoin(
        schema.Discounts,
        eq(schema.Discounts.id, schema.Subscriptions.discount_id)
      )
      .leftJoin(
        schema.DiscountPrices,
        eq(schema.DiscountPrices.discount_id, schema.Discounts.id)
      )
      .leftJoin(
        schema.SubscriptionItems,
        eq(schema.SubscriptionItems.subscription_id, schema.Subscriptions.id)
      )
      .leftJoin(
        schema.Prices,
        eq(schema.Prices.id, schema.SubscriptionItems.price_id)
      )
      .where(
        and(
          eq(
            schema.Subscriptions.id,
            "sub_09c027da-1cf9-467a-a89c-e5accb4c6d8d"
          ),
          eq(schema.Subscriptions.project_id, "cm5m78h5a00011vectwxh5dcx")
        )
      )
      .groupBy(
        schema.Subscriptions.id,
        schema.BillingDetails.id,
        schema.Discounts.id
      );
  })

  // return await db.$transaction(async (tx) => {
  //   // 4. Update subscription
  //   const updatedSubscription = await tx.subscriptions.update({
  //     where: { id: subscriptionId, project_id: c.get("organization_Id") },
  //     data: {
  //       status: "active",
  //       // Update billing period to start now
  //       current_period_starts: now.toJSDate(),
  //       current_period_ends: newPeriodEnd,
  //       // Set first billing to now since we're activating immediately
  //       first_billed_at: now.toJSDate(),
  //       // Next billing will be at the end of new period
  //       next_billed_at: newPeriodEnd,
  //     },
  //     include: {
  //       BillingDetails: true,
  //       discount: {
  //         include: {
  //           discount_prices: true,
  //         },
  //       },
  //       Subscription_Items: {
  //         include: {
  //           price: true,
  //         },
  //       },
  //       Subscription_Scheduled_Changes: true,
  //     },
  //   });

  //   // 5. Update subscription items
  //   // Note: We only update trial-related dates, not the status as per Paddle's behavior
  //   await tx.subscriptionItems.updateMany({
  //     where: { subscription_id: subscriptionId },
  //     data: {
  //       trial_ended_at: now.toJSDate(),
  //       next_billed_at: newPeriodEnd,
  //       previously_billed_at: now.toJSDate(),
  //     },
  //   });

    const formattedSubscription = transformSubscription(updatedSubscription[0]);
    return c.json(formattedSubscription, HttpStatusCodes.OK);
  }

export default activate_subscription;
