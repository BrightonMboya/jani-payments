import * as z from "zod"
import { CompletePrices, RelatedPricesModel, CompleteCheckouts, RelatedCheckoutsModel } from "./index"

export const CheckoutItemsModel = z.object({
  id: z.string(),
  price_id: z.string(),
  quantity: z.number().int(),
  checkoutId: z.string(),
})

export interface CompleteCheckoutItems extends z.infer<typeof CheckoutItemsModel> {
  price: CompletePrices
  checkouts: CompleteCheckouts
}

/**
 * RelatedCheckoutItemsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCheckoutItemsModel: z.ZodSchema<CompleteCheckoutItems> = z.lazy(() => CheckoutItemsModel.extend({
  price: RelatedPricesModel,
  checkouts: RelatedCheckoutsModel,
}))
