import { Context } from "hono";
import { APPRouteHandler } from "~/lib/types";
import { UpdateTransaction } from "../transaction.routes";
import { PrismaClient } from "@repo/db/types";
import {
  GetTransactionInclude,
  transformTransaction,
  updateTransactionSchema,
} from "../helpers";
import * as HttpStatusCodes from "~/lib/http-status-code";
import { z } from "zod";
import { ErrorSchema } from "~/lib/utils/zod-helpers";

const update_transaction: APPRouteHandler<UpdateTransaction> = async (
  c: Context
) => {
  const db: PrismaClient = c.get("db");
  const transaction_id = c.req.param("transaction_id");
  const updatedStatus = updateTransactionSchema.parse(await c.req.json());

  const transaction = await db.transactions.update({
    where: {
      id: transaction_id,
      project_id: c.get("organization_Id"),
    },
    data: {
      status: updatedStatus.status,
    },
    include: GetTransactionInclude,
  });

  if (!transaction) {
    return c.json(
      {
        error: "Not Found",
        message: "No Transaction found with the specified Id",
      } satisfies z.infer<typeof ErrorSchema>,
      HttpStatusCodes.NOT_FOUND
    );
  }

  const formattedTransaction = transformTransaction(transaction);
  return c.json(formattedTransaction, HttpStatusCodes.OK);
};


export default update_transaction;
