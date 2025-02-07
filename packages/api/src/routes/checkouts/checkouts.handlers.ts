import { PrismaClient } from "@repo/db/types";
import { type Context } from "hono";
import { APPRouteHandler } from "~/lib/types";
import { CreateCheckout } from "./checkouts.routes";
import { createCheckoutSchema } from "./helpers";
import * as HttpStatusCodes from "~/lib/http-status-code";

export const create: APPRouteHandler<CreateCheckout> = async (c: Context) => {
  const db: PrismaClient = c.get("db");
  const reqInput = await c.req.json();
  const input = createCheckoutSchema.parse(reqInput);
  const checkout = await db.checkouts.create({
    data: {
      customer_id: input.customer_id,
      discount_id: input.discount_id,
      checkoutItems: {
        create: input.items.map((checkoutItem) => ({
          price_id: checkoutItem.price_id,
          quantity: checkoutItem.quantity,
        })),
      },
      project_id: c.get("organization_Id"),
    },
  });

  return c.json(checkout, HttpStatusCodes.OK);
};
