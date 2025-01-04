import * as z from "zod"
import { BillingInterval } from "@prisma/client"
import { CompleteSubscriptions, RelatedSubscriptionsModel } from "./index"

export const BillingDetailsModel = z.object({
  id: z.string(),
  subscription_id: z.string(),
  payment_interval: z.nativeEnum(BillingInterval),
  payment_frequency: z.number().int(),
  enable_checkout: z.boolean(),
  purchase_order_number: z.string().nullish(),
  additional_information: z.string().nullish(),
  created_at: z.date(),
  updated_at: z.date(),
})

export interface CompleteBillingDetails extends z.infer<typeof BillingDetailsModel> {
  subscription: CompleteSubscriptions
}

/**
 * RelatedBillingDetailsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedBillingDetailsModel: z.ZodSchema<CompleteBillingDetails> = z.lazy(() => BillingDetailsModel.extend({
  subscription: RelatedSubscriptionsModel,
}))
