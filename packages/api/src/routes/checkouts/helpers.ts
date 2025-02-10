import { z } from "zod";


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

export const createCheckoutResponseSchema = createCheckoutSchema.extend({
  total: z.number(),
  discount_amount: z.number(),
  grandTotal: z.number(),
});


