import { z, createRoute } from "@hono/zod-openapi";
import * as HttpStatusCodes from "~/lib/http-status-code";
import jsonContent from "~/lib/json-content";
import { ProductsModel } from "@repo/db/zod/products.ts";
import {
  CreateProductsSchema,
  ProductsResponseSchema,
  UpdateProductsSchema,
} from "./helpers";
import {
  createErrorSchema,
  ErrorSchema,
  jsonSchema,
  notFoundSchema,
} from "~/lib/utils/zod-helpers";

export const tags = ["Products"];

export const list = createRoute({
  path: "/products",
  method: "get",
  tags,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.array(ProductsResponseSchema),
      "Lists all Products belonging to a specific merchant"
    ),
  },
});

export const create = createRoute({
  path: "/products",
  method: "post",
  tags,
  request: {
    body: {
      content: {
        "application/json": {
          schema: CreateProductsSchema,
        },
      },
    },
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      ProductsResponseSchema,
      "Creating Product endpoint"
    ),
  },
});

export const get_product = createRoute({
  path: "/products/{product_id}",
  method: "get",
  tags,
  request: {
    params: z.object({
      product_id: z.string(),
    }),
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      ProductsResponseSchema,
      "Returns a Product using its id"
    ),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(ErrorSchema, "Product not found"),
  },
});

export const update_product = createRoute({
  path: "/products/{product_id}",
  method: "patch",
  tags,
  request: {
    params: z.object({
      product_id: z.string(),
    }),
    body: {
      content: {
        "application/json": {
          schema: UpdateProductsSchema,
        },
      },
    },
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      ProductsResponseSchema,
      "Returns the updated Product"
    ),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(ErrorSchema, "Invalid Product Id"),
    [HttpStatusCodes.BAD_REQUEST]: jsonContent(
      ErrorSchema,
      "Invalid Product Id"
    ),
  },
});

export type ListRoute = typeof list;
export type CreateRoute = typeof create;
export type GetProductRoute = typeof get_product;
export type UpdateProductRoute = typeof update_product;
