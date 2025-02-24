import { Context } from "hono";
import { calculateDiscountAmount } from "./helpers";
import { db } from "@repo/db";
import * as schema from "@repo/db/db/schema.ts";
import { and, eq, inArray } from "drizzle-orm";

export async function calculateTransactionTotals(input: any, c: Context) {
  // Verify all prices belong to the same project

  // Extract price IDs
  const priceIds = input.items.map(
    (item: { price_id: string; amount: number }) => item.price_id
  );
  const prices = await db.query.Prices.findMany({
    where: and(
      eq(schema.Prices.projectId, c.get("organization_Id")),
      inArray(schema.Prices.id, priceIds)
    ),
    with: {
      // do u need the whole products?
      Products: true,
    },
  });

  if (prices.length !== input.items.length) {
    throw new Error(
      "One or more prices not found or don't belong to this project"
    );
  }

  // calculate totals
  const subtotal = input.items.reduce(
    (acc: number, item: { price_id: string; quantity: number }) => {
      const price = prices.find((p) => p.id === item.price_id);
      if (!price) throw new Error("Price not found");
      return acc + Number(price.amount) * item.quantity;
    },
    0
  );

  // 3. Handle discount if provided
  let discountAmount = 0;
  if (input.discount_id) {
    const discount = await db.query.Discounts.findFirst({
      where: and(
        eq(schema.Discounts.id, input.discount.id),
        eq(schema.Discounts.projectId, c.get("organization_Id")),
        inArray(schema.Discounts.status, ["active"])
      ),
    });

    if (!discount) {
      throw new Error("Provided Discount Id Not Found or Inactive");
    }

    // Calculate discount amount based on type
    discountAmount = calculateDiscountAmount(
      {
        ...discount,
        amount: Number(discount.amount),
        max_recurring_intervals: discount.max_recurring_intervals ? Number(discount.max_recurring_intervals) : null,
      },
      subtotal,
      input.items.reduce(
        (acc: any, item: { quantity: any }) => acc + item.quantity,
        0
      )
    );
  }
  const grandTotal = subtotal - discountAmount;
  return { grandTotal, subtotal, discountAmount, prices };
}
