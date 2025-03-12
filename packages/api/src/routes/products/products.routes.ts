import { z, createRoute } from "@hono/zod-openapi";
import * as HttpStatusCodes from "~/lib/http-status-code";
import jsonContent from "~/lib/json-content";
import {
  CreateProductsSchema,
  CreateProductsWithPricesSchema,
  ProductsResponseSchema,
  UpdateProductsSchema,
} from "./helpers";
import { ErrorSchema } from "~/lib/utils/zod-helpers";
import { PricesResponseSchema } from "../prices/helpers";

export const tags = ["products"];

export const list = createRoute({
  path: "/products",
  method: "get",
  tags,
  operationId: "products:list",
  "x-speakeasy-name-override": "list",
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
  operationId: "products:create",
  "x-speakeasy-name-override": "create",
  request: {
    body: {
      required: true,
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

export const createProductWithPrices = createRoute({
  path: "/products",
  method: "post",
  tags,
  operationId: "products:createWithPrices",
  "x-speakeasy-name-override": "createWithPrices",
  request: {
    body: {
      required: true,
      content: {
        "application/json": {
          schema: CreateProductsWithPricesSchema,
        },
      },
    },
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.object({
        product: ProductsResponseSchema,
        price: PricesResponseSchema
      }),
      "Creating a product with Prices"
    ),
  },
});

export const get_product = createRoute({
  path: "/products/{product_id}",
  method: "get",
  operationId: "products:getProduct",
  "x-speakeasy-name-override": "get",
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
  operationId: "products:update",
  "x-speakeasy-name-override": "update",
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
      required: true,
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
export type CreateProductsWithPrices = typeof createProductWithPrices;
