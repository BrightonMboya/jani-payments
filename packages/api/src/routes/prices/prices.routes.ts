import { z, createRoute } from "@hono/zod-openapi";
import * as HttpStatusCodes from "~/lib/http-status-code";
import jsonContent from "~/lib/json-content";
import { PricesModel } from "@repo/db/zod/prices.ts";
import { jsonSchema } from "~/lib/utils/zod-helpers";
import { ErrorSchema } from "~/lib/utils/zod-helpers";
import {
  CreatePricesSchema,
  PricesResponseSchema,
  UpdatePricesSchema,
} from "./helpers";

const tags = ["prices"];

export const PricesSchema = PricesModel.extend({
  trial_period: jsonSchema,
  custom_data: jsonSchema,
}).omit({
  projectId: true,
});

export const list = createRoute({
  path: "/prices",
  method: "get",
  tags,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.array(PricesResponseSchema),
      "Lists all Prices belonging to a specific merchant"
    ),
  },
});

export const create_prices = createRoute({
  path: "/prices",
  method: "post",
  tags,
  request: {
    body: {
      content: {
        "application/json": {
          schema: CreatePricesSchema,
        },
      },
    },
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      PricesResponseSchema,
      "Creates a new Price"
    ),
    [HttpStatusCodes.BAD_REQUEST]: jsonContent(
      ErrorSchema,
      "Failed to create price"
    ),
  },
});

export const get_price = createRoute({
  path: "/prices/{price_id}",
  method: "get",
  tags,
  request: {
    params: z.object({
      price_id: z.string(),
    }),
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      PricesResponseSchema,
      "Returns a Price by its Id"
    ),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(ErrorSchema, "Price not found"),
  },
});

export const update_price = createRoute({
  path: "/prices/{price_id}",
  method: "patch",
  request: {
    params: z.object({
      price_id: z.string(),
    }),
    body: {
      content: {
        "application/json": {
          schema: UpdatePricesSchema,
        },
      },
    },
  },
  tags,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      PricesResponseSchema,
      "Returns the updated Price"
    ),
    [HttpStatusCodes.BAD_REQUEST]: jsonContent(ErrorSchema, "Invalid Price Id"),
  },
});

export type ListPrices = typeof list;
export type CreatePrices = typeof create_prices;
export type GetPrice = typeof get_price;
export type UpdatePrice = typeof update_price;
