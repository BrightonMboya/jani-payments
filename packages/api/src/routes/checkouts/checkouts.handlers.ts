import { type Context } from "hono";
import { APPRouteHandler } from "~/lib/types";
import { CreateCheckout } from "./checkouts.routes";
import { createCheckoutSchema } from "./helpers";
import * as HttpStatusCodes from "~/lib/http-status-code";
import { calculateTransactionTotals } from "../transactions/fns";
import * as schema from "@repo/db/db/schema.ts";
import { db } from "@repo/db";
import {eq} from "drizzle-orm"


export const create: APPRouteHandler<CreateCheckout> = async (c: Context) => {
  const reqInput = await c.req.json();
  const input = createCheckoutSchema.parse(reqInput);
  const { grandTotal, subtotal, discountAmount } =
    await calculateTransactionTotals(input.items, c, db);
  const checkout_id = `chk_${crypto.randomUUID()}`;
  const checkout = await db.transaction(async (tx) => {
    // insert into the main checkout table
    await tx.insert(schema.Checkouts).values({
      id: checkout_id,
      customer_id: input.customer_id,
      discount_id: input.discount_id,
      discount_ammount: discountAmount,
      total: subtotal,
      grand_total: grandTotal,
      project_id: c.get("organization_Id"),
    });

    // then insert into checkout items
    const checkoutItems = input.items.map((item) => ({
      id: `chkitem_${crypto.randomUUID()}`,
      checkoutId: checkout_id,
      price_id: item.price_id,
      quantity: item.quantity,
    })) || []
  
    await tx.insert(schema.CheckoutItems).values(checkoutItems);

    const checkoutWithItems = await tx
      .select()
      .from(schema.Checkouts)
      .leftJoin(schema.CheckoutItems, eq(schema.CheckoutItems.checkoutId, schema.Checkouts.id))
      .where(eq(schema.Checkouts.id, checkout_id));

    return checkoutWithItems;
  });
  // const checkouts = await db.$transaction(async (tx) => {
  //   return await tx.checkouts.create({
  //     data: {
  //       id: checkout_id,
  //       customer_id: input.customer_id,
  //       discount_id: input.discount_id,
  //       discount_ammount: discountAmount,
  //       total: subtotal,
  //       grand_total: grandTotal,
  //       project_id: c.get("organization_Id"),
  //       checkoutItems: {
  //         create: input.items.map((checkoutItem) => ({
  //           price_id: checkoutItem.price_id,
  //           quantity: checkoutItem.quantity,
  //         })),
  //       },
  //     },
  //     include: {
  //       checkoutItems: true,
  //     },
  //   });
  // });
  return c.json(
    checkout,
    // {
    //   // ...checkout,
    //   id: checkout.id,
    //   customer_id: checkout.customer_id,
    //   discount_id: checkout.discount_id!,
    //   total: Number(checkout.total),
    //   grandTotal: Number(checkout.grand_total),
    //   discount_amount: Number(checkout.discount_ammount),
    //   items: checkout.checkoutItems,
    // },
    HttpStatusCodes.OK
  );
};
