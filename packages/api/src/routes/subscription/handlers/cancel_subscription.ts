import { type Context } from "hono";
import { APPRouteHandler } from "~/lib/types";
import { CancelSubscription } from "../subscription.routes";
import { PrismaClient } from "@repo/db/types";
import { cancelSubscriptionSchema, transformSubscription } from "../helpers";
import * as HttpStatusCodes from "~/lib/http-status-code";
import { ErrorSchema } from "~/lib/utils/zod-helpers";
import { z } from "zod";

const cancel_subscription: APPRouteHandler<CancelSubscription> = async (
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

export default cancel_subscription;
