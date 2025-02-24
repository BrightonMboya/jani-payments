import { type Context } from "hono";
import { APPRouteHandler } from "~/lib/types";
import { type GetTransaction } from "../transaction.routes";
import { transformTransaction } from "../helpers";
import * as HttpStatusCodes from "~/lib/http-status-code";
import { ErrorSchema } from "~/lib/utils/zod-helpers";
import { z } from "zod";
import { db } from "@repo/db";
import { eq, and } from "drizzle-orm";
import * as schema from "@repo/db/db/schema.ts";

const get_transaction: APPRouteHandler<GetTransaction> = async (c: Context) => {
  const transaction_id = c.req.param("transaction_id");
  const transaction = await db.query.Transactions.findFirst({
    where: and(
      eq(schema.Transactions.id, transaction_id),
      eq(schema.Transactions.project_id, c.get("organization_Id"))
    ),
    with: {
      transactionItems: {
        with: {
          price: {
            with: {
              Products: true,
            },
          },
        },
      },
      address: true,
      discount: {
        with: {
          discount_prices: {
            columns: {
              price_id: true,
            },
          },
        },
      },
      customer: true,
      TransactionPayment: true,
    },
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

  const formattedTransaction = transformTransaction(transaction as any);
  return c.json(formattedTransaction, HttpStatusCodes.OK);
};

export default get_transaction;
