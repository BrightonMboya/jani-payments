import { createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "~/lib/http-status-code";
import jsonContent from "~/lib/json-content";
import { ErrorSchema } from "~/lib/utils/zod-helpers";

const tags = ["transactions"];

export const create_transaction = createRoute({
  path: "/transactions",
  method: "post",
  tags,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      ErrorSchema,
      "Creates a Transaction and returns an Id"
    ),
  },
});

export type CreateTransaction = typeof create_transaction;
