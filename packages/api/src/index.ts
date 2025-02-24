import CreateAPP from "~/lib/create-app";
import products from "./routes/products/products.index";
import prices from "./routes/prices/prices.index";
import customers from "./routes/customers/customers.index";
import discounts from "./routes/discounts/discounts.index";
import configureOpenAPI from "./lib/configure-open-api";
import addresses from "./routes/addresses/addresses.index";
import subscriptions from "./routes/subscription/subscription.index";
import keys from "./routes/api-keys/keys.index";
import transactions from "./routes/transactions/transaction.index";
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
  subscriptions,
  transactions,
  keys,
  // checkout,
] as const;

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/test", async (c) => {
  const subscription = await db.query.Subscriptions.findFirst({
    where: eq(
      schema.Subscriptions.id,
      "sub_09c027da-1cf9-467a-a89c-e5accb4c6d8d"
    ),
    with: {
      BillingDetails: true,
      discount: {
        with: {
          discount_prices: true,
        },
      },
      Subscription_Items: {
        with: {
          price: true,
        },
      },
      Subscription_Scheduled_Changes: {
        where: inArray(schema.Subscription_Scheduled_Changes.action, [
          "pause",
          "cancel",
        ]),
      },
    },
  });

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
