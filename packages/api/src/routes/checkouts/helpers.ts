import { z } from "zod";
import { CheckoutsModel } from "@repo/db/zod/checkouts.js";

export const createCheckoutSchema = z.object({
  items: z.array(
    z.object({
      price_id: z.string(),
      quantity: z.number(),
    })
  ),
  discount_id: z.string().optional(),
  customer_id: z.string(),
});

export const createCheckoutResponseSchema = CheckoutsModel.extend({});
