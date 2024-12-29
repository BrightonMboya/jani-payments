import * as z from "zod"
import { BillingInterval } from "@prisma/client"
import { CompletePrices, RelatedPricesModel } from "./index"

export const BillingCycleModel = z.object({
  id: z.string(),
  interval: z.nativeEnum(BillingInterval),
  frequency: z.number().int(),
})

export interface CompleteBillingCycle extends z.infer<typeof BillingCycleModel> {
  Price: CompletePrices[]
}

/**
 * RelatedBillingCycleModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedBillingCycleModel: z.ZodSchema<CompleteBillingCycle> = z.lazy(() => BillingCycleModel.extend({
  Price: RelatedPricesModel.array(),
}))
