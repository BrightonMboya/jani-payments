import { type Context } from "hono";
import { APPRouteHandler } from "~/lib/types";
import { PauseSubscription } from "../subscription.routes";
import { transformSubscription, pauseSubscriptionSchema } from "../helpers";
import { DateTime } from "luxon";
import * as HttpStatusCodes from "~/lib/http-status-code";
import * as schema from "@repo/db/db/schema.ts";
import { db } from "@repo/db";
import { eq, and, inArray } from "drizzle-orm";
import { ErrorSchema } from "~/lib/utils/zod-helpers";
import { z } from "zod";

export const pause_subscription: APPRouteHandler<PauseSubscription> = async (
  c: Context
) => {
  const subscriptionId = c.req.param("subscription_id");
  const input = pauseSubscriptionSchema.parse(await c.req.json());

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
      Subscription_Scheduled_Changes: true,
    },
  });
  if (!subscription) {
    return c.json(
      {
        error: "Not Found",
        message: "No Subscription found with the specified id",
      } satisfies z.infer<typeof ErrorSchema>,
      HttpStatusCodes.NOT_FOUND
    );
  }

  // Validate subscription state
  if (subscription.status === "paused") {
    return c.json(
      {
        error: "Bad Request",
        message: "Subscription is already paused",
      },
      HttpStatusCodes.CONFLICT
    );
  }

  if (subscription.status === "cancelled") {
    return c.json(
      {
        error: "Bad Request",
        message: "Cannot pause a cancelled subscription",
      },
      HttpStatusCodes.CONFLICT
    );
  }

  if (subscription.status === "past_due") {
    return c.json(
      {
        error: "Bad Request",
        message: "Cannot pause a subscription with outstanding payments",
      },
      HttpStatusCodes.CONFLICT
    );
  }

  // Validate resume_at if provided
  if (input.resume_at) {
    const resumeDate = DateTime.fromISO(input.resume_at);
    const now = DateTime.now();

    if (!resumeDate.isValid) {
      return c.json(
        {
          error: "Invalid Date",
          message: "Invalid resume_at date format",
        },
        HttpStatusCodes.BAD_REQUEST
      );
    }

    if (resumeDate <= now) {
      return c.json(
        {
          error: "Invalid resume_at date",
          message: "Resume date must be in the future",
        },
        HttpStatusCodes.BAD_REQUEST
      );
    }
  }

  // Check for conflicting scheduled changes
  const hasConflictingChanges =
    subscription.Subscription_Scheduled_Changes.some(
      (change: { action: string }) => change.action === "cancel"
    );
  if (hasConflictingChanges) {
    return c.json(
      {
        error: "Conflicting Changes",
        message: "Cannot pause subscription with pending cancellation",
      },
      HttpStatusCodes.CONFLICT
    );
  }

  return await db.transaction(async (tx) => {
    if (input.effective_from === "immediately") {
      const now = new Date();

      // Clear any existing pause-related scheduled changes
      await tx
        .delete(schema.Subscription_Scheduled_Changes)
        .where(
          and(
            eq(
              schema.Subscription_Scheduled_Changes.subscription_id,
              subscriptionId
            ),
            inArray(schema.Subscription_Scheduled_Changes.action, [
              "pause",
              "resume",
            ])
          )
        );

      // Create resume scheduled change if resume_at is provided
      if (input.resume_at) {
        await tx.insert(schema.Subscription_Scheduled_Changes).values({
          id: `sc_${crypto.randomUUID()}`,
          subscription_id: subscriptionId,
          action: "resume",
          effective_at: new Date(input.resume_at).toISOString(),
          resumes_at:
            input.on_resume === "continue_existing_billing_period"
              ? subscription.current_period_ends
              : new Date(input.resume_at).toISOString(),
        });
      }

      // Update subscription
      await tx
        .update(schema.Subscriptions)
        .set({
          status: "paused",
          paused_at: now.toISOString(),
        })
        .where(eq(schema.Subscriptions.id, subscriptionId));

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
          Subscription_Scheduled_Changes: true,
        },
      });

      const formattedSubscription = transformSubscription(updatedSubscription!);
      return c.json(formattedSubscription, HttpStatusCodes.OK);
    } else {
      // Schedule pause for next billing period
      const effectiveDate =
        subscription.next_billed_at || subscription.current_period_ends;

      // Create scheduled pause
      const scheduledChange = await tx
        .insert(schema.Subscription_Scheduled_Changes)
        .values({
          id: `sc_${crypto.randomUUID()}`,
          subscription_id: subscriptionId,
          action: "pause",
          effective_at: new Date(effectiveDate!).toISOString(),
          resumes_at: input.resume_at
            ? new Date(input.resume_at).toISOString()
            : null,
        })
        .returning();

      // If resume_at is provided, schedule the resume
      if (input.resume_at) {
        await tx.insert(schema.Subscription_Scheduled_Changes).values({
          id: `sc_${crypto.randomUUID()}`,
          subscription_id: subscriptionId,
          action: "resume",
          effective_at: new Date(input.resume_at).toISOString(),
          resumes_at:
            input.on_resume === "continue_existing_billing_period"
              ? subscription.current_period_ends
              : new Date(input.resume_at).toISOString(),
        });
      }

      const response = {
        ...subscription,
        scheduled_change: scheduledChange[0],
      };

      const formattedResponse = transformSubscription(response);
      return c.json(formattedResponse, HttpStatusCodes.OK);
    }
  });
};
export default pause_subscription;
