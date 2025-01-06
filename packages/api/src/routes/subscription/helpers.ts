import { z } from "zod";
import { SubscriptionItemsStatus, type Prisma } from "@repo/db/types";
import { jsonSchema } from "~/lib/utils/zod-helpers";
import { DiscountResponseSchema } from "../discounts/discounts.routes";
import { PricesSchema } from "../prices/prices.routes";

type Subscriptions = Prisma.SubscriptionsGetPayload<{
  include: {
    Subscription_Items: {
      include: {
        price: true;
      };
    };
    discount: true;
  };
}>;

export const createSubscriptionSchema = z.object({
  customer_id: z.string(),
  address_id: z.string(),
    // project_id: z.string(),
  currency_code: z.string(),
  collection_mode: z.enum(["automatic", "manual"]),
  billing_cycle: z.object({
    interval: z.enum(["day", "week", "month", "year"]),
    frequency: z.number().int().positive(),
  }),
  items: z
    .array(
      z.object({
        price_id: z.string(),
        quantity: z.number().int().positive(),
      })
    )
    .min(1),
  discount_id: z.string().optional(),
  billing_details: z
    .object({
      payment_interval: z.enum(["day", "week", "month", "year"]),
      payment_frequency: z.number().int().positive(),
      enable_checkout: z.boolean().optional(),
      purchase_order_number: z.string().optional(),
      additional_information: z.string().optional(),
    })
    .optional(),
});

export const transformedSubscriptionSchema = z.object({
  data: z.object({
    id: z.string(),
    status: z.string(),
    customer_id: z.string(),
    address_id: z.string(),
    business_id: z.null(),
    currency_code: z.string(),
    created_at: z.string(),
    updated_at: z.string(),
    started_at: z.string(),
    first_billed_at: z.string().nullable(),
    next_billed_at: z.string().nullable(),
    paused_at: z.string().nullable(),
    canceled_at: z.string().nullable(),
    collection_mode: z.string(),
    billing_details: z.null(),
    current_billing_period: z.object({
      starts_at: z.string().nullable(),
      ends_at: z.string().nullable(),
    }),
    billing_cycle: z.object({
      frequency: z.number().int().positive(),
      interval: z.string(),
    }),
    scheduled_change: z.null(),
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
        price: PricesSchema,
      })
    ),
    custom_data: jsonSchema,
    management_urls: z.object({
      update_payment_method: z.string().nullable(),
      cancel: z.string().nullable(),
    }),
    discount: DiscountResponseSchema,
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
      business_id: null,
      currency_code: input.currency_code,
      created_at: input.created_at.toISOString(),
      updated_at: input.updated_at.toISOString(),
      started_at: input.started_at ? input.started_at.toISOString() : "",
      first_billed_at: input.first_billed_at
        ? input.first_billed_at.toISOString()
        : null,
      next_billed_at: input.next_billed_at
        ? input.next_billed_at.toISOString()
        : null,
      paused_at: input.paused_at ? input.paused_at.toISOString() : null,
      canceled_at: input.canceled_at ? input.canceled_at.toISOString() : null,
      collection_mode: input.collection_mode,
      billing_details: null,
      current_billing_period: {
        starts_at: input.current_period_starts
          ? input.current_period_starts.toISOString()
          : null,
        ends_at: input.current_period_ends
          ? input.current_period_ends.toISOString()
          : null,
      },
      billing_cycle: {
        frequency: input.billing_cycle_frequency,
        interval: input.billing_cycle_interval,
      },
      scheduled_change: null,
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
        price: {
          ...item.price,
        },
      })),
      custom_data: null,
      management_urls: {
        update_payment_method: input.update_payment_method_url,
        cancel: input.cancel_url,
      },
      discount: input.discount || null,
    },
  };
}
