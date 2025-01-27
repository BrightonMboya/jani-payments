import { z, createRoute } from "@hono/zod-openapi";
import * as HttpStatusCodes from "~/lib/http-status-code";
import jsonContent from "~/lib/json-content";
import { DiscountsModel } from "@repo/db/zod/discounts.ts";
import { ErrorSchema } from "~/lib/utils/zod-helpers";
import { jsonSchema } from "~/lib/utils/zod-helpers";
import { CreateDiscountSchema, UpdateDiscountSchema } from "./helpers";

const tags = ["discounts"];

export const DiscountResponseSchema = DiscountsModel.extend({
  custom_data: jsonSchema,
})
  .omit({
    projectId: true,
  })
  .extend({
    restricted_to: z.array(z.string()),
  });

export const list_discounts = createRoute({
  path: "/discounts",
  method: "get",
  tags,
  operationId: "discount:list",
  "x-speakeasy-name-override": "list",
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.array(DiscountResponseSchema),
      "Lists all Discounts belonging to a specific merchant"
    ),
  },
});

export const create_discount = createRoute({
  path: "/discounts",
  method: "post",
  tags,
  operationId: "discount:create",
  "x-speakeasy-name-override": "create",
  request: {
    body: {
      content: {
        "application/json": {
          schema: CreateDiscountSchema,
        },
      },
    },
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      DiscountResponseSchema,
      "Creates a new Discount"
    ),
    [HttpStatusCodes.BAD_REQUEST]: jsonContent(
      z.object({ error: z.string(), message: z.string() }),
      "Failed to create discount"
    ),
  },
});

export const get_discount = createRoute({
  path: "/discounts/{discount_id}",
  method: "get",
  tags,
  operationId: "discount:getDiscount",
   "x-speakeasy-name-override": "get",
  request: {
    params: z.object({
      discount_id: z.string(),
    }),
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      DiscountResponseSchema,
      "Returns a Discount by ID"
    ),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(ErrorSchema, "Discount not found"),
  },
});

export const update_discount = createRoute({
  path: "/discounts/{discount_id}",
  method: "patch",
  tags,
  operationId: "discount:update",
   "x-speakeasy-name-override": "update",
  request: {
    params: z.object({
      discount_id: z.string(),
    }),
    body: {
      content: {
        "application/json": {
          schema: UpdateDiscountSchema,
        },
      },
    },
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      DiscountResponseSchema,
      "Updates a Discount by ID"
    ),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(ErrorSchema, "Discount not found"),
  },
});

export type ListDiscounts = typeof list_discounts;
export type CreateDiscount = typeof create_discount;
export type GetDiscount = typeof get_discount;
export type UpdateDiscount = typeof update_discount;
