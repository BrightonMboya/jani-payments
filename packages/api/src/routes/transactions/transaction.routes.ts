import { createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "~/lib/http-status-code";
import jsonContent from "~/lib/json-content";
import { ErrorSchema } from "~/lib/utils/zod-helpers";
import {
  createTransactionSchema,
  listTransactionQueryParams,
  ListTransactionsResponse,
  transactionIdSchema,
  transformedTransactionSchema,
} from "./helpers";

const tags = ["transactions"];

export const create_transaction = createRoute({
  path: "/transactions",
  method: "post",
  tags,
  request: {
    body: {
      content: {
        "application/json": {
          schema: createTransactionSchema,
        },
      },
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
    )
  },
});

export const list_transaction = createRoute({
  path: "/transactions",
  method: "get",
  tags,
  request: {
    query: listTransactionQueryParams,
  },
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

export type CreateTransaction = typeof create_transaction;
export type ListTransaction = typeof list_transaction;
export type GetTransaction = typeof get_transaction;
