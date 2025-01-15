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
import { handle } from "hono/aws-lambda";

const app = CreateAPP();
configureOpenAPI(app);

const routes = [
  products,
  prices,
  discounts,
  customers,
  addresses,
  subscriptions,
  keys,
  transactions,
] as const;

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

routes.forEach((route) => {
  app.route("/", route);
});

export type AppType = (typeof routes)[number];
export default app;
export const handler = handle(app);
export const ts = app.fetch;
