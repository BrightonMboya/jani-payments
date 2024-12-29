import * as z from "zod"
import { CompletePrices, RelatedPricesModel } from "./index"

export const UnitPriceModel = z.object({
  id: z.string(),
  amount: z.number(),
  currency_code: z.string(),
  priceId: z.string().nullish(),
})

export interface CompleteUnitPrice extends z.infer<typeof UnitPriceModel> {
  Price?: CompletePrices | null
}

/**
 * RelatedUnitPriceModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUnitPriceModel: z.ZodSchema<CompleteUnitPrice> = z.lazy(() => UnitPriceModel.extend({
  Price: RelatedPricesModel.nullish(),
}))
