import {
  CollectionMode,
  PaymentMethod,
  PaymentProvider,
  PaymentStatus,
  TransactionStatus,
  Discount_type
} from "@repo/db/types";
import { z } from "zod";
import { jsonSchema } from "~/lib/utils/zod-helpers";
import { type Prisma } from "@repo/db/types";
import { PricesResponseSchema, transformPrices } from "../prices/helpers";
import { CustomersResponseSchema } from "../customers/helpers";
import { AddressResponseSchema } from "../addresses/addresses.routes";
import { DiscountResponseSchema } from "../discounts/discounts.routes";
import { transformDiscount } from "../discounts/helpers";
import { ProductsResponseSchema } from "../products/helpers";
import { HTTPException } from "hono/http-exception";

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
    TransactionPayment: true;
  };
}>;

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
  payment_method: z.nativeEnum(PaymentMethod),
  payment_provider: z.nativeEnum(PaymentProvider),
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
  status: z.nativeEnum(PaymentStatus),
  // amount: z.number(),
  payment_method: z.nativeEnum(PaymentMethod),
  provider: z.nativeEnum(PaymentProvider),
  created_at: z.date(),
  updated_at: z.date().nullish(),
  provider_reference: z.string().nullable(),
  provider_metadata: jsonSchema.nullable(),
  method_details: z.discriminatedUnion("payment_method", [
    z.object({
      payment_method: z.literal(PaymentMethod.MOBILE_MONEY),
      details: mobileMoneyDetailsSchema,
    }),
    z.object({
      payment_method: z.literal(PaymentMethod.CARD),
      details: cardDetailsSchema,
    }),
    z.object({
      payment_method: z.literal(PaymentMethod.BANK_TRANSFER),
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
  status: z.nativeEnum(TransactionStatus),
  customer_id: z.string(),
  address_id: z.string(),
  //   product_id: z.string(),
  currency_code: z.string(),

  //payment details
  payment_details: PaymentDetailsSchema,

  // optional fields
  subscription_id: z.string().nullish(),
  discount_id: z.string().nullish(),
  collection_mode: z.nativeEnum(CollectionMode).nullish(),
  custom_data: jsonSchema.nullish(),
  current_billing_period: z
    .object({
      starts_at: z.date(),
      ends_at: z.date(),
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
    created_at: z.date(),
    updated_at: z.date().nullish(),
    customer: CustomersResponseSchema,
    address: AddressResponseSchema,
    discount: DiscountResponseSchema.nullish(),
    invoice_id: z.string(),
  });

// helper fn to transform payment data
function transformPayment(payment: Transaction["TransactionPayment"]) {
  if (!payment) {
    throw new Error("Payment data is required");
  }
  const methodDetails = getPaymentMethodDetails(payment);
  return {
    id: payment?.id!,
    status: payment?.status as PaymentStatus,
    amount: Number(payment?.amount),
    currency_code: payment?.currency_code,
    payment_method: payment?.payment_method,
    provider: payment?.payment_provider,
    created_at: payment?.created_at,
    updated_at: payment?.updated_at,
    error_message: payment?.error_message,
    provider_reference: payment?.provider_reference,
    provider_metadata: payment?.provider_metadata as any,
    method_details: methodDetails,
  };
}

function getPaymentMethodDetails(
  payment: NonNullable<Transaction["TransactionPayment"]>
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
    custom_data: input.custom_data as any,
    invoice_id: input.invoice_id,
    current_billing_period: {
      starts_at: input.current_period_starts!,
      ends_at: input.current_period_ends!,
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
    //
    payments: transformPayment(input.TransactionPayment),
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

export const GetTransactionInclude = {
  transactionItems: {
    select: {
      price: {
        include: {
          Products: {
            omit: {
              project_id: true,
            },
          },
        },
      },
      // price_id: true;
      quantity: true,
    },
  },
  // price: true,
  address: true,
  discount: {
    omit: {
      projectId: true,
    },
    include: {
      discount_prices: {
        select: {
          price_id: true,
        },
      },
    },
  },
  customer: true,
  TransactionPayment: true,
};

export const transactionIdSchema = z.object({
  transaction_id: z.string(),
});


export function calculateDiscountAmount(
  discount: {
    type: Discount_type,
    amount: Prisma.Decimal;
    currency_code: string;
    max_recurring_intervals?: Prisma.Decimal | null;
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