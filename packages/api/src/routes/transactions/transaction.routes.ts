import { createRoute } from "@hono/zod-openapi";
import * as HttpStatusCodes from "~/lib/http-status-code";
import jsonContent from "~/lib/json-content";
import { ErrorSchema } from "~/lib/utils/zod-helpers";
import {
  createTransactionSchema,
  listTransactionQueryParams,
  ListTransactionsResponse,
  transactionIdSchema,
  transformedTransactionSchema,
  updateTransactionSchema,
} from "./helpers";

const tags = ["transactions"];

export const create_transaction = createRoute({
  path: "/transactions",
  method: "post",
  tags,
  operationId: "transactions:create",
  "x-speakeasy-name-override": "create",
  request: {
    body: {
      content: {
        "application/json": {
          schema: createTransactionSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      transformedTransactionSchema,
      "Creates a Transaction and returns an Id"
    ),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(
      ErrorSchema,
      "One of the specified Ids are invalid"
    ),
  },
});

export const list_transaction = createRoute({
  path: "/transactions",
  method: "get",
  tags,
  "x-speakeasy-name-override": "list",
  operationId: "transactions:list",
  request: {
    query: listTransactionQueryParams,
  },
  parameters: [
    {
      name: "customer_id",
      in: "query",
      schema: { type: "string", nullable: true },
    },
  ],
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      ListTransactionsResponse,
      "Returns the list of all Transactions"
    ),
  },
});

export const get_transaction = createRoute({
  path: "/transaction/{transaction_id}",
  method: "get",
  tags,
  operationId: "transactions:get",
  "x-speakeasy-name-override": "get",
  request: {
    params: transactionIdSchema,
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      transformedTransactionSchema,
      "Returns a transaction given its id"
    ),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(
      ErrorSchema,
      "No Transaction was found with the given the Id"
    ),
  },
});

export const update_transaction = createRoute({
  path: "/transaction/{transaction_id}",
  method: "patch",
  tags,
  operationId: "transactions:update",
  "x-speakeasy-name-override": "update",
  request: {
    params: transactionIdSchema,
    body: {
      content: {
        "application/json": {
          schema: updateTransactionSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      transformedTransactionSchema,
      "Returns an updated Transaction"
    ),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(
      ErrorSchema,
      "No Transaction found with the specified Id"
    ),
  },
});

export type CreateTransaction = typeof create_transaction;
export type ListTransaction = typeof list_transaction;
export type GetTransaction = typeof get_transaction;
export type UpdateTransaction = typeof update_transaction;
