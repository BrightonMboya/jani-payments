import { PrismaClient } from "@repo/db/types";
import { type Context } from "hono";
import { APPRouteHandler } from "~/lib/types";
import { CreateCheckout } from "./checkouts.routes";
import { createCheckoutSchema } from "./helpers";
import * as HttpStatusCodes from "~/lib/http-status-code";
import { calculateTransactionTotals } from "../transactions/fns";

export const create: APPRouteHandler<CreateCheckout> = async (c: Context) => {
  const db: PrismaClient = c.get("db");
  const reqInput = await c.req.json();
  const input = createCheckoutSchema.parse(reqInput);
  const {grandTotal, subtotal, discountAmount} = await calculateTransactionTotals(input.items, c, db);
  const checkout_id = `chk_${crypto.randomUUID()}`;
  const checkout = await db.$transaction(async (tx) => {
    return await tx.checkouts.create({
      data: {
        id: checkout_id,
        customer_id: input.customer_id,
        discount_id: input.discount_id,
        discount_ammount: discountAmount,
        total: subtotal,
        grand_total: grandTotal,
        project_id: c.get("organization_Id"),
        checkoutItems: {
          create: input.items.map((checkoutItem) => ({
            price_id: checkoutItem.price_id,
            quantity: checkoutItem.quantity,
          })),
        },
      },
      include: {
        checkoutItems: true
      }
    });
  });
  return c.json({
    // ...checkout,
    id: checkout.id,
    customer_id: checkout.customer_id,
    discount_id: checkout.discount_id!,
    total: Number(checkout.total),
    grandTotal: Number(checkout.grand_total),
    discount_amount: Number(checkout.discount_ammount),
    items: checkout.checkoutItems
  }, HttpStatusCodes.OK);
};
