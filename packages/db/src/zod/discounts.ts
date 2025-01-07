import * as z from "zod"
import { Entity_Status, Discount_type } from "@prisma/client"
import { CompleteDiscount_Prices, RelatedDiscount_PricesModel, CompleteProject, RelatedProjectModel, CompleteSubscriptions, RelatedSubscriptionsModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const DiscountsModel = z.object({
  id: z.string(),
  status: z.nativeEnum(Entity_Status).nullish(),
  description: z.string().nullish(),
  enabled_for_checkout: z.boolean().nullish(),
  amount: z.number(),
  currency_code: z.string(),
  type: z.nativeEnum(Discount_type),
  recur: z.boolean().nullish(),
  max_recurring_intervals: z.number().nullish(),
  usage_limit: z.number().int().nullish(),
  expires_at: z.date().nullish(),
  custom_data: jsonSchema,
  times_used: z.number().int().nullish(),
  created_at: z.date(),
  updated_at: z.date(),
  projectId: z.string().nullish(),
})

export interface CompleteDiscounts extends z.infer<typeof DiscountsModel> {
  discount_prices: CompleteDiscount_Prices[]
  Project?: CompleteProject | null
  Subscriptions: CompleteSubscriptions[]
}

/**
 * RelatedDiscountsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedDiscountsModel: z.ZodSchema<CompleteDiscounts> = z.lazy(() => DiscountsModel.extend({
  discount_prices: RelatedDiscount_PricesModel.array(),
  Project: RelatedProjectModel.nullish(),
  Subscriptions: RelatedSubscriptionsModel.array(),
}))
