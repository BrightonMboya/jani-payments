import { z, createRoute } from "@hono/zod-openapi";
import * as HttpStatusCodes from "~/lib/http-status-code";
import jsonContent from "~/lib/json-content";
import {
  azamCredentialsResponseSchema,
  AzamCredentialsSchema,
  paymentProvider,
  paymentProviderSchema,
} from "./helpers";

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

export const store_azam_credentials = createRoute({
  path: "/paymentCredentials/azam",
  method: "post",
  tags,
  operationId: "api-keys:storeAzamCredentials",
  "x-speakeasy-name-override": "paymentProviderKey",
  request: {
    body: {
      content: {
        "application/json": {
          schema: AzamCredentialsSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.array(azamCredentialsResponseSchema),
      "Records credentials for Azam Pay"
    ),
  },
});

export const fetch_azam_credentials = createRoute({
  path: "/paymentCredentials/azam",
  method: "get",
  tags,
  operationId: "api-keys:getAzamCredentials",
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      azamCredentialsResponseSchema,
      "Retrieves Azam Pay Credentials"
    ),
  },
});

export type CreateKeys = typeof create_keys;
export type storeAzamCredentials = typeof store_azam_credentials;
export type FetchAzamCredentials = typeof fetch_azam_credentials;
