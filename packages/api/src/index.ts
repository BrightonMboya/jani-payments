import CreateAPP from "./lib/create-app";
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

const app = CreateAPP()
  .route("/", products)
  .route("/", prices)
  .route("/", discounts)
  .route("/", customers)
  .route("/", addresses)
  .route("/", subscriptions)
  .route("/", transactions)
  .route("/", keys);

  
configureOpenAPI(app);



// app.get("/", (c) => {
//   return c.text("Hello Hono!");
// });

export type AppType = typeof app;
export default app;
export const handler = handle(app);
export const ts = app.fetch;
