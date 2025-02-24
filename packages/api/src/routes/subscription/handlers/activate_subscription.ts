import { type Context } from "hono";
import { APPRouteHandler } from "~/lib/types";
import { ActivateSubscription } from "../subscription.routes";
import { transformSubscription } from "../helpers";
import { DateTime } from "luxon";
import * as HttpStatusCodes from "~/lib/http-status-code";
import { calculatePeriodEnd } from "../fns";
import * as schema from "@repo/db/db/schema.ts";
import { db } from "@repo/db";
import { eq, and, inArray } from "drizzle-orm";

const activate_subscription: APPRouteHandler<ActivateSubscription> = async (
  c: Context
) => {
  const subscriptionId = c.req.param("subscription_id");

  // 1. Fetch subscription with all relevant data
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
        error: "not found",
        message: "No subscription found with the specified Id",
      },
      HttpStatusCodes.NOT_FOUND
    );
  }
  // 2. Validate subscription state
  if (subscription.status !== "trial") {
    return c.json(
      {
        error: "Bad Request",
        message: `Cannot activate subscription with status: ${subscription.status}. Only trialing subscriptions can be activated.`,
      },
      HttpStatusCodes.BAD_REQUEST
    );
  }

  // should this be the correct logic? what if you make changes after the scheduled changes?
  if (subscription.Subscription_Scheduled_Changes.length > 0) {
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
        previously_billed_at: now.toString(),
      })
      .where(eq(schema.SubscriptionItems.subscription_id, subscriptionId));

    // forgive me my lord as i am repeating myself
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

export default activate_subscription;
