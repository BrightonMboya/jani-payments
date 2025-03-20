import { z, createRoute } from "@hono/zod-openapi";
import * as HttpStatusCodes from "~/lib/http-status-code";
import jsonContent from "~/lib/json-content";
import {
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
  path: "/storeCredentials/azam",
  method: "post",
  tags: ["Application Keys"],
  operationId: "api-keys:storeAzamCredentials",
  "x-speakeasy-name-override": "paymentProviderKey",
  request: {
    body: {
      content: {
        "application/json": {
          schema: AzamCredentialsSchema,
        },
      },
      required: true
    },
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.object({
        appName: z.string(),
        client_Id: z.string(),
        encryptedKey: z.string(),
      }),
      "Records credentials for Azam Pay"
    ),
  },
});

export type CreateKeys = typeof create_keys;
export type storeAzamCredentials = typeof store_azam_credentials;
