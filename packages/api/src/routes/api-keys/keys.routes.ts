import { z, createRoute } from "@hono/zod-openapi";
import * as HttpStatusCodes from "~/lib/http-status-code";
import jsonContent from "~/lib/json-content";

const tags = ["Developer Tools"];

export const create_keys = createRoute({
  path: "/api-keys",
  method: "post",
  tags,
  "x-speakeasy-name-override": "create",
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.string(),
      "Creates a Production API KEY"
    ),
  },
});

export const paymentProvider = z.enum([
  "PAYSTACK_API_KEY",
  "SELCOM_API_KEY",
  "DPO_API_KEY",
  "FLUTTERWAVE_API_KEY",
  "STRIPE_API_KEY",
]);

export const paymentProviderSchema = z.object({
  provider: paymentProvider,
  apiKey: z.string(),
});

export const paymentProviderKey = createRoute({
  path: "/api-keys/paymentProvider",
  method: "post",
  tags,
  "x-speakeasy-name-override": "paymentProviderKey",
  request: {
    body: {
      content: {
        "application/json": {
          schema: paymentProviderSchema
        },
      },
    },
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.string(),
      "Records your payment provider API Key"
    ),
  },
});

export type CreateKeys = typeof create_keys;
export type PaymentProviderKey = typeof paymentProviderKey;
