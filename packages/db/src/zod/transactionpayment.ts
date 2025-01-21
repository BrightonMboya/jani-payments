import * as z from "zod"
import { PaymentMethod, PaymentProvider, PaymentStatus } from "../client"
import { CompleteTransactions, RelatedTransactionsModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const TransactionPaymentModel = z.object({
  id: z.string(),
  transaction_id: z.string(),
  payment_method: z.nativeEnum(PaymentMethod),
  payment_provider: z.nativeEnum(PaymentProvider),
  status: z.nativeEnum(PaymentStatus),
  amount: z.number(),
  currency_code: z.string(),
  mobile_network: z.string().nullish(),
  phone_suffix: z.string().nullish(),
  card_last4: z.string().nullish(),
  card_brand: z.string().nullish(),
  card_exp_month: z.number().int().nullish(),
  card_exp_year: z.number().int().nullish(),
  card_holder_name: z.string().nullish(),
  bank_reference: z.string().nullish(),
  bank_name: z.string().nullish(),
  provider_reference: z.string().nullish(),
  provider_metadata: jsonSchema,
  error_message: z.string().nullish(),
  created_at: z.date(),
  updated_at: z.date().nullish(),
})

export interface CompleteTransactionPayment extends z.infer<typeof TransactionPaymentModel> {
  transaction: CompleteTransactions
}

/**
 * RelatedTransactionPaymentModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedTransactionPaymentModel: z.ZodSchema<CompleteTransactionPayment> = z.lazy(() => TransactionPaymentModel.extend({
  transaction: RelatedTransactionsModel,
}))
