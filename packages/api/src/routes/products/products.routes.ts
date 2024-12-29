import { z, createRoute } from "@hono/zod-openapi";
import * as HttpStatusCodes from "~/lib/http-status-code";
import jsonContent from "~/lib/json-content";
import { ProductsModel } from "@repo/db/zod/products.ts";
import {
  createErrorSchema,
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
      z.array(
        ProductsModel.extend({
          custom_data: jsonSchema,
        })
        .omit({
            project_id: true
        })
      ),
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
          schema: ProductsModel.omit({
            project_id: true,
            id: true,
            createdAt: true,
            updatedAt: true,
          }).extend({
            custom_data: jsonSchema.optional(),
          }),
        },
      },
    },
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.array(
        ProductsModel.extend({
          custom_data: jsonSchema,
        })
      ),
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
      ProductsModel.extend({
        custom_data: jsonSchema,
      }).omit({ project_id: true }),
      "Returns a Product using its id"
    ),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(
      z.object({ message: z.string() }),
      "Product not found"
    ),
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
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      ProductsModel.extend({
        custom_data: jsonSchema,
      }).omit({ project_id: true }),
      "Returns the updated Product"
    ),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(
      notFoundSchema,
      "Invalid Product Id"
    ),
    [HttpStatusCodes.BAD_REQUEST]: jsonContent(
      { message: "Invalid field in update data" },
      "Invalid Product Id"
    ),
  },
});

export type ListRoute = typeof list;
export type CreateRoute = typeof create;
export type GetProductRoute = typeof get_product;
export type UpdateProductRoute = typeof update_product;
