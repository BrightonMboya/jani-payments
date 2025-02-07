import * as z from "zod"
import { CompleteCustomers, RelatedCustomersModel, CompleteProject, RelatedProjectModel, CompleteCheckoutItems, RelatedCheckoutItemsModel } from "./index"

export const CheckoutsModel = z.object({
  id: z.string(),
  customer_id: z.string(),
  project_id: z.string(),
  created_at: z.date(),
})

export interface CompleteCheckouts extends z.infer<typeof CheckoutsModel> {
  customer: CompleteCustomers
  project: CompleteProject
  checkoutItems: CompleteCheckoutItems[]
}

/**
 * RelatedCheckoutsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCheckoutsModel: z.ZodSchema<CompleteCheckouts> = z.lazy(() => CheckoutsModel.extend({
  customer: RelatedCustomersModel,
  project: RelatedProjectModel,
  checkoutItems: RelatedCheckoutItemsModel.array(),
}))
