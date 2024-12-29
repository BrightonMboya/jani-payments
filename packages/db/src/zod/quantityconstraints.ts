import * as z from "zod"
import { CompletePrices, RelatedPricesModel } from "./index"

export const QuantityConstraintsModel = z.object({
  id: z.string(),
  minimum: z.number().int(),
  maximum: z.number().int(),
  priceId: z.string().nullish(),
})

export interface CompleteQuantityConstraints extends z.infer<typeof QuantityConstraintsModel> {
  Price?: CompletePrices | null
}

/**
 * RelatedQuantityConstraintsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedQuantityConstraintsModel: z.ZodSchema<CompleteQuantityConstraints> = z.lazy(() => QuantityConstraintsModel.extend({
  Price: RelatedPricesModel.nullish(),
}))
