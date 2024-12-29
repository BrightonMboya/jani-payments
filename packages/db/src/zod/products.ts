import * as z from "zod"
import { product_status } from "@prisma/client"
import { CompleteProject, RelatedProjectModel, CompletePrices, RelatedPricesModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const ProductsModel = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  status: z.nativeEnum(product_status),
  createdAt: z.date(),
  updatedAt: z.date(),
  custom_data: jsonSchema,
  project_id: z.string(),
})

export interface CompleteProducts extends z.infer<typeof ProductsModel> {
  Project: CompleteProject
  prices: CompletePrices[]
}

/**
 * RelatedProductsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedProductsModel: z.ZodSchema<CompleteProducts> = z.lazy(() => ProductsModel.extend({
  Project: RelatedProjectModel,
  prices: RelatedPricesModel.array(),
}))
