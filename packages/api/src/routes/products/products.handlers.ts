import type { Context } from "hono";
import { Prisma, PrismaClient } from "@repo/db/types";
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

export const list: APPRouteHandler<ListRoute> = async (c: Context) => {
  const db: PrismaClient = c.get("db");
  const project_id = c.get("organization_Id");
  const products = (await db.products.findMany({
    where: {
      project_id,
    },
    select: {
      id: true,
      name: true,
      description: true,
      status: true,
      createdAt: true,
      updatedAt: true,
      custom_data: true,
    },
  })) as z.infer<typeof ProductsResponseSchema>[];
  return c.json(products, HttpStatusCodes.OK);
};

export const create: APPRouteHandler<CreateRoute> = async (c: Context) => {
  const db: PrismaClient = c.get("db");

  const raw_input = await c.req.json();
  const input = CreateProductsSchema.parse(raw_input);
  const products = (await db.products.create({
    data: {
      id: `pro_${crypto.randomUUID()}`,
      description: input.description,
      name: input.name,
      project_id: c.get("organization_Id"),
      custom_data: input.custom_data as any,
      updatedAt: new Date(),
      createdAt: new Date(),
    },
    omit: {
      project_id: true,
    },
  })) as z.infer<typeof ProductsResponseSchema>;
  return c.json(products, HttpStatusCodes.OK);
};

export const get_product: APPRouteHandler<GetProductRoute> = async (
  c: Context
) => {
  const db: PrismaClient = c.get("db");
  // @ts-expect-error
  const { product_id } = c.req.valid("param");
  const product = await db.products.findUnique({
    where: {
      id: product_id,
      project_id: c.get("organization_Id"),
    },
    omit: {
      project_id: true,
    },
  });

  if (!product) {
    return c.json(
      {
        error: HttpsStatusPhrases.NOT_FOUND,
        message: "No Product was found with the specified id",
      } satisfies z.infer<typeof ErrorSchema>,
      HttpStatusCodes.NOT_FOUND
    );
  }
  return c.json(
    product as z.infer<typeof ProductsResponseSchema>,
    HttpStatusCodes.OK
  );
};

export const update_product: APPRouteHandler<UpdateProductRoute> = async (
  c: Context
) => {
  const db: PrismaClient = c.get("db");
  // @ts-ignore
  const { product_id } = c.req.valid("param");
  const raw_input = await c.req.json();
  const input = UpdateProductsSchema.parse(raw_input);

  const product = await db.products.update({
    where: { id: product_id, project_id: c.get("organization_Id") },
    data: {
      ...input,
      updatedAt: new Date(),
      custom_data: input.custom_data as any,
    },
  });

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
    product as z.infer<typeof ProductsResponseSchema>,
    HttpStatusCodes.OK
  );
};
