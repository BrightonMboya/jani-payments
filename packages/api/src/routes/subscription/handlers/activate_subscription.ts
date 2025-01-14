import { type Context } from "hono";
import { APPRouteHandler } from "~/lib/types";
import { ActivateSubscription } from "../subscription.routes";
import { PrismaClient } from "@repo/db/types";
import { transformSubscription } from "../helpers";
import { DateTime } from "luxon";
import * as HttpStatusCodes from "~/lib/http-status-code";
import { calculatePeriodEnd } from "../fns";

const activate_subscription: APPRouteHandler<ActivateSubscription> = async (
  c: Context
) => {
  const db: PrismaClient = c.get("db");
  const subscriptionId = c.req.param("subscription_id");

  // 1. Fetch subscription with all relevant data
  const subscription = await db.subscriptions.findUniqueOrThrow({
    where: { id: subscriptionId },
    include: {
      BillingDetails: true,
      Subscription_Scheduled_Changes: {
        where: {
          action: {
            in: ["pause", "cancel"],
          },
        },
      },
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

  return await db.$transaction(async (tx) => {
    // 4. Update subscription
    const updatedSubscription = await tx.subscriptions.update({
      where: { id: subscriptionId },
      data: {
        status: "active",
        // Update billing period to start now
        current_period_starts: now.toJSDate(),
        current_period_ends: newPeriodEnd,
        // Set first billing to now since we're activating immediately
        first_billed_at: now.toJSDate(),
        // Next billing will be at the end of new period
        next_billed_at: newPeriodEnd,
      },
      include: {
        BillingDetails: true,
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
        Subscription_Scheduled_Changes: true,
      },
    });

    // 5. Update subscription items
    // Note: We only update trial-related dates, not the status as per Paddle's behavior
    await tx.subscriptionItems.updateMany({
      where: { subscription_id: subscriptionId },
      data: {
        trial_ended_at: now.toJSDate(),
        next_billed_at: newPeriodEnd,
        previously_billed_at: now.toJSDate(),
      },
    });

    const formattedSubscription = transformSubscription(updatedSubscription);
    return c.json(formattedSubscription, HttpStatusCodes.OK);
  });
};

export default activate_subscription;
