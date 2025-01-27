import { type Context } from "hono";
import { APPRouteHandler } from "~/lib/types";
import { ListTransaction } from "../transaction.routes";
import { Prisma, PrismaClient } from "@repo/db/types";
import {
  DateOperator,
  GetTransactionInclude,
  IListTransactionQueryParams,
  ListTransactionsResponse,
  transformTransaction,
} from "../helpers";
import { z } from "zod";
import * as HttpStatusCodes from "~/lib/http-status-code";

const list_transaction: APPRouteHandler<ListTransaction> = async (
  c: Context
) => {
  const query = c.req.query() as unknown as IListTransactionQueryParams;
  const db: PrismaClient = c.get("db");
  let prismaQuery: Prisma.TransactionsFindManyArgs = {
    where: {},
    // cursor: undefined,
    take: Number(query.per_page),
    // skip: undefined,
    include: GetTransactionInclude,
    orderBy: query.order_by
      ? {
          [query.order_by.field]: query.order_by.direction.toLowerCase(),
        }
      : { created_at: "desc" },
  } satisfies Prisma.TransactionsFindManyArgs;

  // Handle cursor-based pagination
  if (query.after) {
    prismaQuery.cursor = { id: query.after };
    prismaQuery.skip = 1; // Skip the cursor
  }

  // Add filters to where clause
  const where: Prisma.TransactionsWhereInput = {};

  // Handle array filters
  if (query.customer_id) {
    where.customer_id = { in: query.customer_id };
  }

  if (query.id) {
    where.id = { in: query.id };
  }

  if (query.subscription_id) {
    where.subscription_id =
      query.subscription_id === "null" ? null : { in: query.subscription_id };
  }

  if (query.status) {
    where.status = { in: query.status };
  }

  if (query.collection_mode) {
    where.collection_mode = query.collection_mode;
  }

  // Handle date filters
  const addDateFilter = (field: string, value: any) => {
    if (!value) return;

    if (typeof value === "string") {
      (where[field as keyof Prisma.TransactionsWhereInput] as Date) = new Date(
        value
      );
    } else {
      const operator = value.operator.toLowerCase();
      const date = new Date(value.value);

      (where as any)[field] = {
        [operator === DateOperator.LT
          ? "lt"
          : operator === DateOperator.LTE
          ? "lte"
          : operator === DateOperator.GT
          ? "gt"
          : "gte"]: date,
      };
    }
  };

  addDateFilter("created_at", query.created_at);
  addDateFilter("updated_at", query.updated_at);

  prismaQuery.where = where;

  const [transactions, total] = await Promise.all([
    db.transactions.findMany(prismaQuery),
    db.transactions.count({ where }),
  ]);

  const transformedTransactions = transactions.map((txn) =>
    //   @ts-expect-error  trust me the defn here is correct
    transformTransaction(txn)
  );

  // Get the last ID for pagination
  const lastTransaction = transactions[transactions.length - 1];
  const nextCursor = lastTransaction?.id;

  return c.json(
    {
      data: transformedTransactions,
      meta: {
        total,
        per_page: Number(query.per_page),
        next_cursor: nextCursor,
      },
    } satisfies z.infer<typeof ListTransactionsResponse>,
    HttpStatusCodes.OK
  );
};

export default list_transaction;
