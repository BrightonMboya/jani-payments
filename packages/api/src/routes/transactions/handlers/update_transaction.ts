import { Context } from "hono";
import { APPRouteHandler } from "~/lib/types";
import { UpdateTransaction } from "../transaction.routes";
import {
  transformTransaction,
  updateTransactionSchema,
} from "../helpers";
import * as HttpStatusCodes from "~/lib/http-status-code";
import { z } from "zod";
import { ErrorSchema } from "~/lib/utils/zod-helpers";
import { db } from "@repo/db";
import * as schema from "@repo/db/db/schema.ts";
import { eq, and } from "drizzle-orm";

const update_transaction: APPRouteHandler<UpdateTransaction> = async (
  c: Context
) => {
  const transaction_id = c.req.param("transaction_id");
  const updatedStatus = updateTransactionSchema.parse(await c.req.json());

  const transaction = await db
    .update(schema.Transactions)
    .set({
      status: updatedStatus.status,
    })
    .where(
      and(
        eq(schema.Transactions.id, transaction_id),
        eq(schema.Transactions.project_id, c.get("organization_Id"))
      )
    );

  if (!transaction) {
    return c.json(
      {
        error: "Not Found",
        message: "No Transaction found with the specified Id",
      } satisfies z.infer<typeof ErrorSchema>,
      HttpStatusCodes.NOT_FOUND
    );
  }

  const formattedTransaction = transformTransaction(transaction as any);
  return c.json(formattedTransaction, HttpStatusCodes.OK);
};

export default update_transaction;
