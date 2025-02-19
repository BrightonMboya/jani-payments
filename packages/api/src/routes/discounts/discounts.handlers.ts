import { APPRouteHandler } from "~/lib/types";
import {
  type ListDiscounts,
  CreateDiscount,
  GetDiscount,
  UpdateDiscount,
} from "./discounts.routes";
import { type Context } from "hono";
import * as HttpStatusCodes from "~/lib/http-status-code";
import { z } from "zod";
import { DiscountResponseSchema } from "./discounts.routes";
import { ErrorSchema } from "~/lib/utils/zod-helpers";
import {
  CreateDiscountSchema,
  transformDiscount,
  UpdateDiscountSchema,
} from "./helpers";
import { db } from "@repo/db";
import * as schema from "@repo/db/db/schema.ts";
import { and, eq, sql } from "drizzle-orm";

const DefaultDiscountSelect = {
  id: schema.Discounts.id,
  // projectId: schema.Discounts.projectId,
  status: schema.Discounts.status,
  description: schema.Discounts.description,
  enabled_for_checkout: schema.Discounts.enabled_for_checkout,
  amount: schema.Discounts.amount,
  currency_code: schema.Discounts.currency_code,
  type: schema.Discounts.type,
  recur: schema.Discounts.recur,
  max_recurring_intervals: schema.Discounts.max_recurring_intervals,
  usage_limit: schema.Discounts.usage_limit,
  expires_at: schema.Discounts.expires_at,
  created_at: schema.Discounts.created_at,
  updated_at: schema.Discounts.updated_at,
  custom_data: schema.Discounts.custom_data,
  // discount_prices: {
  //   price_id: schema.DiscountPrices.price_id,
  // },
};

export const list: APPRouteHandler<ListDiscounts> = async (c: Context) => {
  const discounts = await db
    .select({
      ...DefaultDiscountSelect,
      restricted_to: sql`ARRAY_AGG(${schema.DiscountPrices.price_id})`,
    })
    .from(schema.Discounts)
    .leftJoin(
      schema.DiscountPrices,
      eq(schema.Discounts.id, schema.DiscountPrices.discount_id)
    )
    .groupBy(schema.Discounts.id)
    .where(eq(schema.Discounts.projectId, c.get("organization_Id")));
  const formattedDiscounts = discounts.map((discount) =>
    transformDiscount({ ...(discount as any) })
  );

  return c.json(
    formattedDiscounts as z.infer<typeof DiscountResponseSchema>[],
    HttpStatusCodes.OK
  );
};

export const create: APPRouteHandler<CreateDiscount> = async (c: Context) => {
  const raw_input = await c.req.json();
  const input = CreateDiscountSchema.parse(raw_input);
  type DiscountInsert = typeof schema.Discounts.$inferInsert;
  const discount_id = `dis_${crypto.randomUUID()}`;
  const insertData: DiscountInsert = {
    projectId: c.get("organization_Id"),
    id: discount_id,
    status: input.status || "active",
    description: input.description,
    enabled_for_checkout: input.enabled_for_checkout,
    // this should bring issues no? dk why drizzle casts it to string even though its a number
    amount: input.amount.toString(),
    currency_code: input.currency_code,
    type: input.type,
    recur: input.recur,
    max_recurring_intervals: input.max_recurring_intervals,
    usage_limit: input.usage_limit,
    expires_at: input.expires_at?.toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    custom_data: input.custom_data!,
  };

  // If input has price_ids, create discount_prices relations
  const discountPricesData =
    input.price_ids?.map((price_id: string) => ({
      discount_id: insertData.id,
      price_id,
    })) || [];

  // inserting into 2 tables should be via transaction, prisma handled that out of the box though
  const discount = await db.transaction(async (tx) => {
    await tx.insert(schema.Discounts).values(insertData);
    await tx.insert(schema.DiscountPrices).values(discountPricesData);
    const discount = await tx
      .select({
        ...DefaultDiscountSelect,
        restricted_to: sql`ARRAY_AGG(${schema.DiscountPrices.price_id})`,
      })
      .from(schema.Discounts)
      .leftJoin(
        schema.DiscountPrices,
        eq(schema.Discounts.id, schema.DiscountPrices.discount_id)
      )
      .groupBy(schema.Discounts.id)
      .where(and(eq(schema.Discounts.projectId, c.get("organization_Id")), eq(schema.Discounts.id, discount_id)));
    return discount!;
  });

  // const transformedDiscount = transformDiscount({ ...(discount as any) });

  return c.json(discount, HttpStatusCodes.OK);
};

export const get_discount: APPRouteHandler<GetDiscount> = async (
  c: Context
) => {
  const { discount_id } = c.req.param();
  const discount = await db
    .select({
      ...DefaultDiscountSelect,
      restricted_to: sql`ARRAY_AGG(${schema.DiscountPrices.price_id})`,
    })
    .from(schema.Discounts)
    .leftJoin(
      schema.DiscountPrices,
      eq(schema.Discounts.id, schema.DiscountPrices.discount_id)
    )
    .groupBy(schema.Discounts.id)
    .where(
      and(
        eq(schema.Discounts.id, discount_id),
        eq(schema.Discounts.projectId, c.get("organization_Id"))
      )
    );

  if (!discount) {
    const errorResponse: z.infer<typeof ErrorSchema> = {
      error: "Discount not found",
      message: "BAD REQUEST",
    };
    return c.json(errorResponse, HttpStatusCodes.NOT_FOUND);
  }

  const formattedDiscount = discount.map((discount) =>
    transformDiscount({ ...(discount as any) })
  );

  return c.json(formattedDiscount, HttpStatusCodes.OK);
};

export const update_discount: APPRouteHandler<UpdateDiscount> = async (
  c: Context
) => {
  const discount_id = c.req.param("discount_id");
  const raw_input = await c.req.json();
  const input = UpdateDiscountSchema.parse(raw_input);

  // updating the 2 tables inside a txn
  const discount = await db.transaction(async (tx) => {
    const updatedDiscount = await tx
      .update(schema.Discounts)
      .set({
        ...input,
        amount: input.amount?.toString(),
        expires_at: input.expires_at?.toISOString() || null,
        updated_at: new Date().toISOString(),
      })
      .where(
        and(
          eq(schema.Discounts.id, discount_id),
          eq(schema.Discounts.projectId, c.get("organization_Id"))
        )
      )
      .returning();

    if (!updatedDiscount) {
      throw new Error("Discount not found");
    }

    // update the new discount_prices if provided
    if (input.restricted_to?.length! > 0) {
      // Delete existing discount-price associations
      await tx
        .delete(schema.DiscountPrices)
        .where(eq(schema.DiscountPrices.discount_id, discount_id));

      // Insert new discount-price associations
      if (input.restricted_to?.length! > 0) {
        await tx.insert(schema.DiscountPrices).values(
          input.restricted_to?.map((price_id) => ({
            discount_id,
            price_id,
          })) || []
        );
      }
    }

    // let's return the whole updated discount
    return await tx
      .select({
        ...DefaultDiscountSelect,
        restricted_to: sql`ARRAY_AGG(${schema.DiscountPrices.price_id})`,
      })
      .from(schema.Discounts)
      .leftJoin(
        schema.DiscountPrices,
        eq(schema.Discounts.id, schema.DiscountPrices.discount_id)
      )
      .groupBy(schema.Discounts.id)
      .where(
        and(
          eq(schema.Discounts.id, discount_id),
          eq(schema.Discounts.projectId, c.get("organization_Id"))
        )
      );
  });

  if (!discount) {
    const errorResponse: z.infer<typeof ErrorSchema> = {
      error: "Discount not found",
      message: "BAD REQUEST",
    };
    return c.json(errorResponse, HttpStatusCodes.NOT_FOUND);
  }
  const formattedDiscount = discount.map((discount) =>
    transformDiscount({ ...(discount as any) })
  );

  return c.json(formattedDiscount, HttpStatusCodes.OK);
};
