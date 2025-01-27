import { z, createRoute } from "@hono/zod-openapi";
import * as HttpStatusCodes from "~/lib/http-status-code";
import jsonContent from "~/lib/json-content";
import { CustomersModel } from "@repo/db/zod/customers.ts";
import { jsonSchema, ErrorSchema } from "~/lib/utils/zod-helpers";
import { CreateCustomerSchema, UpdateCustomerSchema } from "./helpers";

export const CustomersResponseSchema = CustomersModel.extend({
  custom_data: jsonSchema,
  //   status: z.enum(["active", "archived"]).optional(),
}).omit({
  projectId: true,
});

export type ICustomersResponseSchema = z.infer<
  typeof CustomersResponseSchema
>[];

const tags = ["customers"];

export const list = createRoute({
  path: "/customers",
  method: "get",
  operationId: "customers:list",
  tags,
  "x-speakeasy-name-override": "list",
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.array(CustomersResponseSchema),
      "Lists all Customers"
    ),
  },
});

export const create = createRoute({
  path: "/customers",
  method: "post",
  tags,
  operationId: "customers:create",
  "x-speakeasy-name-override": "create",
  request: {
    body: {
      content: {
        "application/json": {
          schema: CreateCustomerSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      CustomersResponseSchema,
      "Creates a new Customer"
    ),
    [HttpStatusCodes.BAD_REQUEST]: jsonContent(
      ErrorSchema,
      "Failed to create customer"
    ),
  },
});

export const get_customer = createRoute({
  path: "/customers/{customer_id}",
  method: "get",
  tags,
  operationId: "customers:get",
   "x-speakeasy-name-override": "get",
  request: {
    params: z.object({
      customer_id: z.string(),
    }),
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      CustomersResponseSchema,
      "Get a Customer"
    ),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(ErrorSchema, "Customer not found"),
  },
});

export const update_customer = createRoute({
  path: "/customers/{customer_id}",
  method: "patch",
  tags,
  operationId: "customers:update",
  "x-speakeasy-name-override": "update",
  request: {
    params: z.object({
      customer_id: z.string(),
    }),
    body: {
      content: {
        "application/json": {
          schema: UpdateCustomerSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      CustomersResponseSchema,
      "Update a Customer"
    ),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(ErrorSchema, "Customer not found"),
  },
});

export type ListCustomers = typeof list;
export type CreateCustomers = typeof create;
export type GetCustomer = typeof get_customer;
export type UpdateCustomer = typeof update_customer;
