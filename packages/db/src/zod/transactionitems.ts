import * as z from "zod"
import { CompletePrices, RelatedPricesModel, CompleteTransactions, RelatedTransactionsModel } from "./index"

export const TransactionItemsModel = z.object({
  id: z.string(),
  price_id: z.string(),
  quantity: z.number().int(),
  transactionsId: z.string().nullish(),
})

export interface CompleteTransactionItems extends z.infer<typeof TransactionItemsModel> {
  price: CompletePrices
  Transactions?: CompleteTransactions | null
}

/**
 * RelatedTransactionItemsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedTransactionItemsModel: z.ZodSchema<CompleteTransactionItems> = z.lazy(() => TransactionItemsModel.extend({
  price: RelatedPricesModel,
  Transactions: RelatedTransactionsModel.nullish(),
}))
