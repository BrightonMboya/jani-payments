import type { Context } from "hono";
import type { APPRouteHandler } from "~/lib/types";
import type {
  ListRoute,
  CreateRoute,
  GetProductRoute,
  UpdateProductRoute,
  CreateProductsWithPrices,
} from "./products.routes";
import * as HttpsStatusPhrases from "~/lib/http-status-phrases";
import * as HttpStatusCodes from "~/lib/http-status-code";
import {
  CreateProductsSchema,
  CreateProductsWithPricesSchema,
  ProductsResponseSchema,
  UpdateProductsSchema,
} from "./helpers";
import { z } from "zod";
import { ErrorSchema } from "~/lib/utils/zod-helpers";
import { db } from "@repo/db";
import * as schema from "@repo/db/db/schema.ts";
import { and, eq } from "drizzle-orm";
import { IProductsInsertSchema, productsInsertSchema } from "@repo/db/types";
import { transformPrices } from "../prices/helpers";

export const list: APPRouteHandler<ListRoute> = async (c: Context) => {
  const project_id = c.get("organization_Id");
  const products = await db
    .select({
      id: schema.Products.id,
      name: schema.Products.name,
      description: schema.Products.description,
      status: schema.Products.status,
      createdAt: schema.Products.createdAt,
      updatedAt: schema.Products.updatedAt,
      custom_data: schema.Products.custom_data,
    })
    .from(schema.Products)
    .where(eq(schema.Products.projectId, project_id));
  return c.json(products, HttpStatusCodes.OK);
};

export const create: APPRouteHandler<CreateRoute> = async (c: Context) => {
  const input = await c.req.json();
  // const input = productsInsertSchema.parse(raw_input);
  type ProductInsert = typeof schema.Products.$inferInsert;
  const insertData: ProductInsert = {
    id: `pro_${crypto.randomUUID()}`,
    description: input.description,
    name: input.name,
    projectId: c.get("organization_Id"),
    custom_data: input.custom_data as any,
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  };
  const products = await db
    .insert(schema.Products)
    .values(insertData)
    .returning();
  return c.json(products, HttpStatusCodes.OK);
};

export const createProductsWithPrices: APPRouteHandler<
  CreateProductsWithPrices
> = async (c: Context) => {
  const raw_input = await c.req.json();
  const input = CreateProductsWithPricesSchema.parse(raw_input);

  const productWithPrices = await db.transaction(async (tx) => {
    // insert the product details first
    const product = await tx
      .insert(schema.Products)
      .values({
        id: `pro_${crypto.randomUUID()}`,
        description: input.description!,
        name: input.name,
        projectId: c.get("organization_Id"),
        custom_data: input.custom_data as any,
        updatedAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
      })
      .returning();
    // then insert into prices
    const price = await tx
      .insert(schema.Prices)
      .values({
        id: `pri_${crypto.randomUUID()}`,
        type: input.type || "standard",
        description: input.description,
        name: input.name,
        billingCycleFrequency: input.billing_cycle.frequency,
        billingCycleInterval: input.billing_cycle.interval,
        trialPeriodFrequency: input.trial_period.frequency,
        trialPeriodInterval: input.trial_period.interval,
        amount: input.unit_price.amount.toString(),
        currencyCode: input.unit_price.currency_code,
        custom_data: input.custom_data as any,
        status: input.status || "active",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        product_id: product[0].id,
        projectId: c.get("organization_Id"),
      })
      .returning();

    const formattedPrice = price.map((p) =>
      transformPrices({
        ...p,
        custom_data: p.custom_data as any,
      })
    );

    return {
      product: product[0],
      price: formattedPrice,
    };
  });

  return c.json(productWithPrices, HttpStatusCodes.OK);
};

export const get_product: APPRouteHandler<GetProductRoute> = async (
  c: Context
) => {
  // @ts-expect-error
  const { product_id } = c.req.valid("param");
  const product = await db
    .select()
    .from(schema.Products)
    .where(
      and(
        eq(schema.Products.id, product_id),
        eq(schema.Products.projectId, c.get("organization_Id"))
      )
    );

  if (!product) {
    return c.json(
      {
        error: HttpsStatusPhrases.NOT_FOUND,
        message: "No Product was found with the specified id",
      } satisfies z.infer<typeof ErrorSchema>,
      HttpStatusCodes.NOT_FOUND
    );
  }
  return c.json(product, HttpStatusCodes.OK);
};

export const update_product: APPRouteHandler<UpdateProductRoute> = async (
  c: Context
) => {
  // @ts-ignore
  const { product_id } = c.req.valid("param");
  const raw_input = await c.req.json();
  const input = UpdateProductsSchema.parse(raw_input);
  const product = await db
    .update(schema.Products)
    .set({
      ...input,
      updatedAt: new Date().toISOString(),
    })
    .where(
      and(
        eq(schema.Products.id, product_id),
        eq(schema.Products.projectId, c.get("organization_Id"))
      )
    )
    .returning();

  if (!product) {
    return c.json(
      {
        error: "Invalid Id",
        message: "Invalid Product Id",
      } satisfies z.infer<typeof ErrorSchema>,
      HttpStatusCodes.NOT_FOUND
    );
  }

  return c.json(product, HttpStatusCodes.OK);
};
