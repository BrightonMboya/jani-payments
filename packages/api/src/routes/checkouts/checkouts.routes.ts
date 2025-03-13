import { createRoute, z } from "@hono/zod-openapi";
import jsonContent from "~/lib/json-content";
import * as HttpStatusCodes from "~/lib/http-status-code";
import { createCheckoutResponseSchema, createCheckoutSchema } from "./helpers";
import { ErrorSchema } from "~/lib/utils/zod-helpers";

const tags = ["checkouts"];
export const createCheckout = createRoute({
  path: "/checkout",
  method: "post",
  tags,
  operationId: "checkout:create",
  "x-speakeasy-name-override": "create",
  request: {
    body: {
      content: {
        "application/json": {
          schema: createCheckoutSchema,
        },
      },
    },
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      createCheckoutResponseSchema,
      "Creates a checkout session and returns its Id"
    ),
    [HttpStatusCodes.BAD_REQUEST]: jsonContent(
      ErrorSchema,
      "Bad Request when creating the checkout session"
    ),
  },
});

export const getCheckoutSession = createRoute({
  path: "/checkout/{checkout_Id}",
  method: "get",
  tags,
  operationId: "checkout:get",
  "x-speakeasy-name-override": "get",
  request: {
    params: z.object({
      checkout_Id: z.string(),
    }),
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      createCheckoutResponseSchema,
      "Returns a checkout given checkout id"
    ),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(
      ErrorSchema,
      "No checkout session found with the specified Id"
    ),
  },
});

export const listCheckoutSessions = createRoute({
  path: "/checkout",
  method: "get",
  tags,
  operationId: "checkout:list",
  "x-speakeasy-name-override": "list",
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.array(createCheckoutResponseSchema),
      "List all checkout sessions belonging to a specific merchant"
    ),
  },
});

export type CreateCheckout = typeof createCheckout;
export type GetCheckout = typeof getCheckoutSession;
export type ListCheckout = typeof listCheckoutSessions;
