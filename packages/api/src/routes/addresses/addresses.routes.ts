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

const tags = ["Addresses"];

export const list = createRoute({
  path: "/customers/{customer_id}/addresses",
  method: "get",
  tags,
  request: {
    params: z.object({
      customer_id: z.string(),
    }),
  },
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
  tags,
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
