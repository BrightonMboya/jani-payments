import { type Context } from "hono";
import { APPRouteHandler } from "~/lib/types";
import {
  ActivateSubscription,
  CancelSubscription,
  CreateSubscription,
  ListSubscription,
  PauseSubscription,
  ResumeSubscription,
} from "./subscription.routes";
import { PrismaClient } from "@repo/db/types";
import {
  cancelSubscriptionSchema,
  createSubscriptionSchema,
  pauseSubscriptionSchema,
  resumeSubscriptionSchema,
  transformSubscription,
} from "./helpers";
import {
  calculatePeriodEnd,
  calculateSubscriptionDates,
  getSubscriptionStatus,
} from "./fns";
import * as HttpStatusCodes from "~/lib/http-status-code";
import { ErrorSchema } from "~/lib/utils/zod-helpers";
import { DateTime } from "luxon";
import { z } from "zod";

export const create_subscription: APPRouteHandler<CreateSubscription> = async (
  c: Context
) => {
  const db: PrismaClient = c.get("db");
  const user = c.get("user");
  const input = createSubscriptionSchema.parse(await c.req.json());

  // 1. Fetch project and prices
  const [project_id, priceDetails] = await Promise.all([
    db.project.findUnique({
      where: {
        slug: user?.user.defaultWorkspace,
      },
      select: {
        id: true,
      },
    }),

    Promise.all(
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
    ),
  ]);

  // 2. Validate currencies and prices
  const currencies = new Set(priceDetails.map((p) => p.currency_code));
  if (currencies.size > 1) {
    throw new Error("All prices must be in the same currency");
  }
  if (priceDetails.some((p) => p.status === "archived")) {
    throw new Error("Cannot create subscription with archived prices");
  }

  // 3. Calculate dates and determine status
  const dates = calculateSubscriptionDates(priceDetails);
  const { subscriptionStatus, itemStatus } =
    getSubscriptionStatus(priceDetails);

  // 4. Create the subscription with a transaction
  return await db.$transaction(async (tx) => {
    const subscription = await tx.subscriptions.create({
      data: {
        id: `sub_${crypto.randomUUID()}`,
        status: subscriptionStatus, // Automatically set based on trial periods
        currency_code: input.currency_code,
        customer_id: input.customer_id,
        address_id: input.address_id,
        project_id: project_id?.id!,
        discount_id: input.discount_id,
        collection_mode: "automatic",

        // Billing cycle info from first price
        billing_cycle_interval: priceDetails[0].billing_cycle_interval,
        billing_cycle_frequency: priceDetails[0].billing_cycle_frequency,

        // Dates
        started_at: dates.started_at,
        first_billed_at: dates.first_billed_at,
        next_billed_at: dates.next_billed_at,
        current_period_starts: dates.current_period_starts,
        current_period_ends: dates.current_period_ends,

        // Create subscription items
        Subscription_Items: {
          createMany: {
            data: input.items.map((item, index) => ({
              id: `si_${crypto.randomUUID()}`,
              price_id: item.price_id,
              quantity: Number(item.quantity),
              status: itemStatus, // Automatically set based on trial periods
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
          },
        },

        // Create billing details if provided
        BillingDetails: input.billingDetails
          ? {
              create: {
                id: `bd_${crypto.randomUUID()}`,
                payment_interval: input.billingDetails.payment_interval,
                payment_frequency: input.billingDetails.payment_frequency,
                enable_checkout: input.billingDetails.enable_checkout,
                purchase_order_number: `po_${crypto.randomUUID()}`,
                additional_information:
                  input.billingDetails.additional_information,
                updated_at: new Date(),
              },
            }
          : undefined,
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
        Subscription_Scheduled_Changes: true,
      },
    });
    const formattedSubscription = transformSubscription(subscription);
    return c.json(formattedSubscription, HttpStatusCodes.OK);
  });
};

export const list_subscriptions: APPRouteHandler<ListSubscription> = async (
  c: Context
) => {
  const db: PrismaClient = c.get("db");
  const user = c.get("user");
  const project_id = await db.project.findUnique({
    where: {
      slug: user?.user.defaultWorkspace,
    },
    select: {
      id: true,
    },
  });

  const subscriptions = await db.subscriptions.findMany({
    where: {
      project_id: project_id?.id!,
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
      Subscription_Scheduled_Changes: true,
      BillingDetails: true,
    },
  });

  const transformedSubscriptions = subscriptions.map((x) =>
    transformSubscription(x)
  );

  return c.json(transformedSubscriptions, 200);
};

export const cancel_subscription: APPRouteHandler<CancelSubscription> = async (
  c: Context
) => {
  const db: PrismaClient = c.get("db");
  const subscription_id = c.req.param("subscription_id");
  const input = cancelSubscriptionSchema.parse(await c.req.json());
  const subscription = await db.subscriptions.findUnique({
    where: {
      id: subscription_id,
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
      } satisfies z.infer<typeof ErrorSchema>,
      HttpStatusCodes.NOT_FOUND
    );
  }
  if (subscription?.status === "cancelled") {
    return c.json(
      {
        error: "Bad Request",
        message: "Subscription is already canceled",
      },
      HttpStatusCodes.BAD_REQUEST
    );
  }

  return await db.$transaction(async (tx) => {
    if (input.effective_from === "immediately") {
      const now = new Date();
      // Update subscription
      const updatedSubscription = await tx.subscriptions.update({
        where: { id: subscription_id },
        data: {
          status: "cancelled",
          canceled_at: now,
          // Clear scheduled changes if any
          Subscription_Scheduled_Changes: {
            deleteMany: {},
          },
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

      // Update subscription items
      //   await tx.subscriptionItems.updateMany({
      //     where: { subscription_id: subscription_id },
      //     data: {
      //       status: "inactive",
      //       updated_at: now,
      //     },
      //   });

      const formattedSubscription = transformSubscription({
        ...(updatedSubscription as any),
      });
      return c.json(formattedSubscription, HttpStatusCodes.OK);
    } else {
      // Schedule cancellation for next billing period
      const scheduledChange = await tx.subscription_Scheduled_Changes.create({
        data: {
          id: `sc_${crypto.randomUUID()}`,
          subscription_id: subscription_id,
          action: "cancel",
          effective_at: subscription.next_billed_at || new Date(),
        },
      });
      // Don't change subscription status yet, just return the scheduled change
      const response = {
        ...subscription,
        scheduled_change: scheduledChange,
      };

      const formattedResponse = transformSubscription({
        ...(response as any),
      });
      return c.json(formattedResponse, HttpStatusCodes.OK);
    }
  });
};

export const pause_subscription: APPRouteHandler<PauseSubscription> = async (
  c: Context
) => {
  const db: PrismaClient = c.get("db");
  const subscriptionId = c.req.param("subscription_id");
  const input = pauseSubscriptionSchema.parse(await c.req.json());

  // 1. Fetch subscription and validate current state
  const subscription = await db.subscriptions.findUniqueOrThrow({
    where: { id: subscriptionId },
    // include: {
    //   Subscription_Scheduled_Changes: true,
    // },
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

export const resume_subscription: APPRouteHandler<ResumeSubscription> = async (
  c: Context
) => {
  const db: PrismaClient = c.get("db");
  const subscriptionId = c.req.param("subscription_id");
  const input = resumeSubscriptionSchema.parse(await c.req.json());

  // 1. Fetch subscription and validate current state
  const subscription = await db.subscriptions.findUniqueOrThrow({
    where: { id: subscriptionId },

    include: {
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

export const activate_subscription: APPRouteHandler<
  ActivateSubscription
> = async (c: Context) => {
  const db: PrismaClient = c.get("db");
  const subscriptionId = c.req.param("subscription_id");

  // 1. Fetch subscription with all relevant data
  const subscription = await db.subscriptions.findUniqueOrThrow({
    where: { id: subscriptionId },
    include: {
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
