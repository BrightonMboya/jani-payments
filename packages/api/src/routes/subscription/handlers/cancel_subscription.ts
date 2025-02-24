import { type Context } from "hono";
import { APPRouteHandler } from "~/lib/types";
import { CancelSubscription } from "../subscription.routes";

import { cancelSubscriptionSchema, transformSubscription } from "../helpers";
import * as HttpStatusCodes from "~/lib/http-status-code";
import { ErrorSchema } from "~/lib/utils/zod-helpers";
import { z } from "zod";
import * as schema from "@repo/db/db/schema.ts";
import { db } from "@repo/db";
import { eq, and, inArray } from "drizzle-orm";

const cancel_subscription: APPRouteHandler<CancelSubscription> = async (
  c: Context
) => {
  const subscription_id = c.req.param("subscription_id");
  const input = cancelSubscriptionSchema.parse(await c.req.json());
  const subscription = await db.query.Subscriptions.findFirst({
    where: and(
      eq(schema.Subscriptions.id, subscription_id),
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
        error: "Not Found",
        message: "No Subscription found with the specified id",
      } satisfies z.infer<typeof ErrorSchema>,
      HttpStatusCodes.NOT_FOUND
    );
  }
  if (subscription.status === "cancelled") {
    return c.json(
      {
        error: "Bad Request",
        message: "Subscription is already canceled",
      },
      HttpStatusCodes.BAD_REQUEST
    );
  }

  if (input.effective_from === "immediately") {
    const now = new Date();
    const updatedSubscription = await db.transaction(async (tx) => {
      // Update subscription
      await tx
        .update(schema.Subscriptions)
        .set({
          status: "cancelled",
          canceled_at: now.toISOString(),
        })
        .where(
          and(
            eq(schema.Subscriptions.id, subscription_id),
            eq(schema.Subscriptions.project_id, c.get("organization_Id"))
          )
        );

      // then delete the scheduled changes
      await tx
        .delete(schema.Subscription_Scheduled_Changes)
        .where(
          eq(
            schema.Subscription_Scheduled_Changes.subscription_id,
            subscription_id
          )
        );

      return await tx.query.Subscriptions.findFirst({
        where: and(
          eq(schema.Subscriptions.id, subscription_id),
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
  } else {
    // Schedule cancellation for next billing period
    const response = await db.transaction(async (tx) => {
      const scheduledChange = await tx
        .insert(schema.Subscription_Scheduled_Changes)
        .values({
          id: `sc_${crypto.randomUUID()}`,
          subscription_id: subscription_id,
          action: "cancel",
          effective_at:
            subscription.next_billed_at?.toString() || new Date().toISOString(),
        })
        .returning();

      // Don't change subscription status yet, just return the scheduled change
      return {
        ...subscription,
        scheduled_change: scheduledChange[0],
      };
    });
    const formattedResponse = transformSubscription({
      ...(response as any),
    });
    return c.json(formattedResponse, HttpStatusCodes.OK);
  }
};

export default cancel_subscription;
