import { z } from "zod";
import { Json, jsonSchema } from "~/lib/utils/zod-helpers";
import { PricesResponseSchema, transformPrices } from "../prices/helpers";
import { CustomersResponseSchema } from "../customers/helpers";
import { AddressResponseSchema } from "../addresses/addresses.routes";
import { DiscountResponseSchema } from "../discounts/discounts.routes";
import { transformDiscount } from "../discounts/helpers";
import { ProductsResponseSchema } from "../products/helpers";
import { HTTPException } from "hono/http-exception";
import * as schema from "@repo/db/db/schema.ts";
import { InferSelectModel } from "drizzle-orm";

// Infer basic schemas
const PaymentMethod = z.enum(schema.paymentMethod.enumValues).Values;
const transactionPayment = schema.TransactionPayment.$inferSelect;
const addressSchema = schema.addresses.$inferSelect;

// Type for Product excluding project_id
type Product = Omit<InferSelectModel<typeof schema.Products>, "project_id">;

// Type for Price with nested Product
type Price = InferSelectModel<typeof schema.Prices> & {
  Products: Product;
};

// Type for Transaction Item with nested Price
type TransactionItem = InferSelectModel<typeof schema.TransactionItems> & {
  price: Price;
  quantity: number;
};

// Type for Discount with nested Discount Prices
type DiscountPrice = Pick<
  InferSelectModel<typeof schema.DiscountPrices>,
  "price_id"
>;

type Discount = Omit<InferSelectModel<typeof schema.Discounts>, "projectId"> & {
  discount_prices: DiscountPrice[];
};

// Type for Transaction including nested relations
export type Transaction = InferSelectModel<typeof schema.Transactions> & {
  transactionItems: TransactionItem[];
  address: InferSelectModel<typeof schema.addresses>;
  discount: Discount | null;
  // customer: InferSelectModel<typeof schema.Customers>;
  customer: typeof schema.Customers.$inferSelect;
  TransactionPayment: InferSelectModel<typeof schema.TransactionPayment>;
};

// export type Transaction = Prisma.TransactionsGetPayload<{
//   include: {
//     transactionItems: {
//       select: {
//         price: {
//           include: {
//             Products: {
//               omit: {
//                 project_id: true;
//               };
//             };
//           };
//         };
//         // price_id: true;
//         quantity: true;
//       };
//     };
//     // price: true;
//     address: true;
//     discount: {
//       omit: {
//         projectId: true;
//       };
//       include: {
//         discount_prices: {
//           select: {
//             price_id: true;
//           };
//         };
//       };
//     };
//     customer: true;
//     TransactionPayment: true;
//   };
// }>;

// Payment method specific details schemas

const mobileMoneyDetailsSchema = z.object({
  network: z.string(),
  phone_suffix: z.string(),
});

const cardDetailsSchema = z.object({
  last4: z.string(),
  brand: z.string(),
  exp_month: z.number(),
  exp_year: z.number(),
  cardholder_name: z.string().nullable(),
  // country: z.string().nullable(),
});

const bankTransferDetailsSchema = z.object({
  bank_name: z.string(),
  bank_reference: z.string(),
  // account_suffix: z.string().nullable(),
  // transfer_type: z.enum(["instant", "manual"]),
});

// Payment Details Schema
const BasePaymentSchema = z.object({
  payment_method: z.enum(schema.paymentMethod.enumValues),
  payment_provider: z.enum(schema.paymentProvider.enumValues),
  amount: z.number().positive(),
  currency_code: z.string().length(3), // ISO 4217 currency code
});

// Conditional payment details based on payment method
const MobileMoneyPaymentSchema = BasePaymentSchema.extend({
  payment_method: z.literal("MOBILE_MONEY"),
  mobile_network: z.string(),
  phone_suffix: z.string().length(4),
});

const CardPaymentSchema = BasePaymentSchema.extend({
  payment_method: z.literal("CARD"),
  card_last4: z.string().length(4),
  card_brand: z.string(),
  card_exp_month: z.number().int().min(1).max(12),
  card_exp_year: z.number().int().min(new Date().getFullYear()),
  card_holder_name: z.string(),
});

const BankTransferPaymentSchema = BasePaymentSchema.extend({
  payment_method: z.literal("BANK_TRANSFER"),
  bank_reference: z.string(),
  bank_name: z.string(),
});
const PaymentDetailsSchema = z.discriminatedUnion("payment_method", [
  MobileMoneyPaymentSchema,
  CardPaymentSchema,
  BankTransferPaymentSchema,
]);

const PaymentResponseSchema = z.object({
  id: z.string(),
  status: z.enum(schema.paymentStatus.enumValues),
  // amount: z.number(),
  payment_method: z.enum(schema.paymentMethod.enumValues),
  provider: z.enum(schema.paymentProvider.enumValues),
  created_at: z.date(),
  updated_at: z.date().nullish(),
  provider_reference: z.string().nullable(),
  provider_metadata: jsonSchema.nullable(),
  method_details: z.discriminatedUnion("payment_method", [
    z.object({
      payment_method: z.literal("MOBILE_MONEY"),
      details: mobileMoneyDetailsSchema,
    }),
    z.object({
      payment_method: z.literal("CARD"),
      details: cardDetailsSchema,
    }),
    z.object({
      payment_method: z.literal("BANK_TRANSFER"),
      details: bankTransferDetailsSchema,
    }),
  ]),
});

export const createTransactionSchema = z.object({
  // required fields
  items: z.array(
    z.object({
      price_id: z.string(),
      quantity: z.number(),
    })
  ),
  status: z.enum(schema.transactionStatus.enumValues),
  customer_id: z.string(),
  address_id: z.string(),
  //   product_id: z.string(),
  currency_code: z.string(),

  //payment details
  payment_details: PaymentDetailsSchema,

  // optional fields
  subscription_id: z.string().nullish(),
  discount_id: z.string().nullish(),
  collection_mode: z.enum(schema.collectionMode.enumValues).nullish(),
  custom_data: jsonSchema.nullish(),
  current_billing_period: z
    .object({
      starts_at: z.string().datetime(),
      ends_at: z.string().datetime(),
    })
    .optional()
    .refine(
      (data) => {
        if (!data) return true;
        return data.ends_at > data.starts_at;
      },
      {
        message: "End Date must be after the start date",
      }
    ),
});

export type ICreateTransactionSchema = typeof createTransactionSchema;

export const updateTransactionSchema = z.object({
  status: z.enum(schema.transactionStatus.enumValues),
});

export const transformedTransactionSchema = createTransactionSchema
  .omit({ items: true, payment_details: true })
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
    payments: PaymentResponseSchema,
    created_at: z.string().date(),
    updated_at: z.string().date().nullish(),
    customer: {
      id: z.string(),
      name: z.string(),
      status: z.enum(schema.entityStatus.enumValues),
      //@ts-ignore fy ts
      description: z.string().nullable(),
      customData: z.any(),
      email: z.string(),
      createdAt: z.string(),
      updatedAt: z.string(),
    },
    address: AddressResponseSchema,
    discount: DiscountResponseSchema.nullish(),
    invoice_id: z.string(),
  });

// helper fn to transform payment data
function transformPayment(payment: typeof transactionPayment) {
  if (!payment) {
    throw new Error("Payment data is required");
  }
  const methodDetails = getPaymentMethodDetails(payment);
  return {
    id: payment?.id!,
    status: payment?.status,
    amount: Number(payment?.amount),
    currency_code: payment?.currency_code,
    payment_method: payment?.payment_method,
    provider: payment?.payment_provider,
    created_at: new Date(payment?.created_at),
    updated_at: payment?.updated_at ? new Date(payment?.updated_at) : undefined,
    error_message: payment?.error_message,
    provider_reference: payment?.provider_reference,
    provider_metadata: payment?.provider_metadata as any,
    method_details: methodDetails,
  };
}

function getPaymentMethodDetails(
  payment: NonNullable<typeof transactionPayment>
) {
  switch (payment?.payment_method) {
    case PaymentMethod.MOBILE_MONEY:
      return {
        payment_method: PaymentMethod.MOBILE_MONEY,
        details: {
          network: payment.mobile_network!,
          phone_suffix: payment.phone_suffix!,
        },
      };
    case PaymentMethod.CARD:
      return {
        payment_method: PaymentMethod.CARD,
        details: {
          last4: payment.card_last4!,
          brand: payment.card_brand!,
          exp_month: payment.card_exp_month!,
          exp_year: payment.card_exp_year!,
          cardholder_name: payment.card_holder_name!,
        },
      };
    case PaymentMethod.BANK_TRANSFER:
      return {
        payment_method: PaymentMethod.BANK_TRANSFER,
        details: {
          bank_name: payment.bank_name!,
          bank_reference: payment.bank_reference!,
        },
      };
    default:
      throw new Error(`Unknown payment method: ${payment?.payment_method}`);
  }
}

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
    custom_data: input.custom_data as Json,
    invoice_id: input.invoice_id,
    current_billing_period: {
      starts_at: input.current_period_starts!.toString(),
      ends_at: input.current_period_ends!.toString(),
    },
    items: input.transactionItems.map((item) => {
      return {
        price: transformPrices({
          ...item.price,
          amount: item.price.amount,
          customData: item.price.customData as Json,
        }),
        quantity: item.quantity,
        product: {
          ...item.price.Products!,
          custom_data: item.price.Products?.customData,
        },
      };
    }),
    //
    payments: transformPayment(input.TransactionPayment),
    discount:
      input.discount &&
      transformDiscount({
        ...input.discount,
        custom_data: input.discount.custom_data as Json,
      }),
    details: {
      total: {
        subtotal: Number(input.subtotal),
        discount: Number(input.discount_ammount),
        grand_total: Number(input.grand_total),
      },
    },
    address: {
      ...input.address,
      status: "active",
      custom_data: input.custom_data as any,
    },
    customer: {
      id: input.customer.id,
      name: input.customer.name,
      status: input.customer.status,
      description: input.customer.description ?? null,
      customData: input.customer.customData as Json,
      email: input.customer.email,
      createdAt: new Date(input.customer.createdAt).toISOString(), // formatted as string
      updatedAt: input.customer.updatedAt.toString()!,
    },
    created_at: new Date(input.created_at).toISOString(),
    updated_at: new Date(input.updated_at!).toISOString(),
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
  collection_mode: z.enum(schema.collectionMode.enumValues).optional(),
  // origin: z.nativeEnum(TransactionOrigin).array().optional(),
  status: z.enum(schema.transactionStatus.enumValues).array().optional(),

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

export const transactionIdSchema = z.object({
  transaction_id: z.string(),
});

const discountTypes = z.enum(schema.discountType.enumValues);
export function calculateDiscountAmount(
  discount: {
    type: z.infer<typeof discountTypes>;
    amount: number;
    currency_code: string;
    max_recurring_intervals?: number | null;
    usage_limit?: number | null;
  },
  subtotal: number,
  totalQuantity: number
): number {
  const discountAmount = Number(discount.amount);

  if (discount.usage_limit !== null && discount?.usage_limit! <= 0) {
    return 0;
  }

  switch (discount.type) {
    case "percentage":
      if (discountAmount < 0 || discountAmount > 100) {
        throw new HTTPException(400, {
          message: "Percentage discount must be between 0 and 100",
        });
      }
      return (discountAmount / 100) * subtotal;

    case "flat":
      if (discountAmount < 0) {
        throw new HTTPException(400, {
          message: "Flat discount amount cannot be negative",
        });
      }
      // Ensure discount doesn't exceed subtotal
      return Math.min(discountAmount, subtotal);

    case "flat_per_seat":
      if (discountAmount < 0) {
        throw new HTTPException(400, {
          message: "Per-seat discount amount cannot be negative",
        });
      }
      const totalDiscount = discountAmount * totalQuantity;
      // Ensure total discount doesn't exceed subtotal
      return Math.min(totalDiscount, subtotal);

    default:
      throw new HTTPException(400, { message: "Invalid discount type" });
  }
}
