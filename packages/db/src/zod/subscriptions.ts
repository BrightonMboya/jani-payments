import * as z from "zod"
import { SubscriptionsStatus, BillingInterval, CollectionMode } from "@prisma/client"
import { CompleteCustomers, RelatedCustomersModel, CompleteAddresses, RelatedAddressesModel, CompleteProject, RelatedProjectModel, CompleteDiscounts, RelatedDiscountsModel, CompleteSubscriptionItems, RelatedSubscriptionItemsModel, CompleteSubscription_Scheduled_Changes, RelatedSubscription_Scheduled_ChangesModel, CompleteBillingDetails, RelatedBillingDetailsModel } from "./index"

export const SubscriptionsModel = z.object({
  id: z.string(),
  status: z.nativeEnum(SubscriptionsStatus),
  currency_code: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
  started_at: z.date().nullish(),
  first_billed_at: z.date().nullish(),
  next_billed_at: z.date().nullish(),
  paused_at: z.date().nullish(),
  canceled_at: z.date().nullish(),
  current_period_starts: z.date().nullish(),
  current_period_ends: z.date().nullish(),
  billing_cycle_interval: z.nativeEnum(BillingInterval),
  billing_cycle_frequency: z.number().int(),
  update_payment_method_url: z.string().nullish(),
  cancel_url: z.string().nullish(),
  customer_id: z.string(),
  address_id: z.string(),
  project_id: z.string(),
  discount_id: z.string().nullish(),
  collection_mode: z.nativeEnum(CollectionMode),
})

export interface CompleteSubscriptions extends z.infer<typeof SubscriptionsModel> {
  customer: CompleteCustomers
  address: CompleteAddresses
  project: CompleteProject
  discount?: CompleteDiscounts | null
  Subscription_Items: CompleteSubscriptionItems[]
  Subscription_Scheduled_Changes: CompleteSubscription_Scheduled_Changes[]
  BillingDetails?: CompleteBillingDetails | null
}

/**
 * RelatedSubscriptionsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSubscriptionsModel: z.ZodSchema<CompleteSubscriptions> = z.lazy(() => SubscriptionsModel.extend({
  customer: RelatedCustomersModel,
  address: RelatedAddressesModel,
  project: RelatedProjectModel,
  discount: RelatedDiscountsModel.nullish(),
  Subscription_Items: RelatedSubscriptionItemsModel.array(),
  Subscription_Scheduled_Changes: RelatedSubscription_Scheduled_ChangesModel.array(),
  BillingDetails: RelatedBillingDetailsModel.nullish(),
}))
