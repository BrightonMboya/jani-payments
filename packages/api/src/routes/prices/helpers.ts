import { jsonSchema } from "~/lib/utils/zod-helpers";
import { z } from "@hono/zod-openapi";
import { PricesModel } from "@repo/db/zod/prices.ts";
import { BillingInterval, Entity_Status, PriceType } from "@repo/db/types";

export const CreatePricesSchema = z.object({
  //   id: z.string(),
  product_id: z.string(),
  description: z.string().nullish(),
  type: z.nativeEnum(PriceType),
  name: z.string(),
  billing_cycle: z.object({
    interval: z.nativeEnum(BillingInterval),
    frequency: z.number(),
  }),
  trial_period: z.object({
    interval: z.nativeEnum(BillingInterval),
    frequency: z.number(),
  }),
  unit_price: z.object({
    amount: z.number(),
    currency_code: z.string(),
  }),
  status: z.nativeEnum(Entity_Status),
  custom_data: jsonSchema.nullish(),
});

export const PricesResponseSchema = CreatePricesSchema.extend({
  id: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
});

export const UpdatePricesSchema = PricesResponseSchema.partial().strict();

export const transformPrices = (price: z.infer<typeof PricesModel>) => ({
  id: price.id,
  product_id: price.product_id,
  description: price.description,
  type: price.type,
  name: price.name,
  billing_cycle: {
    interval: price.billing_cycle_interval,
    frequency: price.billing_cycle_frequency,
  },
  trial_period: {
    interval: price.trial_period_interval,
    frequency: price.trial_period_frequency,
  },
  unit_price: {
    amount: price.amount,
    currency_code: price.currency_code,
  },
  status: price.status,
  custom_data: price.custom_data,
  created_at: price.created_at,
  updated_at: price.updated_at,
});
