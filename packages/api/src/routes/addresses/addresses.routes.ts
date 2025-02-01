import { z, createRoute } from "@hono/zod-openapi";
import * as HttpStatusCodes from "~/lib/http-status-code";
import jsonContent from "~/lib/json-content";
import { jsonSchema } from "~/lib/utils/zod-helpers";
import { AddressesModel } from "@repo/db/zod/addresses.ts";
import { ErrorSchema } from "~/lib/utils/zod-helpers";
import { CreateAddressSchema, UpdateAddressSchema } from "./helpers";

export const AddressResponseSchema = AddressesModel.extend({
  custom_data: jsonSchema,
});

const tags = ["addresses"];

export const list = createRoute({
  path: "/customers/{customer_id}/addresses",
  method: "get",
  tags,
  operationId: "addresses:list",
  "x-speakeasy-name-override": "list",
  request: {
    params: z.object({
      customer_id: z.string(),
    }),
    
  },
  parameters: [
    {
      name: "organization_Id",
      in: "header",
      schema: { type: "string" },
    },
  ],
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.array(AddressResponseSchema),
      "Lists all Addresses belonging to a specific customer"
    ),
  },
});

export const create = createRoute({
  path: "/customers/{customer_id}/addresses",
  method: "post",
  operationId: "addresses:create",
  tags,
  "x-speakeasy-name-override": "create",
  parameters: [
    {
      name: "organization_Id",
      in: "header",
      schema: { type: "string" },
    },
  ],
  request: {
    params: z.object({
      customer_id: z.string(),
    }),
    body: {
      content: {
        "application/json": {
          schema: CreateAddressSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      AddressResponseSchema,
      "Creates a new Address"
    ),
    [HttpStatusCodes.BAD_REQUEST]: jsonContent(
      ErrorSchema,
      "Failed to create address"
    ),
  },
});

export const get_address = createRoute({
  path: "/addresses/{address_id}",
  method: "get",
  tags,
  operationId: "addresses:get",
  "x-speakeasy-name-override": "get",
  // parameters: [
  //   {
  //     name: "organization_Id",
  //     in: "cookie",
  //     schema: { type: "string" },
  //   },
  // ],
  request: {
    params: z.object({
      address_id: z.string(),
    }),
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(AddressResponseSchema, "Get an Address"),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(ErrorSchema, "Address not found"),
  },
});

export const update_address = createRoute({
  path: "/customers/{customer_id}/addresses/{address_id}",
  method: "patch",
  tags,
  operationId: "addresses:update",
  // parameters: [
  //   {
  //     name: "organization_Id",
  //     in: "cookie",
  //     schema: { type: "string" },
  //   },
  // ],
  "x-speakeasy-name-override": "update",
  request: {
    params: z.object({
      customer_id: z.string(),
      address_id: z.string(),
    }),
    body: {
      content: {
        "application/json": {
          schema: UpdateAddressSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      AddressResponseSchema,
      "Update an Address"
    ),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(ErrorSchema, "Address not found"),
  },
});

export type ListAddresses = typeof list;
export type CreateAddresses = typeof create;
export type GetAddress = typeof get_address;
export type UpdateAddress = typeof update_address;
