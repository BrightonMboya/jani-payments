import { z } from "@hono/zod-openapi";
import {
  BillingInterval,
  Prisma,
  SubscriptionItemsStatus,
  SubscriptionsStatus,
} from "@repo/db/types";
import { jsonSchema } from "~/lib/utils/zod-helpers";
import { DiscountResponseSchema } from "../discounts/discounts.routes";
import { PricesResponseSchema, transformPrices } from "../prices/helpers";
import { transformDiscount } from "../discounts/helpers";
import { Subscription_Scheduled_ChangesModel } from "@repo/db/zod/subscription_scheduled_changes.ts";

type Subscriptions = Prisma.SubscriptionsGetPayload<{
  include: {
    Subscription_Items: {
      include: {
        price: true;
      };
    };
    discount: {
      include: {
        discount_prices: true;
      };
    };
    Subscription_Scheduled_Changes: true;
  };
}>;

export const createSubscriptionSchema = z.object({
  status: z.nativeEnum(SubscriptionsStatus),
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
  billingDetails: z
    .object({
      payment_interval: z.nativeEnum(BillingInterval),
      payment_frequency: z.number(),
      enable_checkout: z.boolean(),
      additional_information: z.string().nullish(),
    })
    .nullish(),
});

export const transformedSubscriptionSchema = z.object({
  data: z.object({
    id: z.string(),
    status: z.string(),
    customer_id: z.string(),
    address_id: z.string(),
    // business_id: z.null(),
    currency_code: z.string(),
    created_at: z.date(),
    updated_at: z.date(),
    started_at: z.date().nullable(),
    first_billed_at: z.date().nullable(),
    next_billed_at: z.date().nullable(),
    paused_at: z.date().nullable(),
    canceled_at: z.date().nullable(),
    collection_mode: z.string(),
    billing_details: z.null(),
    current_billing_period: z.object({
      starts_at: z.date().nullable(),
      ends_at: z.date().nullable(),
    }),
    billing_cycle: z.object({
      frequency: z.number().int().positive(),
      interval: z.string(),
    }),
    scheduled_change: z.array(Subscription_Scheduled_ChangesModel.nullish()),
    items: z.array(
      z.object({
        status: z.nativeEnum(SubscriptionItemsStatus),
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
    ),
    custom_data: jsonSchema,
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
  // console.log(input)
  return {
    data: {
      id: input.id,
      status: input.status,
      customer_id: input.customer_id,
      address_id: input.address_id,
      //   business_id: null,
      currency_code: input.currency_code,
      created_at: input.created_at,
      updated_at: input.updated_at,
      started_at: input.started_at,
      first_billed_at: input.first_billed_at,
      next_billed_at: input.next_billed_at,
      paused_at: input.paused_at,
      canceled_at: input.canceled_at,
      collection_mode: input.collection_mode,
      billing_details: null,
      current_billing_period: {
        starts_at: input.current_period_starts,
        ends_at: input.current_period_ends,
      },
      billing_cycle: {
        frequency: input.billing_cycle_frequency,
        interval: input.billing_cycle_interval,
      },

      scheduled_change: input.Subscription_Scheduled_Changes,
      //   items: input.Subscription_Items,\
      items: input.Subscription_Items.map((item) => ({
        status: item.status as SubscriptionItemsStatus,
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
      custom_data: null,
      management_urls: {
        update_payment_method: input.update_payment_method_url,
        cancel: input.cancel_url,
      },
      discount: input.discount ? transformDiscount(input.discount) : null,
    },
  };
}

const effective_from_enum = z
  .enum(["immediately", "next_billing_period"])
  .default("next_billing_period");

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
