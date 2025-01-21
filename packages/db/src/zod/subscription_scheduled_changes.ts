import * as z from "zod"
import { ScheduledChangeAction } from "../client"
import { CompleteSubscriptions, RelatedSubscriptionsModel } from "./index"

export const Subscription_Scheduled_ChangesModel = z.object({
  id: z.string(),
  subscription_id: z.string(),
  action: z.nativeEnum(ScheduledChangeAction),
  effective_at: z.date(),
  resumes_at: z.date().nullish(),
})

export interface CompleteSubscription_Scheduled_Changes extends z.infer<typeof Subscription_Scheduled_ChangesModel> {
  subscription: CompleteSubscriptions
}

/**
 * RelatedSubscription_Scheduled_ChangesModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSubscription_Scheduled_ChangesModel: z.ZodSchema<CompleteSubscription_Scheduled_Changes> = z.lazy(() => Subscription_Scheduled_ChangesModel.extend({
  subscription: RelatedSubscriptionsModel,
}))
