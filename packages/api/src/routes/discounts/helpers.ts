import { DiscountResponseSchema } from "./discounts.routes";
import { z } from "zod";
import { Json, jsonSchema } from "~/lib/utils/zod-helpers";
import { DiscountsModel } from "@repo/db/zod/discounts.ts";

export const transformDiscount = (
  discount: any
): z.infer<typeof DiscountResponseSchema> => ({
  id: discount.id,
  status: discount.status,
  description: discount.description,
  enabled_for_checkout: discount.enabled_for_checkout,
  amount: Number(discount.amount),
  currency_code: discount.currency_code,
  type: discount.type,
  restricted_to: discount.discount_prices.map(
    (dp: { price_id: string }) => dp.price_id
  ),
  recur: discount.recur,
  max_recurring_intervals: discount.max_recurring_intervals
    ? Number(discount.max_recurring_intervals)
    : null,
  usage_limit: discount.usage_limit,
  times_used: discount.times_used,
  expires_at: discount.expires_at,
  custom_data: discount.custom_data as Json,
  created_at: discount.created_at,
  updated_at: discount.updated_at,
});

const BaseDiscountSchema = DiscountsModel.omit({
  projectId: true,
  id: true,
  created_at: true,
  updated_at: true,
  times_used: true,
}).extend({
  amount: z
    .number()
    .min(1, "Amount cannot be negative")
    .refine((val) => Number.isFinite(val), "Amount must be a finite number"),

  expires_at: z
    .date()
    .optional()
    .nullable()
    .refine(
      (date) => !date || date > new Date(),
      "Expiry date cannot be in the past"
    ),

  price_ids: z.array(z.string()).optional(),
  custom_data: jsonSchema.optional().nullable(),
});
export const CreateDiscountSchema = BaseDiscountSchema.strict().refine(
  (data) => !(data.type === "percentage" && data.amount > 100),
  {
    message: "Percentage discount cannot exceed 100%",
    path: ["amount"],
  }
);

export const UpdateDiscountSchema = BaseDiscountSchema.partial()
  .strict()
  .refine(
    (data) => !(data.type === "percentage" && data.amount && data.amount > 100),
    {
      message: "Percentage discount cannot exceed 100%",
      path: ["amount"],
    }
  );
