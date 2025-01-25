import { type Context } from "hono";
import { APPRouteHandler } from "~/lib/types";
import { PauseSubscription } from "../subscription.routes";
import { PrismaClient } from "@repo/db/types";
import { transformSubscription, pauseSubscriptionSchema } from "../helpers";
import { DateTime } from "luxon";
import * as HttpStatusCodes from "~/lib/http-status-code";

export const pause_subscription: APPRouteHandler<PauseSubscription> = async (
  c: Context
) => {
  const db: PrismaClient = c.get("db");
  const subscriptionId = c.req.param("subscription_id");
  const input = pauseSubscriptionSchema.parse(await c.req.json());

  // 1. Fetch subscription and validate current state
  const subscription = await db.subscriptions.findUniqueOrThrow({
    where: { id: subscriptionId, project_id: c.get("organization_id") },
    include: {
      Subscription_Scheduled_Changes: true,
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
      (change) => change.action === "cancel"
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

  return await db.$transaction(async (tx) => {
    if (input.effective_from === "immediately") {
      const now = new Date();

      // Clear any existing pause-related scheduled changes
      await tx.subscription_Scheduled_Changes.deleteMany({
        where: {
          subscription_id: subscriptionId,
          action: {
            in: ["pause", "resume"],
          },
        },
      });

      // Create resume scheduled change if resume_at is provided
      if (input.resume_at) {
        await tx.subscription_Scheduled_Changes.create({
          data: {
            id: `sc_${crypto.randomUUID()}`,
            subscription_id: subscriptionId,
            action: "resume",
            effective_at: new Date(input.resume_at),
            resumes_at:
              input.on_resume === "continue_existing_billing_period"
                ? subscription.current_period_ends
                : new Date(input.resume_at),
          },
        });
      }

      // Update subscription
      const updatedSubscription = await tx.subscriptions.update({
        where: { id: subscriptionId },
        data: {
          status: "paused",
          paused_at: now,
        },
        include: {
          Subscription_Scheduled_Changes: true,
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
      const formattedSubscription = transformSubscription(updatedSubscription);
      return c.json(formattedSubscription, HttpStatusCodes.OK);
    } else {
      // Schedule pause for next billing period
      const effectiveDate =
        subscription.next_billed_at || subscription.current_period_ends;

      // Create scheduled pause
      const scheduledChange = await tx.subscription_Scheduled_Changes.create({
        data: {
          id: `sc_${crypto.randomUUID()}`,
          subscription_id: subscriptionId,
          action: "pause",
          effective_at: new Date(effectiveDate!),
          resumes_at: input.resume_at ? new Date(input.resume_at) : null,
        },
      });

      // If resume_at is provided, schedule the resume
      if (input.resume_at) {
        await tx.subscription_Scheduled_Changes.create({
          data: {
            id: `sc_${crypto.randomUUID()}`,
            subscription_id: subscriptionId,
            action: "resume",
            effective_at: new Date(input.resume_at),
            resumes_at:
              input.on_resume === "continue_existing_billing_period"
                ? subscription.current_period_ends
                : new Date(input.resume_at),
          },
        });
      }

      const response = {
        ...subscription,
        scheduled_change: scheduledChange,
      };

      const formattedResponse = transformSubscription(response);
      return c.json(formattedResponse, HttpStatusCodes.OK);
    }
  });
};
export default pause_subscription;
