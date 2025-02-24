import { z } from "@hono/zod-openapi";
import {
  BillingInterval,
  CollectionMode,
  SubscriptionItemsStatus,
} from "@repo/db/types";
import { jsonSchema } from "~/lib/utils/zod-helpers";
import { DiscountResponseSchema } from "../discounts/discounts.routes";
import { PricesResponseSchema, transformPrices } from "../prices/helpers";
import { transformDiscount } from "../discounts/helpers";
import { SubChangesSelectSchema } from "@repo/db/types";

type Price = {
  id: string;
  type: string;
  description: string | null;
  name: string;
  billingCycleFrequency: number;
  billingCycleInterval: string;
  trialPeriodFrequency: number;
  trialPeriodInterval: string;
  amount: string;
  currencyCode: string;
  customData: any;
  status: string;
  createdAt: string;
  updatedAt: string;
  product_id: string;
  projectId: string;
};

export type SubscriptionItemStatus = "active" | "inactive" | "trialing";
type SubscriptionItem = {
  id: string;
  subscription_id: string;
  price_id: string;
  quantity: number;
  status: SubscriptionItemStatus;
  recurring: boolean;
  created_at: string;
  updated_at: string;
  previously_billed_at: string | null;
  next_billed_at: string | null;
  trial_started_at: string | null;
  trial_ended_at: string | null;
  custom_data: any;
  price: Price;
};

type SubscriptionScheduledChange = {
  id: string;
  subscription_id: string;
  action: "pause" | "resume" | "cancel";
  effective_at: string;
  resumes_at: string | null;
  status: "completed" | "scheduled";
};

export type SubscriptionStatus =
  | "active"
  | "cancelled"
  | "past_due"
  | "paused"
  | "trial";

export type Subscriptions = {
  id: string;
  status: SubscriptionStatus;
  currency_code: string;
  created_at: string | null;
  updated_at: string | null;
  started_at: string | null;
  first_billed_at: string | null;
  next_billed_at: string | null;
  paused_at: string | null;
  canceled_at: string | null;
  current_period_starts: string | null;
  current_period_ends: string | null;
  billing_cycle_interval: string;
  billing_cycle_frequency: number;
  update_payment_method_url: string | null;
  cancel_url: string | null;
  customer_id: string;
  address_id: string;
  project_id: string;
  discount_id: string | null;
  collection_mode: "automatic" | "manual";
  BillingDetails: any; // Replace with correct type if you have one for BillingDetails
  discount: any | null; // Replace with correct type if you have one for Discount
  Subscription_Items: SubscriptionItem[];
  Subscription_Scheduled_Changes: SubscriptionScheduledChange[] | null;
};

// export type Subscriptions = Prisma.SubscriptionsGetPayload<{
//   include: {
//     Subscription_Items: {
//       include: {
//         price: true;
//       };
//     };
//     discount: {
//       include: {
//         discount_prices: true;
//       };
//     };
//     BillingDetails: true;
//     Subscription_Scheduled_Changes: true;
//   };
// }>;

const SubscriptionItemsSchema = z.array(
  z.object({
    status: z.enum(SubscriptionItemsStatus),
    price_id: z.string(),
    quantity: z.number().int().positive(),
    id: z.string(),
    subscription_id: z.string(),
    recurring: z.boolean(),
    created_at: z.date(),
    updated_at: z.date(),
    previously_billed_at: z.date().nullable(),
    next_billed_at: z.date().nullable(),
    trial_started_at: z.date().nullable(),
    trial_ended_at: z.date().nullable(),
    custom_data: z.any(),
    price: PricesResponseSchema,
  })
);

const effective_from_enum = z
  .enum(["immediately", "next_billing_period"])
  .default("next_billing_period");

const billingDetailsSchema = z.object({
  payment_terms: z.object({
    payment_interval: z.enum(BillingInterval),
    payment_frequency: z.number(),
  }),
  enable_checkout: z.boolean(),
  additional_information: z.string(),
  purchase_order_number: z.string(),
});

export const createSubscriptionSchema = z.object({
  status: z.enum(["active", "cancelled", "past_due", "paused", "trial"]),
  currency_code: z.string(),
  customer_id: z.string(),
  address_id: z.string(),
  discount_id: z.string().nullish(),
  items: z.array(
    z.object({
      price_id: z.string(),
      quantity: z.string(),
    })
  ),
  billingDetails: billingDetailsSchema,
});

export const updateSubscriptionSchema = z
  .object({
    customer_id: z.string().nullish(),
    address_id: z.string().nullish(),
    currency_code: z.string().nullish(),
    next_billed_at: z.string().date().nullish(),
    collection_mode: z.enum(CollectionMode).nullish(),
    discount: z
      .object({
        id: z.string(),
        effective_from: effective_from_enum,
      })
      .nullish(),
    billing_details: z.object({
      payment_terms: z
        .object({
          payment_interval: z.enum(BillingInterval),
          payment_frequency: z.number(),
        })
        .nullish(),
      enable_checkout: z.boolean().nullish(),
      additional_information: z.string().nullish(),
      purchase_order_number: z.string().nullish(),
    }),
    current_billing_period: z
      .object({
        starts_at: z.date().nullable(),
        ends_at: z.date().nullable(),
      })
      .nullish(),
    // billing_cycle: z.object({
    //   frequency: z.number().int().positive(),
    //   interval: z.string(),
    // }),
    items: z.array(
      z.object({
        price_id: z.string(),
        quantity: z.number().nullish(),
      })
    ),
    custom_data: jsonSchema.nullish(),
    management_urls: z
      .object({
        update_payment_method: z.string().nullable(),
        cancel: z.string().nullable(),
      })
      .nullish(),
  })
  .partial();

export const transformedSubscriptionSchema = z.object({
  data: z.object({
    id: z.string(),
    status: z.string(),
    customer_id: z.string(),
    address_id: z.string(),
    // business_id: z.null(),
    currency_code: z.string(),
    created_at: z.string().date(),
    updated_at: z.string().date(),
    started_at: z.string().date().nullable(),
    first_billed_at: z.string().date().nullable(),
    next_billed_at: z.string().date().nullable(),
    paused_at: z.string().date().nullable(),
    canceled_at: z.string().date().nullable(),
    collection_mode: z.string(),
    billing_details: z.object({
      payment_terms: z.object({
        interval: z.enum(BillingInterval).nullish(),
        frequency: z.number().nullish(),
      }),
      enable_checkout: z.boolean().nullish(),
      additional_information: z.string().nullish(),
      purchase_order_number: z.string().nullish(),
    }),
    current_billing_period: z.object({
      starts_at: z.string().date().nullable(),
      ends_at: z.string().date().nullable(),
    }),
    billing_cycle: z.object({
      frequency: z.number().int().positive(),
      interval: z.string(),
    }),
    scheduled_change: z.array(SubChangesSelectSchema.nullish()),
    items: SubscriptionItemsSchema,
    custom_data: jsonSchema.nullish(),
    management_urls: z.object({
      update_payment_method: z.string().nullable(),
      cancel: z.string().nullable(),
    }),
    discount: DiscountResponseSchema.nullish(),
  }),
});

export type TransformedSubscription = z.infer<
  typeof transformedSubscriptionSchema
>;

export function transformSubscription(
  input: Subscriptions
): TransformedSubscription {
  return {
    data: {
      id: input.id,
      status: input.status,
      customer_id: input.customer_id,
      address_id: input.address_id,
      //   business_id: null,
      currency_code: input.currency_code,
      created_at: input.created_at!,
      updated_at: input.updated_at!,
      started_at: input.started_at!,
      first_billed_at: input.first_billed_at!,
      next_billed_at: input.next_billed_at!,
      paused_at: input.paused_at!,
      canceled_at: input.canceled_at!,
      collection_mode: input.collection_mode,
      billing_details: {
        payment_terms: {
          interval: input.BillingDetails?.payment_interval,
          frequency: input.BillingDetails?.payment_frequency,
        },
        enable_checkout: input.BillingDetails?.enable_checkout,
        purchase_order_number: input.BillingDetails?.purchase_order_number,
        additional_information: input.BillingDetails?.additional_information,
      },
      current_billing_period: {
        starts_at: input.current_period_starts!,
        ends_at: input.current_period_ends!,
      },
      billing_cycle: {
        frequency: input.billing_cycle_frequency,
        interval: input.billing_cycle_interval,
      },

      scheduled_change: input.Subscription_Scheduled_Changes ?? [],
      //  s: ins: input.Subscription_Items,\cription_Items,\
      //@ts-ignore i dont have time for this
      items: input.Subscription_Items.map((item: any) => ({
        status: item.status,
        price_id: item.price_id,
        quantity: item.quantity,
        id: item.id,
        subscription_id: item.subscription_id,
        recurring: item.recurring,
        created_at: new Date(item.created_at),
        updated_at: new Date(item.updated_at),
        previously_billed_at: item.previously_billed_at
          ? new Date(item.previously_billed_at)
          : null,
        next_billed_at: item.next_billed_at
          ? new Date(item.next_billed_at)
          : null,
        trial_started_at: item.trial_started_at
          ? new Date(item.trial_started_at)
          : null,
        trial_ended_at: item.trial_ended_at
          ? new Date(item.trial_ended_at)
          : null,
        custom_data: item.custom_data,
        price: transformPrices({
          ...(item.price as any),
        }),
      })),
      // custom_data: null,
      management_urls: {
        update_payment_method: input.update_payment_method_url,
        cancel: input.cancel_url,
      },
      discount: input.discount ? transformDiscount(input.discount) : null,
    },
  };
}

export const cancelSubscriptionSchema = z.object({
  effective_from: effective_from_enum,
});

export const pauseSubscriptionSchema = z.object({
  effective_from: effective_from_enum,
  resume_at: z.string().datetime().nullish(),
  on_resume: z.enum([
    "continue_existing_billing_period",
    "start_new_billing_period",
  ]),
});

export const resumeSubscriptionSchema = z.object({
  effective_from: effective_from_enum,
  on_resume: z
    .enum(["continue_existing_billing_period", "start_new_billing_period"])
    .default("start_new_billing_period"),
});
