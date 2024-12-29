import { z, createRoute } from "@hono/zod-openapi";
import * as HttpStatusCodes from "~/lib/http-status-code";
import * as HttpsStatusPhrases from "~/lib/http-status-phrases";
import jsonContent from "~/lib/json-content";
import { PriceModel } from "@repo/db/zod/price.ts";
import { jsonSchema } from "~/lib/utils/zod-helpers";
import { ErrorSchema } from "~/lib/utils/zod-helpers";

const tags = ["prices"];

const PricesSchema = PriceModel.extend({
  trial_period: jsonSchema,
  custom_data: jsonSchema,
}).omit({
  projectId: true,
  billingCycle_id: true,
});

export const list = createRoute({
  path: "/prices",
  method: "get",
  tags,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.array(PricesSchema),
      "Lists all Prices belonging to a specific merchant"
    ),
  },
});

export const create_prices = createRoute({
  path: "/prices",
  method: "post",
  tags,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.array(PricesSchema),
      "Creates a new Price"
    ),
    [HttpStatusCodes.BAD_REQUEST]: jsonContent(
      z.object({ error: z.string(), message: z.string() }),
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
      PriceModel.extend({
        trial_period: jsonSchema,
        custom_data: jsonSchema,
      }).omit({
        projectId: true,
        billingCycle_id: true,
      }),
      "Returns a Price by its Id"
    ),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(
      z.object({ message: z.string() }),
      "Price not found"
    ),
  },
});

export const update_price = createRoute({
  path: "/prices/{price_id}",
  method: "patch",
  request: {
    params: z.object({
      price_id: z.string(),
    }),
  },
  tags,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      PricesSchema,
      "Returns the updated Price"
    ),
    [HttpStatusCodes.BAD_REQUEST]: jsonContent(ErrorSchema, "Invalid Price Id"),
  },
});

export type ListPrices = typeof list;
export type CreatePrices = typeof create_prices;
export type GetPrice = typeof get_price;
export type UpdatePrice = typeof update_price;
