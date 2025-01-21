import * as z from "zod"
import { PriceType, BillingInterval, BillingInterval, Entity_Status } from "../client"
import { CompleteProducts, RelatedProductsModel, CompleteProject, RelatedProjectModel, CompleteDiscount_Prices, RelatedDiscount_PricesModel, CompleteSubscriptionItems, RelatedSubscriptionItemsModel, CompleteTransactionItems, RelatedTransactionItemsModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const PricesModel = z.object({
  id: z.string(),
  type: z.nativeEnum(PriceType),
  description: z.string().nullish(),
  name: z.string(),
  billing_cycle_frequency: z.number().int(),
  billing_cycle_interval: z.nativeEnum(BillingInterval),
  trial_period_frequency: z.number().int(),
  trial_period_interval: z.nativeEnum(BillingInterval),
  amount: z.number(),
  currency_code: z.string(),
  custom_data: jsonSchema,
  status: z.nativeEnum(Entity_Status),
  created_at: z.date(),
  updated_at: z.date(),
  product_id: z.string(),
  projectId: z.string(),
})

export interface CompletePrices extends z.infer<typeof PricesModel> {
  Products?: CompleteProducts | null
  Project: CompleteProject
  Discount_Prices: CompleteDiscount_Prices[]
  Subscription_Items: CompleteSubscriptionItems[]
  TransactionItems: CompleteTransactionItems[]
}

/**
 * RelatedPricesModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPricesModel: z.ZodSchema<CompletePrices> = z.lazy(() => PricesModel.extend({
  Products: RelatedProductsModel.nullish(),
  Project: RelatedProjectModel,
  Discount_Prices: RelatedDiscount_PricesModel.array(),
  Subscription_Items: RelatedSubscriptionItemsModel.array(),
  TransactionItems: RelatedTransactionItemsModel.array(),
}))
