import { z } from "zod";
import {
  PaymentMethod,
  PaymentProviders,
  ICheckoutInsert,
  ICheckoutItemsInsert,
} from "@repo/db/types";

export const createCheckoutSchema = z.object({
  items: z.array(
    z.object({
      price_id: z.string(),
      quantity: z.number(),
    })
  ),
  custom_data: z.any().optional(),
  success_url: z.string(),
  payment_method: z.enum(PaymentMethod),
  payment_provider: z.enum(PaymentProviders),
  discount_id: z.string().optional(),
  customer_id: z.string(),
});

export type IFormattedCheckout = ICheckoutInsert & {
  items: ICheckoutItemsInsert[];
};

type Boo = ICheckoutInsert & {
  items: Pick<ICheckoutItemsInsert, "price_id" | "quantity">[];
};

export function formatCheckoutSession(checkout: IFormattedCheckout): Boo {
  return {
    items: checkout.items.map((item) => {
      return {
        price_id: item.price_id,
        quantity: item.quantity,
      };
    }),
    id: checkout.id,
    project_id: checkout.project_id,
    custom_data: checkout.custom_data as any,
    success_url: checkout.success_url,
    customer_id: checkout.customer_id,
    created_at: checkout.created_at!,
    discount_id: checkout.discount_id || null,
    payment_method: checkout.payment_method,
    payment_provider: checkout.payment_provider,
    discount_ammount: checkout.discount_ammount,
    total: checkout.total,
    grand_total: checkout.grand_total,
    expires_at: checkout.expires_at,
  };
}

export const createCheckoutResponseSchema = z.object({
  id: z.string(), // Checkout ID
  customer_id: z.string(),
  project_id: z.string(),
  total: z.string(),
  discount_ammount: z.string(),
  grand_total: z.string(),
  created_at: z.date().optional(),
  expires_at: z.date(),
  success_url: z.string(),
  payment_method: z.enum(PaymentMethod),
  payment_provider: z.enum(PaymentProviders),
  discount_id: z.string().nullable().optional(),
  custom_data: z.any().optional(),
  items: z.array(
    z.object({
      id: z.string(),
      checkoutId: z.string(),
      price_id: z.string(),
      quantity: z.number(),
    })
  ),
});
