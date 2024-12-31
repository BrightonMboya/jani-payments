import * as z from "zod"
import { Entity_Status } from "@prisma/client"
import { CompleteProject, RelatedProjectModel, CompleteAddresses, RelatedAddressesModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const CustomersModel = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string(),
  status: z.nativeEnum(Entity_Status).nullish(),
  description: z.string().nullish(),
  custom_data: jsonSchema,
  created_at: z.date(),
  updated_at: z.date(),
  projectId: z.string().nullish(),
})

export interface CompleteCustomers extends z.infer<typeof CustomersModel> {
  Project?: CompleteProject | null
  Addresses: CompleteAddresses[]
}

/**
 * RelatedCustomersModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCustomersModel: z.ZodSchema<CompleteCustomers> = z.lazy(() => CustomersModel.extend({
  Project: RelatedProjectModel.nullish(),
  Addresses: RelatedAddressesModel.array(),
}))
