import { type Context } from "hono";
import { APPRouteHandler } from "~/lib/types";
import { ListTransaction } from "../transaction.routes";
import {
  DateOperator,
  IListTransactionQueryParams,
  ListTransactionsResponse,
  transformTransaction,
} from "../helpers";
import { z } from "zod";
import * as HttpStatusCodes from "~/lib/http-status-code";
import {
  eq,
  inArray,
  sql,
  and,
  lt,
  lte,
  gt,
  gte,
  isNull,
} from "drizzle-orm";
import { db } from "@repo/db";
import * as schema from "@repo/db/db/schema.ts";

const list_transaction: APPRouteHandler<ListTransaction> = async (
  c: Context
) => {
  const query = c.req.query() as unknown as IListTransactionQueryParams;

  // Build the where conditions
  const whereConditions = [];

  // Array filters
  if (query.customer_id) {
    whereConditions.push(
      inArray(schema.Transactions.customer_id, query.customer_id)
    );
  }

  if (query.id) {
    whereConditions.push(inArray(schema.Transactions.id, query.id));
  }

  if (query.subscription_id) {
    if (query.subscription_id === "null") {
      whereConditions.push(isNull(schema.Transactions.subscription_id));
    } else {
      whereConditions.push(
        inArray(schema.Transactions.subscription_id, query.subscription_id)
      );
    }
  }

  if (query.status) {
    whereConditions.push(inArray(schema.Transactions.status, query.status));
  }

  if (query.collection_mode) {
    whereConditions.push(
      eq(schema.Transactions.collection_mode, query.collection_mode)
    );
  }

  // Date filters
  const addDateFilter = (field: any, value: any) => {
    if (!value) return;

    if (typeof value === "string") {
      whereConditions.push(eq(field, new Date(value)));
    } else {
      const operator = value.operator.toLowerCase();
      const date = new Date(value.value);

      whereConditions.push(
        operator === DateOperator.LT
          ? lt(field, date)
          : operator === DateOperator.LTE
          ? lte(field, date)
          : operator === DateOperator.GT
          ? gt(field, date)
          : gte(field, date)
      );
    }
  };

  addDateFilter(schema.Transactions.created_at, query.created_at);
  addDateFilter(schema.Transactions.updated_at, query.updated_at);

  // Construct the order by clause
  const orderBy = query.order_by
    ? {
        field: query.order_by.field,
        direction: query.order_by.direction.toLowerCase() as "asc" | "desc",
      }
    : { field: "created_at", direction: "desc" };

  // Handle pagination
  const limit = Number(query.per_page);
  const cursorCondition = query.after
    ? lt(schema.Transactions.id, query.after)
    : undefined;

  if (cursorCondition) {
    whereConditions.push(cursorCondition);
  }

  const whereClause = whereConditions.length
    ? and(...whereConditions)
    : undefined;

  // Execute the query using Drizzle
  const transactionsList = await db
    .select()
    .from(schema.Transactions)
    .where(whereClause)
    .orderBy(sql`${orderBy.field} ${orderBy.direction}`)
    .limit(limit);

  const total = await db
    .select({ count: sql<number>`count(*)` })
    .from(schema.Transactions)
    .where(whereClause)
    .then((res) => res[0].count);

  const transformedTransactions = transactionsList.map((txn) =>
    transformTransaction(txn as any)
  );

  // Get the last ID for pagination
  const lastTransaction = transactionsList[transactionsList.length - 1];
  const nextCursor = lastTransaction?.id;

  return c.json(
    {
      data: transformedTransactions,
      meta: {
        total,
        per_page: limit,
        next_cursor: nextCursor,
      },
    } satisfies z.infer<typeof ListTransactionsResponse>,
    HttpStatusCodes.OK
  );
};

export default list_transaction;
