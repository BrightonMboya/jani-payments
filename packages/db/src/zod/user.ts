import * as z from "zod"
import { CompleteAccount, RelatedAccountModel, CompleteProjectUsers, RelatedProjectUsersModel, CompleteSession, RelatedSessionModel, CompleteApi_keys, RelatedApi_keysModel } from "./index"

export const UserModel = z.object({
  id: z.string(),
  name: z.string().nullish(),
  email: z.string().nullish(),
  emailVerified: z.date().nullish(),
  image: z.string().nullish(),
  source: z.string().nullish(),
  defaultWorkspace: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteUser extends z.infer<typeof UserModel> {
  accounts: CompleteAccount[]
  ProjectUsers: CompleteProjectUsers[]
  sessions: CompleteSession[]
  api_keys: CompleteApi_keys[]
}

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() => UserModel.extend({
  accounts: RelatedAccountModel.array(),
  ProjectUsers: RelatedProjectUsersModel.array(),
  sessions: RelatedSessionModel.array(),
  api_keys: RelatedApi_keysModel.array(),
}))
