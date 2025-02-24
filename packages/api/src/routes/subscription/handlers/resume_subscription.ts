import { type Context } from "hono";
import { APPRouteHandler } from "~/lib/types";
import { ResumeSubscription } from "../subscription.routes";
import * as schema from "@repo/db/db/schema.ts";
import { db } from "@repo/db";
import { eq, and, inArray } from "drizzle-orm";
import { resumeSubscriptionSchema, transformSubscription } from "../helpers";
import { DateTime } from "luxon";
import * as HttpStatusCodes from "~/lib/http-status-code";
import { calculatePeriodEnd } from "../fns";

const resume_subscription: APPRouteHandler<ResumeSubscription> = async (
  c: Context
) => {
  const subscriptionId = c.req.param("subscription_id");
  const input = resumeSubscriptionSchema.parse(await c.req.json());

  // 1. Fetch subscription and validate current state
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

  // Validate effective_from field
  if (
    input.effective_from !== "immediately" &&
    input.effective_from !== "next_billing_period"
  ) {
    return c.json(
      {
        error: "Invalid effective_from",
        message:
          "Effective from must be either 'immediately' or 'next_billing_period'",
      },
      HttpStatusCodes.BAD_REQUEST
    );
  }

  const now = DateTime.now();

  // State validations
  if (subscription.status === "cancelled") {
    return c.json(
      {
        error: "",
        message: "Cannot resume a cancelled subscription",
      },
      HttpStatusCodes.BAD_REQUEST
    );
  }

  if (subscription.status === "past_due") {
    return c.json(
      {
        error: "",
        message: "Cannot resume a subscription with outstanding payments",
      },
      HttpStatusCodes.BAD_REQUEST
    );
  }

  if (
    subscription.status === "active" &&
    !subscription.Subscription_Scheduled_Changes.some(
      (change: { action: string }) => change.action === "pause"
    )
  ) {
    return c.json(
      {
        error: "Bad Request",
        message: "Subscription is not paused or scheduled to be paused",
      },
      HttpStatusCodes.BAD_REQUEST
    );
  }

  // Determine next billing date based on effective_from value
  const nextBillingDate =
    input.effective_from === "immediately"
      ? now.toJSDate()
      : DateTime.fromISO(subscription.current_period_ends!).toJSDate();

  return await db.transaction(async (tx) => {
    // Clear any existing resume scheduled changes
    await tx
      .delete(schema.Subscription_Scheduled_Changes)
      .where(
        and(
          eq(
            schema.Subscription_Scheduled_Changes.subscription_id,
            subscriptionId
          ),
          inArray(schema.Subscription_Scheduled_Changes.action, ["resume"])
        )
      );

    if (input.effective_from === "immediately") {
      // Immediate resume
      await tx
        .update(schema.Subscriptions)
        .set({
          status: "active",
          paused_at: null,
          current_period_starts: subscription.current_period_starts,
          current_period_ends: subscription.current_period_ends,
          next_billed_at: subscription.next_billed_at,
        })
        .where(eq(schema.Subscriptions.id, subscriptionId));

      // Clear any pause scheduled changes
      await tx
        .delete(schema.Subscription_Scheduled_Changes)
        .where(
          and(
            eq(
              schema.Subscription_Scheduled_Changes.subscription_id,
              subscriptionId
            )
          )
        );

      const updatedSubscription = await tx.query.Subscriptions.findFirst({
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

      const formattedSubscription = transformSubscription(updatedSubscription!);
      return c.json(formattedSubscription, HttpStatusCodes.OK);
    } else {
      // Schedule resume at next billing period
      const scheduledChange = await tx
        .insert(schema.Subscription_Scheduled_Changes)
        .values({
          id: `sc_${crypto.randomUUID()}`,
          subscription_id: subscriptionId,
          action: "resume",
          effective_at: nextBillingDate.toISOString(),
          resumes_at: nextBillingDate.toISOString(),
        });

      const response = {
        ...subscription,
        scheduled_change: scheduledChange,
      };
      const formattedResponse = transformSubscription(response);
      return c.json(formattedResponse, HttpStatusCodes.OK);
    }
  });
};


export default resume_subscription;
