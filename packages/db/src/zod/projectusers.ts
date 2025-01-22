import * as z from "zod"
import { Role } from "@prisma/client"
import { CompleteUser, RelatedUserModel, CompleteProject, RelatedProjectModel } from "./index"

export const ProjectUsersModel = z.object({
  id: z.string(),
  role: z.nativeEnum(Role),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.string(),
  projectId: z.string(),
})

export interface CompleteProjectUsers extends z.infer<typeof ProjectUsersModel> {
  user: CompleteUser
  project: CompleteProject
}

/**
 * RelatedProjectUsersModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedProjectUsersModel: z.ZodSchema<CompleteProjectUsers> = z.lazy(() => ProjectUsersModel.extend({
  user: RelatedUserModel,
  project: RelatedProjectModel,
}))
