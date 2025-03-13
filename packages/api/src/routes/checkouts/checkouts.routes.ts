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



export type CreateCheckout = typeof createCheckout;
