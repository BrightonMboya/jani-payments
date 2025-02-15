import * as z from "zod"
import { CompleteUser, RelatedUserModel, CompleteProject, RelatedProjectModel } from "./index"

export const Api_keysModel = z.object({
  id: z.string(),
  prefix: z.string().nullish(),
  description: z.string().nullish(),
  createdAt: z.date(),
  key: z.string(),
  PAYSTACK_API_KEY: z.string().nullish(),
  SELCOM_API_KEY: z.string().nullish(),
  STRIPE_API_KEY: z.string().nullish(),
  DPO_API_KEY: z.string().nullish(),
  FLUTTERWAVE_API_KEY: z.string().nullish(),
  userId: z.string(),
  project_id: z.string().nullish(),
})

export interface CompleteApi_keys extends z.infer<typeof Api_keysModel> {
  User: CompleteUser
  Project?: CompleteProject | null
}

/**
 * RelatedApi_keysModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedApi_keysModel: z.ZodSchema<CompleteApi_keys> = z.lazy(() => Api_keysModel.extend({
  User: RelatedUserModel,
  Project: RelatedProjectModel.nullish(),
}))
