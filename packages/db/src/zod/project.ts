import * as z from "zod"
import { PaymentProvider } from "@prisma/client"
import { CompleteProjectUsers, RelatedProjectUsersModel, CompleteProjectInvite, RelatedProjectInviteModel, CompleteSentEmail, RelatedSentEmailModel, CompleteProducts, RelatedProductsModel, CompletePrices, RelatedPricesModel, CompleteDiscounts, RelatedDiscountsModel, CompleteCustomers, RelatedCustomersModel, CompleteSubscriptions, RelatedSubscriptionsModel, CompleteTransactions, RelatedTransactionsModel, CompleteApi_keys, RelatedApi_keysModel, CompleteCheckouts, RelatedCheckoutsModel } from "./index"

export const ProjectModel = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  logo: z.string().nullish(),
  plan: z.string(),
  billingCycleStart: z.number().int(),
  inviteCode: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  usageLastChecked: z.date(),
  paymentProvider: z.nativeEnum(PaymentProvider),
})

export interface CompleteProject extends z.infer<typeof ProjectModel> {
  users: CompleteProjectUsers[]
  invites: CompleteProjectInvite[]
  sentEmails: CompleteSentEmail[]
  products: CompleteProducts[]
  prices: CompletePrices[]
  discounts: CompleteDiscounts[]
  customers: CompleteCustomers[]
  Subscriptions: CompleteSubscriptions[]
  Transactions: CompleteTransactions[]
  Api_keys: CompleteApi_keys[]
  Checkouts: CompleteCheckouts[]
}

/**
 * RelatedProjectModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedProjectModel: z.ZodSchema<CompleteProject> = z.lazy(() => ProjectModel.extend({
  users: RelatedProjectUsersModel.array(),
  invites: RelatedProjectInviteModel.array(),
  sentEmails: RelatedSentEmailModel.array(),
  products: RelatedProductsModel.array(),
  prices: RelatedPricesModel.array(),
  discounts: RelatedDiscountsModel.array(),
  customers: RelatedCustomersModel.array(),
  Subscriptions: RelatedSubscriptionsModel.array(),
  Transactions: RelatedTransactionsModel.array(),
  Api_keys: RelatedApi_keysModel.array(),
  Checkouts: RelatedCheckoutsModel.array(),
}))
