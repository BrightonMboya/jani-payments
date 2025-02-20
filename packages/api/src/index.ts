import CreateAPP from "~/lib/create-app";
import products from "./routes/products/products.index";
import prices from "./routes/prices/prices.index";
import customers from "./routes/customers/customers.index";
import discounts from "./routes/discounts/discounts.index";
import configureOpenAPI from "./lib/configure-open-api";
import addresses from "./routes/addresses/addresses.index";
// import subscriptions from "./routes/subscription/subscription.index";
import keys from "./routes/api-keys/keys.index";
// import transactions from "./routes/transactions/transaction.index";
// import checkout from "./routes/checkouts/checkouts.index";
import { handle } from "hono/aws-lambda";
import { Context } from "hono";
import { generateInvoice } from "./routes/transactions/events/create-invoice";
import * as schema from "@repo/db/db/schema.ts";
import { db } from "@repo/db";
import { sql, eq, and, inArray } from "drizzle-orm";

const app = CreateAPP();
configureOpenAPI(app);

const routes = [
  products,
  prices,
  discounts,
  customers,
  addresses,
  // subscriptions,
  // transactions,
  keys,
  // checkout,
] as const;

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/test", async (c) => {
 const subscription = await db
   .select({
     // Main subscription fields
     id: schema.Subscriptions.id,
     project_id: schema.Subscriptions.project_id,
     customer_id: schema.Subscriptions.customer_id,
     status: schema.Subscriptions.status,
     createdAt: schema.Subscriptions.createdAt,
     updatedAt: schema.Subscriptions.updatedAt,
     // Billing details as an object
     billingDetails: sql<string>`jsonb_build_object(
      'id', ${schema.BillingDetails.id},
      'paymentInterval', ${schema.BillingDetails.paymentInterval},
      'paymentFrequency', ${schema.BillingDetails.paymentFrequency},
      'enableCheckout', ${schema.BillingDetails.enableCheckout},
      'purchaseOrderNumber', ${schema.BillingDetails.purchaseOrderNumber},
      'additionalInformation', ${schema.BillingDetails.additionalInformation}
    )`,
     // Scheduled changes as an array
     scheduledChanges: sql<string>`COALESCE(jsonb_agg(
      jsonb_build_object(
        'id', ${schema.Subscription_Scheduled_Changes.id},
        'action', ${schema.Subscription_Scheduled_Changes.action},
        'effectiveAt', ${schema.Subscription_Scheduled_Changes.effectiveAt},
        'resumesAt', ${schema.Subscription_Scheduled_Changes.resumesAt},
        'status', ${schema.Subscription_Scheduled_Changes.status}
      ) ORDER BY ${schema.Subscription_Scheduled_Changes.effectiveAt}
    ) FILTER (WHERE ${schema.Subscription_Scheduled_Changes.id} IS NOT NULL), '[]')`,
     // Discount as an object
     discount: sql<string>`jsonb_build_object(
      'id', ${schema.Discounts.id},
      'status', ${schema.Discounts.status},
      'amount', ${schema.Discounts.amount},
      'type', ${schema.Discounts.type}
    )`,
     // Subscription items with prices as an array
     subscriptionItems: sql<string>`COALESCE(jsonb_agg(
      jsonb_build_object(
        'id', ${schema.SubscriptionItems.id},
        'quantity', ${schema.SubscriptionItems.quantity},
        'status', ${schema.SubscriptionItems.status},
        'price', jsonb_build_object(
          'id', ${schema.Prices.id},
          'name', ${schema.Prices.name},
          'description', ${schema.Prices.description},
          'amount', ${schema.Prices.amount}
        )
      ) ORDER BY ${schema.SubscriptionItems.createdAt}
    ) FILTER (WHERE ${schema.SubscriptionItems.id} IS NOT NULL), '[]')`,
   })
   .from(schema.Subscriptions)
   .leftJoin(
     schema.BillingDetails,
     eq(schema.BillingDetails.subscription_id, schema.Subscriptions.id)
   )
   .leftJoin(
     schema.Subscription_Scheduled_Changes,
     and(
       eq(
         schema.Subscription_Scheduled_Changes.subscription_id,
         schema.Subscriptions.id
       ),
       inArray(schema.Subscription_Scheduled_Changes.action, [
         "pause",
         "cancel",
       ])
     )
   )
   .leftJoin(
     schema.Discounts,
     eq(schema.Discounts.id, schema.Subscriptions.discount_id)
   )
   .leftJoin(
     schema.DiscountPrices,
     eq(schema.DiscountPrices.discount_id, schema.Discounts.id)
   )
   .leftJoin(
     schema.SubscriptionItems,
     eq(schema.SubscriptionItems.subscription_id, schema.Subscriptions.id)
   )
   .leftJoin(
     schema.Prices,
     eq(schema.Prices.id, schema.SubscriptionItems.price_id)
   )
   .where(
     and(
       eq(schema.Subscriptions.id, "sub_09c027da-1cf9-467a-a89c-e5accb4c6d8d"),
       eq(schema.Subscriptions.project_id, "cm5m78h5a00011vectwxh5dcx")
     )
   )
   .groupBy(
     schema.Subscriptions.id,
     schema.BillingDetails.id,
     schema.Discounts.id
   );

  return c.json(subscription);
});

routes.forEach((route) => {
  app.route("/", route);
});

// app.get("/test", async (c: Context) => {
//   return generateInvoice(c);
//   // const changes = await SubscriptionScheduledChanges()
//   // return c.json(changes)
//   // const tests = await db.transactions.findMany()
//   // return c.json(tests)
// });

// app.get("/test", testRoute)

export type AppType = (typeof routes)[number];
export default app;
export const handler = handle(app);
export const ts = app.fetch;
