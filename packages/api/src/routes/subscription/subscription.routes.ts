import { createRoute, z } from "@hono/zod-openapi";
import * as HttpsStatusCodes from "~/lib/http-status-code";
import jsonContent from "~/lib/json-content";

import {
  cancelSubscriptionSchema,
  createSubscriptionSchema,
  pauseSubscriptionSchema,
  transformedSubscriptionSchema,
  updateSubscriptionSchema,
  resumeSubscriptionSchema,
} from "./helpers";

import { ErrorSchema } from "~/lib/utils/zod-helpers";

const tags = ["subscription"];

export const create_subscription = createRoute({
  path: "/subscription",
  method: "post",
  tags,
  operationId: "subscription:create",
  "x-speakeasy-name-override": "create",
  request: {
    body: {
      content: {
        "application/json": {
          schema: createSubscriptionSchema,
        },
      },
      required: true,
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
  operationId: "subscription:list",
  "x-speakeasy-name-override": "list",
  parameters: [
    {
      name: "customer_Id",
      in: "query",
      schema: { type: "string", nullable: true },
    },
  ],
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
  operationId: "subscription:cancelSubscription",
  "x-speakeasy-name-override": "cancelSubscription",
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
      required: true,
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
  operationId: "subscription:pauseSubscription",
  "x-speakeasy-name-override": "pause",
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
      required: true,
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

export const resume_subscription = createRoute({
  path: "/subscription/{subscription_id}/resume",
  method: "post",
  tags,
  operationId: "subscription:resumeSubscription",
  "x-speakeasy-name-override": "resume",
  request: {
    params: z.object({
      subscription_id: z.string(),
    }),
    body: {
      content: {
        "application/json": {
          schema: resumeSubscriptionSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    [HttpsStatusCodes.OK]: jsonContent(
      transformedSubscriptionSchema,
      "Resumes a subscription given its id"
    ),
    [HttpsStatusCodes.BAD_REQUEST]: jsonContent(ErrorSchema, "Bad Request"),
    [HttpsStatusCodes.NOT_FOUND]: jsonContent(
      ErrorSchema,
      "No Subscription found with that Id"
    ),
  },
});

export const activate_subscription = createRoute({
  path: "/subscription/{subscription_id}/activate",
  method: "post",
  tags,
  operationId: "subscription:activateSubscription",
  "x-speakeasy-name-override": "activate",
  request: {
    params: z.object({
      subscription_id: z.string(),
    }),
  },
  responses: {
    [HttpsStatusCodes.OK]: jsonContent(
      transformedSubscriptionSchema,
      "Activates a subscription given its id"
    ),
    [HttpsStatusCodes.BAD_REQUEST]: jsonContent(ErrorSchema, "Bad Request"),
    [HttpsStatusCodes.NOT_FOUND]: jsonContent(
      ErrorSchema,
      "No Subscription found with that Id"
    ),
  },
});

export const update_subscription = createRoute({
  path: "/subscription/{subscription_id}",
  method: "patch",
  tags,
  operationId: "subscription:updateSubscription",
  "x-speakeasy-name-override": "update",
  request: {
    params: z.object({
      subscription_id: z.string(),
    }),
    body: {
      content: {
        "application/json": {
          schema: updateSubscriptionSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    [HttpsStatusCodes.OK]: jsonContent(
      transformedSubscriptionSchema,
      "Updates a Subscription given its Id"
    ),
    [HttpsStatusCodes.NOT_FOUND]: jsonContent(
      ErrorSchema,
      "Subscription not found"
    ),
    [HttpsStatusCodes.BAD_REQUEST]: jsonContent(ErrorSchema, "Bad Request"),
  },
});

export const get_subscription = createRoute({
  path: "/subscription/{subscription_id}",
  method: "get",
  tags,
  operationId: "subscription:getSubscription",
  "x-speakeasy-name-override": "get",
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

export type CreateSubscription = typeof create_subscription;
export type GetSubscription = typeof get_subscription;
export type ListSubscription = typeof list_subscriptions;
export type CancelSubscription = typeof cancel_subscription;
export type PauseSubscription = typeof pause_subscription;
export type ResumeSubscription = typeof resume_subscription;
export type ActivateSubscription = typeof activate_subscription;
export type UpdateSubscription = typeof update_subscription;
