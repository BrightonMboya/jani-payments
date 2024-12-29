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

export const list: APPRouteHandler<ListRoute> = async (c: Context) => {
  const user = c.get("user");
  const db: PrismaClient = c.get("db");

  //fetch project_id
  const project_id = await db.project.findUnique({
    where: {
      slug: user?.user.defaultWorkspace,
    },
    select: {
      id: true,
    },
  });

  const products = await db.products.findMany({
    where: {
      project_id: project_id?.id,
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
  });
  return c.json(products, HttpStatusCodes.OK);
};

export const create: APPRouteHandler<CreateRoute> = async (c: Context) => {
  const user = c.get("user");
  const db: PrismaClient = c.get("db");

  const project_id = await db.project.findUnique({
    where: {
      slug: user?.user.defaultWorkspace,
    },
    select: {
      id: true,
    },
  });

  const input = await c.req.json();
  // const input = addProductSchema.parse(input_body);
  const products = await db.products.create({
    data: {
      description: input.description,
      name: input.name,
      project_id: project_id?.id!,
      custom_data: input.custom_data,
      updatedAt: new Date(),
      createdAt: new Date(),
    },
  });
  return c.json([products]);
};

export const get_product: APPRouteHandler<GetProductRoute> = async (
  c: Context
) => {
  const db: PrismaClient = c.get("db");
  const { product_id } = c.req.valid("param");
  const product = await db.products.findUnique({
    where: {
      id: product_id,
    },
    select: {
      id: true,
      name: true,
      description: true,
      status: true,
      custom_data: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!product) {
    return c.json(
      { message: HttpsStatusPhrases.NOT_FOUND },
      HttpStatusCodes.NOT_FOUND
    );
  }
  return c.json(product), HttpStatusCodes.OK;
};

export const update_product: APPRouteHandler<UpdateProductRoute> = async (
  c: Context
) => {
  try {
    const db: PrismaClient = c.get("db");
    const { product_id } = c.req.valid("param");
    const input = await c.req.json();

    const product = await db.products.update({
      where: { id: product_id },
      data: { ...input, updatedAt: new Date() },
    });

    if (!product) {
      return c.json(
        { message: "Invalid Product Id" },
        HttpStatusCodes.NOT_FOUND
      );
    }

    return c.json(product);
  } catch (error) {
    if (error?.constructor?.name === "PrismaClientValidationError") {
      return c.json(
        {
          message: "Invalid field in update data",
        },
        400
      );
    }

    if (error?.constructor?.name === "PrismaClientKnownRequestError") {
      return c.json({ message: "Product not found" }, 404);
    }

    return c.json({ error: "Internal server error" }, 500);
  }
};
