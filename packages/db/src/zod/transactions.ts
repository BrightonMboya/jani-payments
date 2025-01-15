import * as z from "zod"
import { TransactionStatus, CollectionMode } from "@prisma/client"
import { CompleteCustomers, RelatedCustomersModel, CompleteAddresses, RelatedAddressesModel, CompleteProject, RelatedProjectModel, CompleteProducts, RelatedProductsModel, CompleteSubscriptions, RelatedSubscriptionsModel, CompleteDiscounts, RelatedDiscountsModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const TransactionsModel = z.object({
  id: z.string(),
  status: z.nativeEnum(TransactionStatus),
  customer_id: z.string(),
  address_id: z.string(),
  project_id: z.string(),
  product_id: z.string(),
  subscription_id: z.string().nullish(),
  subtotal: z.number(),
  discount_ammount: z.number(),
  total: z.number(),
  grand_total: z.number(),
  discount_id: z.string().nullish(),
  invoice_id: z.string(),
  current_period_starts: z.date().nullish(),
  current_period_ends: z.date().nullish(),
  custom_data: jsonSchema,
  currency_code: z.string(),
  collection_mode: z.nativeEnum(CollectionMode),
  created_at: z.date(),
  updated_at: z.date().nullish(),
})

export interface CompleteTransactions extends z.infer<typeof TransactionsModel> {
  customer: CompleteCustomers
  address: CompleteAddresses
  project: CompleteProject
  product: CompleteProducts
  subscription?: CompleteSubscriptions | null
  discount?: CompleteDiscounts | null
}

/**
 * RelatedTransactionsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedTransactionsModel: z.ZodSchema<CompleteTransactions> = z.lazy(() => TransactionsModel.extend({
  customer: RelatedCustomersModel,
  address: RelatedAddressesModel,
  project: RelatedProjectModel,
  product: RelatedProductsModel,
  subscription: RelatedSubscriptionsModel.nullish(),
  discount: RelatedDiscountsModel.nullish(),
}))
