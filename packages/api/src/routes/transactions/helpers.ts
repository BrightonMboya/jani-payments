import { CollectionMode, TransactionStatus } from "@repo/db/types";
import { z } from "zod";
import { jsonSchema } from "~/lib/utils/zod-helpers";
import { type Prisma } from "@repo/db/types";
import { PricesResponseSchema } from "../prices/helpers";
import { CustomersResponseSchema } from "../customers/helpers";
import { AddressResponseSchema } from "../addresses/addresses.routes";
import { DiscountResponseSchema } from "../discounts/discounts.routes";

type Transaction = Prisma.TransactionsGetPayload<{
  include: {
    product: true;
    price: true;
    discount: true;
    customer: true;
  };
}>;

export const createTransactionSchema = z.object({
  items: z.array(
    z.object({
      price_id: z.string(),
      quantity: z.number(),
    })
  ),
  status: z.nativeEnum(TransactionStatus),
  customer_id: z.string(),
  address_id: z.string(),
  //   product_id: z.string(),
  currency_code: z.string(),
  subscription_id: z.string().nullish(),
  discount_id: z.string().nullish(),
  collection_mode: z.nativeEnum(CollectionMode).nullish(),
  custom_data: jsonSchema.nullish(),
  current_billing_period: z
    .object({
      starts_at: z.date().nullable(),
      ends_at: z.date().nullable(),
    })
    .nullish(),
});

export const transformedTransactionSchema = createTransactionSchema
  .omit({ items: true })
  .extend({
    total: z.object({
      subtotal: z.number(),
      discount: z.number(),
      grand_total: z.number(),
    }),
    items: z.array(
      z.object({
        price: PricesResponseSchema,
        quantity: z.number(),
      })
    ),
    created_at: z.date(),
    updated_at: z.date().nullish(),
    customer: CustomersResponseSchema,
    address: AddressResponseSchema,
    discount: DiscountResponseSchema,
    invoice_id: z.string(),
  });

type TransformedTransactionSchema = z.infer<
  typeof transformedTransactionSchema
>;

export function transformTransaction(
  input: Transaction
): TransformedTransactionSchema {
  return {
    customer_id: input.customer_id,
    address_id: input.address_id,
    status: input.status,
    // product_id: z.string(),
    currency_code: input.currency_code,
    subscription_id: input.subscription_id,
    discount_id: input.discount_id,
    collection_mode: input.collection_mode,
    custom_data: input.custom_data as any,
    invoice_id: input.invoice_id,
    current_billing_period: {
      starts_at: input.current_period_starts,
      ends_at: input.current_period_ends,
    },
    discount: 
    created_at: input.created_at,
    updated_at: input.updated_at,
  };
}
