import { PrismaClient } from "@repo/db/types";
import { Context } from "hono";
import { calculateDiscountAmount } from "./helpers";

export async function calculateTransactionTotals(
  input: any,
  c: Context,
  db: PrismaClient
) {
  // Verify all prices belong to the same project
  const prices = await db.prices.findMany({
    where: {
      id: {
        in: input.items.map(
          (item: { price_id: "string"; amount: number }) => item.price_id
        ),
      },
      projectId: c.get("organization_Id"),
    },
    include: {
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
    const discount = await db.discounts.findFirst({
      where: {
        id: input.discount_id,
        projectId: c.get("organization_Id"),
        status: "active",
      },
    });

    if (!discount) {
      throw new Error("Provided Discount Id Not Found or Inactive");
    }

    // Calculate discount amount based on type
    discountAmount = calculateDiscountAmount(
      discount,
      subtotal,
      input.items.reduce((acc: any, item: { quantity: any; }) => acc + item.quantity, 0)
    );
  }
  const grandTotal = subtotal - discountAmount;
  return {grandTotal, subtotal, discountAmount, prices}
}
