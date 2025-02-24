import type { Context } from "hono";
import type { APPRouteHandler } from "~/lib/types";
import type {
  ListRoute,
  CreateRoute,
  GetProductRoute,
  UpdateProductRoute,
} from "./products.routes";
import * as HttpsStatusPhrases from "~/lib/http-status-phrases";
import * as HttpStatusCodes from "~/lib/http-status-code";
import {
  CreateProductsSchema,
  ProductsResponseSchema,
  UpdateProductsSchema,
} from "./helpers";
import { z } from "zod";
import { ErrorSchema } from "~/lib/utils/zod-helpers";
import { db } from "@repo/db";
import * as schema from "@repo/db/db/schema.ts";
import { and, eq } from "drizzle-orm";

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
      custom_data: schema.Products.customData,
    })
    .from(schema.Products)
    .where(eq(schema.Products.projectId, project_id));
  return c.json(products, HttpStatusCodes.OK);
};

export const create: APPRouteHandler<CreateRoute> = async (c: Context) => {
  const raw_input = await c.req.json();
  const input = CreateProductsSchema.parse(raw_input);
  type ProductInsert = typeof schema.Products.$inferInsert;
  const insertData: ProductInsert = {
    id: `pro_${crypto.randomUUID()}`,
    description: input.description,
    name: input.name,
    projectId: c.get("organization_Id"),
    customData: input.custom_data as any,
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  };
  const products = await db
    .insert(schema.Products)
    .values(insertData)
    .returning();
  return c.json(products, HttpStatusCodes.OK);
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
    ).returning()

  if (!product) {
    return c.json(
      {
        error: "Invalid Id",
        message: "Invalid Product Id",
      } satisfies z.infer<typeof ErrorSchema>,
      HttpStatusCodes.NOT_FOUND
    );
  }

  return c.json(
    product,
    HttpStatusCodes.OK
  );
};
