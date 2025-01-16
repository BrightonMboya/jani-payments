import { type Context } from "hono";
import { APPRouteHandler } from "~/lib/types";
import { type GetTransaction } from "../transaction.routes";
import { PrismaClient } from "@repo/db/types";
import { GetTransactionInclude, transformTransaction } from "../helpers";
import * as HttpStatusCodes from "~/lib/http-status-code";
import { ErrorSchema } from "~/lib/utils/zod-helpers";
import { z } from "zod";

const get_transaction: APPRouteHandler<GetTransaction> = async (c: Context) => {
  const db: PrismaClient = c.get("db");
  const transaction_id = c.req.param("transaction_id");
  const transaction = await db.transactions.findUnique({
    where: {
      id: transaction_id,
    },
    include: GetTransactionInclude,
  });

  if (!transaction) {
    return c.json(
      {
        error: "Not Found",
        message: "No Transaction was found with the specified Id",
      } satisfies z.infer<typeof ErrorSchema>,
      HttpStatusCodes.NOT_FOUND
    );
  }

  const formattedTransaction = transformTransaction(transaction);
  return c.json(formattedTransaction, HttpStatusCodes.OK);
};

export default get_transaction;
