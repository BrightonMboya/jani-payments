import * as z from "zod"
import { CompleteUser, RelatedUserModel } from "./index"

export const Api_keysModel = z.object({
  id: z.string(),
  prefix: z.string(),
  description: z.string(),
  name: z.string(),
  createdAt: z.date(),
  key: z.string(),
  userId: z.string().nullish(),
})

export interface CompleteApi_keys extends z.infer<typeof Api_keysModel> {
  User?: CompleteUser | null
}

/**
 * RelatedApi_keysModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedApi_keysModel: z.ZodSchema<CompleteApi_keys> = z.lazy(() => Api_keysModel.extend({
  User: RelatedUserModel.nullish(),
}))
