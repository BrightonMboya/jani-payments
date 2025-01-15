import { CollectionMode, TransactionStatus } from "@repo/db/types";
import { z } from "zod";
import { jsonSchema } from "~/lib/utils/zod-helpers";
import { type Prisma } from "@repo/db/types";
import { PricesResponseSchema, transformPrices } from "../prices/helpers";
import { CustomersResponseSchema } from "../customers/helpers";
import { AddressResponseSchema } from "../addresses/addresses.routes";
import { DiscountResponseSchema } from "../discounts/discounts.routes";
import { transformDiscount } from "../discounts/helpers";
import { ProductsResponseSchema } from "../products/helpers";

export type Transaction = Prisma.TransactionsGetPayload<{
  include: {
    transactionItems: {
      select: {
        price: {
          include: {
            Products: {
              omit: {
                project_id: true;
              };
            };
          };
        };
        // price_id: true;
        quantity: true;
      };
    };
    // price: true;
    address: true;
    discount: {
      omit: {
        projectId: true;
      };
      include: {
        discount_prices: {
          select: {
            price_id: true;
          };
        };
      };
    };
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
    details: z.object({
      total: z.object({
        subtotal: z.number(),
        discount: z.number(),
        grand_total: z.number(),
      }),
    }),
    items: z.array(
      z.object({
        price: PricesResponseSchema,
        quantity: z.number(),
        product: ProductsResponseSchema,
      })
    ),
    created_at: z.date(),
    updated_at: z.date().nullish(),
    customer: CustomersResponseSchema,
    address: AddressResponseSchema,
    discount: DiscountResponseSchema.nullish(),
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
    items: input.transactionItems.map((item) => {
      return {
        price: transformPrices({
          ...item.price,
          amount: Number(item.price.amount),
          custom_data: item.price.custom_data! as any,
        }),
        quantity: Number(item.quantity),
        product: {
          ...item.price.Products!,
          custom_data: item.price.Products?.custom_data as any,
        },
      };
    }),
    discount: input.discount && transformDiscount(input.discount),
    details: {
      total: {
        subtotal: Number(input.subtotal),
        discount: Number(input.discount_ammount),
        grand_total: Number(input.grand_total),
      },
    },
    address: {
      ...input.address,
      custom_data: input.custom_data as any,
    },
    customer: {
      ...input.customer,
      custom_data: input.custom_data as any,
    },
    created_at: input.created_at,
    updated_at: input.updated_at,
  };
}

// Operator types for date comparisons
export enum DateOperator {
  LT = "LT", // less than
  LTE = "LTE", // less than or equal
  GT = "GT", // greater than
  GTE = "GTE", // greater than or equal
}
enum SortDirection {
  ASC = "ASC",
  DESC = "DESC",
}

enum TransactionOrderByField {
  billed_at = "billed_at",
  created_at = "created_at",
  id = "id",
  updated_at = "updated_at",
}

export const listTransactionQueryParams = z.object({
  // Pagination
  after: z.string().optional(),
  per_page: z.number().int().min(1).max(100).optional().default(30),

  // Date filters
  billed_at: z
    .union([
      z.string().datetime(), // exact match
      z.object({
        operator: z.nativeEnum(DateOperator),
        value: z.string().datetime(),
      }),
    ])
    .optional(),

  created_at: z
    .union([
      z.string().datetime(),
      z.object({
        operator: z.nativeEnum(DateOperator),
        value: z.string().datetime(),
      }),
    ])
    .optional(),

  updated_at: z
    .union([
      z.string().datetime(),
      z.object({
        operator: z.nativeEnum(DateOperator),
        value: z.string().datetime(),
      }),
    ])
    .optional(),

  // Array filters
  customer_id: z.string().array().optional(),
  id: z.string().array().optional(),
  invoice_number: z.string().array().optional(),
  subscription_id: z
    .union([
      z.string().array(),
      z.literal("null"), // handle null case specifically
    ])
    .optional(),

  // Enum filters
  collection_mode: z.nativeEnum(CollectionMode).optional(),
  // origin: z.nativeEnum(TransactionOrigin).array().optional(),
  status: z.nativeEnum(TransactionStatus).array().optional(),

  // Sorting
  order_by: z
    .object({
      field: z.nativeEnum(TransactionOrderByField),
      direction: z.nativeEnum(SortDirection),
    })
    .optional(),

  // Include related entities
  include: z
    .array(z.enum(["customer", "subscription", "items", "discount"]))
    .optional(),
});

export const ListTransactionsResponse = z.object({
  data: z.array(transformedTransactionSchema),
  meta: z.object({
    total: z.number(),
    per_page: z.number(),
    next_cursor: z.string(),
  }),
});

export type IListTransactionQueryParams = z.infer<
  typeof listTransactionQueryParams
>;
