import * as z from "zod"
import { CompleteProject, RelatedProjectModel } from "./index"

export const ProjectInviteModel = z.object({
  email: z.string(),
  expires: z.date(),
  projectId: z.string(),
  createdAt: z.date(),
})

export interface CompleteProjectInvite extends z.infer<typeof ProjectInviteModel> {
  project: CompleteProject
}

/**
 * RelatedProjectInviteModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedProjectInviteModel: z.ZodSchema<CompleteProjectInvite> = z.lazy(() => ProjectInviteModel.extend({
  project: RelatedProjectModel,
}))
