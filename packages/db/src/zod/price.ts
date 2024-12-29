import * as z from "zod"
import { PriceType, PriceStatus } from "@prisma/client"
import { CompleteBillingCycle, RelatedBillingCycleModel, CompleteUnitPrice, RelatedUnitPriceModel, CompleteQuantityConstraints, RelatedQuantityConstraintsModel, CompleteProducts, RelatedProductsModel, CompleteProject, RelatedProjectModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const PriceModel = z.object({
  id: z.string(),
  product_id: z.string(),
  type: z.nativeEnum(PriceType),
  description: z.string().nullish(),
  name: z.string(),
  billingCycle_id: z.string().nullish(),
  trial_period: jsonSchema,
  custom_data: jsonSchema,
  status: z.nativeEnum(PriceStatus),
  created_at: z.date(),
  updated_at: z.date(),
  products_id: z.string().nullish(),
  projectId: z.string().nullish(),
})

export interface CompletePrice extends z.infer<typeof PriceModel> {
  billing_cycle?: CompleteBillingCycle | null
  unit_price: CompleteUnitPrice[]
  quantity?: CompleteQuantityConstraints | null
  Products?: CompleteProducts | null
  Project?: CompleteProject | null
}

/**
 * RelatedPriceModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPriceModel: z.ZodSchema<CompletePrice> = z.lazy(() => PriceModel.extend({
  billing_cycle: RelatedBillingCycleModel.nullish(),
  unit_price: RelatedUnitPriceModel.array(),
  quantity: RelatedQuantityConstraintsModel.nullish(),
  Products: RelatedProductsModel.nullish(),
  Project: RelatedProjectModel.nullish(),
}))
