import * as z from "zod"
import { Entity_Status } from "@prisma/client"
import { CompleteCustomers, RelatedCustomersModel, CompleteSubscriptions, RelatedSubscriptionsModel, CompleteTransactions, RelatedTransactionsModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const AddressesModel = z.object({
  id: z.string(),
  description: z.string().nullish(),
  first_line: z.string().nullish(),
  custom_data: jsonSchema,
  city: z.string().nullish(),
  status: z.nativeEnum(Entity_Status).nullish(),
  created_at: z.date(),
  updated_at: z.date(),
  customer_id: z.string().nullish(),
})

export interface CompleteAddresses extends z.infer<typeof AddressesModel> {
  Customers?: CompleteCustomers | null
  Subscriptions: CompleteSubscriptions[]
  Transactions: CompleteTransactions[]
}

/**
 * RelatedAddressesModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedAddressesModel: z.ZodSchema<CompleteAddresses> = z.lazy(() => AddressesModel.extend({
  Customers: RelatedCustomersModel.nullish(),
  Subscriptions: RelatedSubscriptionsModel.array(),
  Transactions: RelatedTransactionsModel.array(),
}))
