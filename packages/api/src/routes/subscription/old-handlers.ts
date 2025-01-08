import {
  type CreateSubscription,
  GetSubscription,
  ListSubscription,
} from "./subscription.routes";
import { type APPRouteHandler } from "~/lib/types";
import { type Context } from "hono";
import { PrismaClient } from "@repo/db/types";
import { type SubscriptionItemsStatus } from "@repo/db/types";
import { createSubscriptionSchema, transformSubscription } from "./helpers";
import { ErrorSchema } from "~/lib/utils/zod-helpers";
import { z } from "zod";
import * as HttpStatusCodes from "~/lib/http-status-code";

export const create_subscription: APPRouteHandler<CreateSubscription> = async (
  c: Context
) => {
  const db: PrismaClient = c.get("db");
  const user = c.get("user");
  const input = createSubscriptionSchema.parse(await c.req.json());

  const project_id = await db.project.findUnique({
    where: {
      slug: user?.user.defaultWorkspace,
    },
    select: {
      id: true,
    },
  });
  const subscription = await db.$transaction(async (tx) => {
    // 1. Verify all prices exist and belong to project
    const prices = await tx.prices.findMany({
      where: {
        id: {
          in: input.items.map((item) => item.price_id),
        },
        projectId: project_id?.id!,
      },
    });

    if (prices.length !== input.items.length) {
      const errorResponse: z.infer<typeof ErrorSchema> = {
        error: "One or more prices not found or do not belong to projec",
        message: "BAD REQUEST",
      };

      return c.json(errorResponse, HttpStatusCodes.BAD_REQUEST);
      // throw new Error(
      //   "One or more prices not found or do not belong to project"
      // );
    }

    // 2. If discount provided, verify it exists and is valid
    let discount;
    if (input.discount_id) {
      discount = await tx.discounts.findFirst({
        where: {
          id: input.discount_id,
          projectId: project_id?.id!,
          status: "active",
          OR: [{ expires_at: null }, { expires_at: { gt: new Date() } }],
        },
      });

      if (!discount) {
        const errorResponse: z.infer<typeof ErrorSchema> = {
          error: "One or more prices not found or do not belong to projec",
          message: "BAD REQUEST",
        };
        return c.json(errorResponse, HttpStatusCodes.BAD_REQUEST);
        // throw new Error("Discount not found or is invalid");
      }
    }

    // 3. Create the subscription
    const subscription = await tx.subscriptions.create({
      data: {
        id: `sub_${crypto.randomUUID()}`,
        status: "active",
        currency_code: input.currency_code,
        collection_mode: input.collection_mode,
        billing_cycle_interval: input.billing_cycle.interval,
        billing_cycle_frequency: input.billing_cycle.frequency,
        customer_id: input.customer_id,
        address_id: input.address_id,
        project_id: project_id?.id!,
        discount_id: input.discount_id,
        started_at: new Date(),
        // Calculate first billing date based on trial periods if any
        // first_billed_at: new Date(), // TODO: Handle trial periods
        // next_billed_at: new Date(), // TODO: Calculate based on billing cycle

        // Create subscription items
        Subscription_Items: {
          create: input.items.map((item) => ({
            id: `si_${crypto.randomUUID()}`,
            price_id: item.price_id,
            quantity: item.quantity,
            status: "trialing",
            recurring: true,
            // next_billed_at: new Date(), // TODO: Calculate based on trial
          })),
        },

        // Create billing details if provided
        BillingDetails: input.billing_details
          ? {
              create: {
                payment_interval: input.billing_details.payment_interval,
                payment_frequency: input.billing_details.payment_frequency,
                enable_checkout: input.billing_details.enable_checkout ?? false,
                purchase_order_number:
                  input.billing_details.purchase_order_number,
                additional_information:
                  input.billing_details.additional_information,
              },
            }
          : undefined,
      },
    });

    return subscription;
  });

  const transformedSubscription = transformSubscription(subscription);
  return c.json(transformedSubscription, 200);
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
      Subscription_Items: {
        include: {
          price: {
            omit: {
              projectId: true,
            },
            include: {
              Products: {
                omit: {
                  project_id: true,
                },
              },
            },
          },
        },
      },
    },
  });

  const transformedSubscriptions = subscriptions.map((x) =>
    transformSubscription(x)
  );

  return c.json(transformedSubscriptions, 200);
};

export const get_subscription: APPRouteHandler<GetSubscription> = async (
  c: Context
) => {
  const db: PrismaClient = c.get("db");
  const user = c.get("user");
  const subscription_id = c.req.param("subscription_id");
  const project_id = await db.project.findUnique({
    where: {
      slug: user?.user.defaultWorkspace,
    },
    select: {
      id: true,
    },
  });

  const subscription = await db.subscriptions.findUnique({
    where: {
      id: subscription_id,
      project_id: project_id?.id!,
    },
    include: {
      discount: {
        omit: {
          projectId: true,
        },
      },
      Subscription_Items: {
        include: {
          price: {
            omit: {
              projectId: true,
            },
            include: {
              Products: {
                omit: {
                  project_id: true,
                },
              },
            },
          },
        },
      },
    },
  });

  if (!subscription) {
    const errorResponse: z.infer<typeof ErrorSchema> = {
      error: "Subscription not found",
      message: "BAD REQUEST",
    };
    return c.json(errorResponse, HttpStatusCodes.NOT_FOUND);
  }

  const transformedSubscription = transformSubscription(subscription);

  return c.json(transformedSubscription, 200);
};
