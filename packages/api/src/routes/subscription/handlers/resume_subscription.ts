import { type Context } from "hono";
import { APPRouteHandler } from "~/lib/types";
import { ResumeSubscription } from "../subscription.routes";
import { PrismaClient } from "@repo/db/types";
import { resumeSubscriptionSchema, transformSubscription } from "../helpers";
import { DateTime } from "luxon";
import * as HttpStatusCodes from "~/lib/http-status-code";
import { calculatePeriodEnd } from "../fns";

const resume_subscription: APPRouteHandler<ResumeSubscription> = async (
  c: Context
) => {
  const db: PrismaClient = c.get("db");
  const subscriptionId = c.req.param("subscription_id");
  const input = resumeSubscriptionSchema.parse(await c.req.json());

  // 1. Fetch subscription and validate current state
  const subscription = await db.subscriptions.findUniqueOrThrow({
    where: { id: subscriptionId },

    include: {
      BillingDetails: true,
      Subscription_Scheduled_Changes: {
        where: {
          action: {
            in: ["pause", "resume", "cancel"],
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
  const resumeDate = DateTime.fromISO(input.effective_from);
  const now = DateTime.now();

  // Validate resume date
  if (!resumeDate.isValid) {
    return c.json(
      {
        error: "Invalid Date",
        message: "Invalid effective_from date format",
      },
      HttpStatusCodes.BAD_REQUEST
    );
  }

  if (resumeDate < now) {
    return c.json(
      {
        error: "Bad Request",
        message: "Resume date cannot be in the past",
      },
      HttpStatusCodes.BAD_REQUEST
    );
  }

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
      (change) => change.action === "pause"
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

  // Handle continue_existing_billing_period option
  if (input.on_resume === "continue_existing_billing_period") {
    const periodEndDate = DateTime.fromJSDate(
      subscription.current_period_ends!
    );

    if (resumeDate > periodEndDate) {
      return c.json(
        {
          error: "Invalid resume_date",
          message:
            "Resume date is after the current billing period end date. Cannot continue existing period.",
        },
        HttpStatusCodes.BAD_REQUEST
      );
    }
  }

  // Calculate next billing date based on resume strategy
  const nextBillingDate =
    input.on_resume === "continue_existing_billing_period"
      ? subscription.current_period_ends
      : resumeDate.toJSDate();

  return await db.$transaction(async (tx) => {
    // Clear any existing resume scheduled changes
    await tx.subscription_Scheduled_Changes.deleteMany({
      where: {
        subscription_id: subscriptionId,
        action: "resume",
      },
    });

    if (resumeDate <= now.plus({ minutes: 5 })) {
      // Allow 5 minutes buffer for "immediate" resumes
      // Immediate resume
      const updatedSubscription = await tx.subscriptions.update({
        where: { id: subscriptionId },
        data: {
          status: "active",
          paused_at: null,
          // Only update billing period if starting new one
          ...(input.on_resume === "start_new_billing_period" && {
            current_period_starts: resumeDate.toJSDate(),
            current_period_ends: calculatePeriodEnd(
              resumeDate.toJSDate(),
              subscription
            ),
            next_billed_at: calculatePeriodEnd(
              resumeDate.toJSDate(),
              subscription
            ),
          }),
          // Clear any pause scheduled changes
          Subscription_Scheduled_Changes: {
            deleteMany: {
              action: "pause",
            },
          },
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
      // Schedule future resume
      const scheduledChange = await tx.subscription_Scheduled_Changes.create({
        data: {
          id: `sc_${crypto.randomUUID()}`,
          subscription_id: subscriptionId,
          action: "resume",
          effective_at: resumeDate.toJSDate(),
          resumes_at: nextBillingDate,
        },
        include: {
        
        }
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
