import * as z from "zod"
import { CompleteDiscounts, RelatedDiscountsModel, CompletePrices, RelatedPricesModel } from "./index"

export const Discount_PricesModel = z.object({
  discount_Id: z.string(),
  price_id: z.string(),
})

export interface CompleteDiscount_Prices extends z.infer<typeof Discount_PricesModel> {
  discount?: CompleteDiscounts | null
  price: CompletePrices
}

/**
 * RelatedDiscount_PricesModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedDiscount_PricesModel: z.ZodSchema<CompleteDiscount_Prices> = z.lazy(() => Discount_PricesModel.extend({
  discount: RelatedDiscountsModel.nullish(),
  price: RelatedPricesModel,
}))
