import * as z from "zod"
import { SubscriptionItemsStatus } from "@prisma/client"
import { CompleteSubscriptions, RelatedSubscriptionsModel, CompletePrices, RelatedPricesModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const SubscriptionItemsModel = z.object({
  id: z.string(),
  subscription_id: z.string(),
  price_id: z.string(),
  quantity: z.number().int(),
  status: z.nativeEnum(SubscriptionItemsStatus),
  recurring: z.boolean(),
  created_at: z.date(),
  updated_at: z.date(),
  previously_billed_at: z.date().nullish(),
  next_billed_at: z.date().nullish(),
  trial_started_at: z.date().nullish(),
  trial_ended_at: z.date().nullish(),
  custom_data: jsonSchema,
})

export interface CompleteSubscriptionItems extends z.infer<typeof SubscriptionItemsModel> {
  subscription: CompleteSubscriptions
  price: CompletePrices
}

/**
 * RelatedSubscriptionItemsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSubscriptionItemsModel: z.ZodSchema<CompleteSubscriptionItems> = z.lazy(() => SubscriptionItemsModel.extend({
  subscription: RelatedSubscriptionsModel,
  price: RelatedPricesModel,
}))
