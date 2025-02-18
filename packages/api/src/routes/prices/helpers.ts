import { jsonSchema } from "~/lib/utils/zod-helpers";
import { z } from "@hono/zod-openapi";
import { pricesInsertSchema } from "@repo/db/types";

import { BillingInterval, Entity_Status, PriceType } from "@repo/db/types";

export const CreatePricesSchema = z.object({
  //   id: z.string(),
  product_id: z.string(),
  description: z.string().nullish(),
  type: z.enum(PriceType),
  name: z.string(),
  billing_cycle: z.object({
    interval: z.enum(BillingInterval),
    frequency: z.number(),
  }),
  trial_period: z.object({
    interval: z.enum(BillingInterval),
    frequency: z.number(),
  }),
  unit_price: z.object({
    amount: z.number(),
    currency_code: z.string(),
  }),
  status: z.enum(Entity_Status),
  custom_data: jsonSchema.nullish(),
});

export const PricesResponseSchema = CreatePricesSchema.extend({
  id: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
});

export const UpdatePricesSchema = PricesResponseSchema.partial().strict();

export const transformPrices = (price: z.infer<typeof pricesInsertSchema>) => ({
  id: price.id,
  product_id: price.product_id,
  description: price.description,
  type: price.type,
  name: price.name,
  billing_cycle: {
    interval: price.billingCycleInterval,
    frequency: price.billingCycleFrequency,
  },
  trial_period: {
    interval: price.trialPeriodInterval,
    frequency: price.trialPeriodFrequency,
  },
  unit_price: {
    amount: Number(price.amount),
    currency_code: price.currencyCode,
  },
  status: price.status,
  custom_data: price.customData,
  created_at: price.createdAt,
  updated_at: price.updatedAt,
});
