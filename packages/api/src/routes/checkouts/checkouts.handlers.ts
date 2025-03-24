import { type Context } from "hono";
import { APPRouteHandler } from "~/lib/types";
import { CreateCheckout, GetCheckout, ListCheckout } from "./checkouts.routes";
import {
  createCheckoutSchema,
  formatCheckoutSession,
  IFormattedCheckout,
} from "./helpers";
import * as HttpStatusCodes from "~/lib/http-status-code";
import { calculateTransactionTotals } from "../transactions/fns";
import * as schema from "@repo/db/db/schema.ts";
import { db } from "@repo/db";
import { eq, and, inArray } from "drizzle-orm";
import {
  IPaymentMethod,
  IPaymentProviders,
  PaymentMethod,
  PaymentProviders,
} from "@repo/db/types";
import { ErrorSchema } from "~/lib/utils/zod-helpers";
import { z } from "zod";

export const create: APPRouteHandler<CreateCheckout> = async (c: Context) => {
  try {
    const reqInput = await c.req.json();
    const input = createCheckoutSchema.parse(reqInput);

    // Ensure items are provided
    if (!input.items || input.items.length === 0) {
      return c.json(
        {
          error: "No Price Ids found",
          message: "At least one item is required.",
        } satisfies z.infer<typeof ErrorSchema>,
        HttpStatusCodes.BAD_REQUEST
      );
    }

    // Check if the customer already has an active subscription
    const activeSubscription = await db.query.Subscriptions.findFirst({
      where: and(
        eq(schema.Subscriptions.customer_id, input.customer_id),
        eq(schema.Subscriptions.project_id, c.get("organization_Id")),
        inArray(schema.Subscriptions.status, ["active", "trial"])
      ),
    });

    if (activeSubscription) {
      return c.json(
        {
          error: "Active Subscription already present",
          message: "Customer already has an active subscription.",
        } satisfies z.infer<typeof ErrorSchema>,
        HttpStatusCodes.BAD_REQUEST
      );
    }

    // Validate payment method & provider
    if (!PaymentMethod.includes(input.payment_method as IPaymentMethod)) {
      return c.json({
        error: "Invalid Payment Method",
        message: "The configured payment method is not supported",
      } satisfies z.infer<typeof ErrorSchema>);
    }
    if (
      !PaymentProviders.includes(input.payment_provider as IPaymentProviders)
    ) {
      return c.json(
        {
          error: "Invalid Payment Provider",
          message: "The configured payment provider is not supported",
        } satisfies z.infer<typeof ErrorSchema>,
        HttpStatusCodes.BAD_REQUEST
      );
    }

    const { grandTotal, subtotal, discountAmount } =
      await calculateTransactionTotals(input, c);
    const checkout_id = `chk_${crypto.randomUUID()}`;

    const checkout = await db.transaction(async (tx) => {
      const checkoutData: typeof schema.Checkouts.$inferInsert = {
        id: checkout_id,
        customer_id: input.customer_id,
        discount_id: input.discount_id || null,
        discount_ammount: discountAmount.toString(),
        total: subtotal.toString(),
        grand_total: grandTotal.toString(),
        project_id: c.get("organization_Id"),
        created_at: new Date().toISOString(),
        expires_at: new Date(Date.now() + 30 * 60 * 1000), // Expiry in 30 mins
        success_url: input.success_url,
        payment_method: input.payment_method,
        payment_provider: input.payment_provider,
        custom_data: input.custom_data || null,
      };

      await tx.insert(schema.Checkouts).values(checkoutData);

      const checkoutItems = input.items.map((item) => ({
        id: `chkitem_${crypto.randomUUID()}`,
        checkoutId: checkout_id,
        price_id: item.price_id,
        quantity: item.quantity,
      }));

      await tx.insert(schema.CheckoutItems).values(checkoutItems);

      return {
        ...checkoutData,
        items: checkoutItems,
      };
    });
    const formattedCheckout = formatCheckoutSession({
      ...checkout,
      custom_data: checkout.custom_data as any,
    });
    console.log("I have returned the checkout which is formatted", formattedCheckout)
    return c.json(formattedCheckout, HttpStatusCodes.OK);
  } catch (error) {
    console.error("Checkout Creation Error:", error);
    return c.json(
      {
        error: "Failed to create the checkout session",
        message: error?.message,
      } satisfies z.infer<typeof ErrorSchema>,
      400
    );
  }
};

export const get: APPRouteHandler<GetCheckout> = async (c: Context) => {
  const checkout_Id = c.req.param("customer_Id");
  // const organization_Id = c.get("organization_Id");
  const checkout = await db.query.Checkouts.findFirst({
    where: and(
      eq(schema.Checkouts.id, checkout_Id),
      // eq(schema.Checkouts.project_id, organization_Id)
    ),
    with: {
      checkoutItems: true,
    },
  });

  if (!checkout) {
    return c.json(
      {
        error: "Not Found",
        message: "No checkout session found with the specified id",
      } satisfies z.infer<typeof ErrorSchema>,
      HttpStatusCodes.NOT_FOUND
    );
  }
  const formattedCheckout = formatCheckoutSession({
    ...checkout,
    items: checkout.checkoutItems,
    custom_data: checkout.custom_data as any,
  });

  return c.json(formattedCheckout as IFormattedCheckout, HttpStatusCodes.OK);
};

export const list: APPRouteHandler<ListCheckout> = async (c: Context) => {
  const organization_Id = c.get("organization_Id");
  const checkoutSessions = await db.query.Checkouts.findMany({
    where: eq(schema.Checkouts.project_id, organization_Id),
    with: {
      checkoutItems: true,
    },
  });
  const formattedSessions = checkoutSessions.map((session) => {
    formatCheckoutSession({
      ...session,
      items: session.checkoutItems,
      custom_data: session.custom_data as any,
    });
  });

  return c.json(formattedSessions, HttpStatusCodes.OK);
};
