import { z, createRoute } from "@hono/zod-openapi";
import * as HttpStatusCodes from "~/lib/http-status-code";
import * as HttpsStatusPhrases from "~/lib/http-status-phrases";
import jsonContent from "~/lib/json-content";
import { DiscountsModel } from "@repo/db/zod/discounts.ts";

import { jsonSchema } from "~/lib/utils/zod-helpers";

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
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.array(
        DiscountsModel.extend({
          custom_data: jsonSchema,
        })
      ),
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
    [HttpStatusCodes.NOT_FOUND]: jsonContent(
      z.object({ error: z.string(), message: z.string() }),
      "Discount not found"
    ),
  },
});

export const update_discount = createRoute({
  path: "/discounts/{discount_id}",
  method: "patch",
  tags,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      DiscountsModel.extend({
        custom_data: jsonSchema,
      }).omit({
        projectId: true,
      }),
      "Updates a Discount by ID"
    ),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(
      z.object({ error: z.string(), message: z.string() }),
      "Discount not found"
    ),
    // [HttpStatusCodes.BAD_REQUEST]: jsonContent(
    //   z.object({ error: z.string(), message: z.string() }),
    //   "Failed to update discount"
    // ),
  },
});

export type ListDiscounts = typeof list_discounts;
export type CreateDiscount = typeof create_discount;
export type GetDiscount = typeof get_discount;
export type UpdateDiscount = typeof update_discount;
