import * as z from "zod"
import { CompleteProject, RelatedProjectModel } from "./index"

export const SentEmailModel = z.object({
  id: z.string(),
  type: z.string(),
  createdAt: z.date(),
  projectId: z.string().nullish(),
})

export interface CompleteSentEmail extends z.infer<typeof SentEmailModel> {
  project?: CompleteProject | null
}

/**
 * RelatedSentEmailModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSentEmailModel: z.ZodSchema<CompleteSentEmail> = z.lazy(() => SentEmailModel.extend({
  project: RelatedProjectModel.nullish(),
}))
