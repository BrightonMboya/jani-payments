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
import checkout from "./routes/checkouts/checkouts.index"
import { handle } from "hono/aws-lambda";
import { Context } from "hono";
import {

  generateInvoice,

} from "./routes/transactions/events/create-invoice";




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
  // checkout
] as const;

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

routes.forEach((route) => {
  app.route("/", route);
});

app.get("/test", async (c: Context) => {
  return generateInvoice(c)
  // const changes = await SubscriptionScheduledChanges()
  // return c.json(changes)
  // const tests = await db.transactions.findMany()
  // return c.json(tests)
});

// app.get("/test", testRoute)

export type AppType = (typeof routes)[number];
export default app;
export const handler = handle(app);
export const ts = app.fetch;
