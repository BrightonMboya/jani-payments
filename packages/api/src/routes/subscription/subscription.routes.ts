import { createRoute, z } from "@hono/zod-openapi";
import * as HttpsStatusCodes from "~/lib/http-status-code";
import jsonContent from "~/lib/json-content";
import { SubscriptionsModel } from "@repo/db/zod/subscriptions.ts";
import {
  cancelSubscriptionSchema,
  createSubscriptionSchema,
  pauseSubscriptionSchema,
  transformedSubscriptionSchema,
} from "./helpers";

import { ErrorSchema } from "~/lib/utils/zod-helpers";

const tags = ["subscription"];

export const create_subscription = createRoute({
  path: "/subscription",
  method: "post",
  tags,
  request: {
    body: {
      content: {
        "application/json": {
          schema: createSubscriptionSchema,
        },
      },
    },
  },
  responses: {
    [HttpsStatusCodes.OK]: jsonContent(
      transformedSubscriptionSchema,
      "Creates a Subscription"
    ),
    [HttpsStatusCodes.BAD_REQUEST]: jsonContent(ErrorSchema, "Invalid input"),
  },
});

export const list_subscriptions = createRoute({
  path: "/subscription",
  method: "get",
  tags,
  responses: {
    [HttpsStatusCodes.OK]: jsonContent(
      z.array(transformedSubscriptionSchema),
      "List of Subscriptions"
    ),
  },
});

export const cancel_subscription = createRoute({
  path: "/subscription/{subscription_id}/cancel",
  method: "post",
  tags,
  request: {
    params: z.object({
      subscription_id: z.string(),
    }),
    body: {
      content: {
        "application/json": {
          schema: cancelSubscriptionSchema,
        },
      },
    },
  },
  responses: {
    [HttpsStatusCodes.OK]: jsonContent(
      transformedSubscriptionSchema,
      "Cancels an active subscription given its id"
    ),

    [HttpsStatusCodes.NOT_FOUND]: jsonContent(
      ErrorSchema,
      "No Subscription found with that Id"
    ),
    [HttpsStatusCodes.BAD_REQUEST]: jsonContent(ErrorSchema, "Bad Request"),
  },
});

export const pause_subscription = createRoute({
  path: "/subscription/{subscription_id}/pause",
  method: "post",
  tags,
  request: {
    params: z.object({
      subscription_id: z.string(),
    }),
    body: {
      content: {
        "application/json": {
          schema: pauseSubscriptionSchema,
        },
      },
    },
  },
  responses: {
    [HttpsStatusCodes.OK]: jsonContent(
      transformedSubscriptionSchema,
      "Pause a subscription given its id"
    ),
    [HttpsStatusCodes.NOT_FOUND]: jsonContent(
      ErrorSchema,
      "No Subscription found with that Id"
    ),
    [HttpsStatusCodes.BAD_REQUEST]: jsonContent(ErrorSchema, "Bad Request"),
    [HttpsStatusCodes.CONFLICT]: jsonContent(
      ErrorSchema,
      "Failed to update subscription due to bad conflict"
    ),
  },
});

export const get_subscription = createRoute({
  path: "/subscription/{subscription_id}",
  method: "get",
  tags,
  responses: {
    [HttpsStatusCodes.OK]: jsonContent(
      transformedSubscriptionSchema,
      "Get a Subscription"
    ),
    [HttpsStatusCodes.NOT_FOUND]: jsonContent(
      ErrorSchema,
      "Subscription not found"
    ),
  },
});

export const activate_subscription = createRoute({
  path: "/subscription/{subscription_id}",
  method: "post",
  tags,
  request: {
    params: z.object({
      subscription_id: z.string(),
    }),
  },
  responses: {
    [HttpsStatusCodes.OK]: jsonContent(
      transformedSubscriptionSchema,
      "Activates a trialling subscription given its id"
    ),
  },
});
export type CreateSubscription = typeof create_subscription;
export type GetSubscription = typeof get_subscription;
export type ListSubscription = typeof list_subscriptions;
export type CancelSubscription = typeof cancel_subscription;
export type PauseSubscription = typeof pause_subscription;
