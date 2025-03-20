import CreateAPP from "./lib/create-app";
import products from "./routes/products/products.index";
import prices from "./routes/prices/prices.index";
import customers from "./routes/customers/customers.index";
import discounts from "./routes/discounts/discounts.index";
import configureOpenAPI from "./lib/configure-open-api";
import addresses from "./routes/addresses/addresses.index";
import subscriptions from "./routes/subscription/subscription.index";
import apiKeys from "./routes/api-keys/apiKeys.index";
import transactions from "./routes/transactions/transaction.index";
import checkout from "./routes/checkouts/checkouts.index";
import { handle } from "hono/aws-lambda";

const app = CreateAPP();

const routes = [
  products,
  prices,
  customers,
  discounts,
  addresses,
  checkout,
  subscriptions,
  transactions,
  apiKeys,
] as const;

configureOpenAPI(app);

routes.forEach((route) => {
  app.route("/", route);
});

app.post("/webhook", async (c) => {
  try {
    const body = await c.req.json();
    console.log("Webhook received:", body);

    // Validate the request (implement HMAC signature verification if needed)
    const isValid = true; // Implement validation logic
    if (!isValid) {
      return c.json({ error: "Invalid signature" }, 400);
    }

    // Process the payment event
    if (body.event === "payment.success") {
      // Handle successful payment logic
      console.log("Payment successful for", body.data);
    } else if (body.event === "payment.failed") {
      // Handle failed payment logic
      console.log("Payment failed for", body.data);
    }

    return c.json({ message: "Webhook received successfully" }, 200);
  } catch (error) {
    console.error("Error processing webhook:", error);
    return c.json({ error: "Internal Server Error" }, 500);
  }
});

app.get("/webhook", async (c) => {
  console.log("Received sth", c);
  return c.json({ message: "Webhook received successfully" }, 200);
});

export type AppType = (typeof routes)[number];
export default app;

export const handler = handle(app);
export const ts = app.fetch;
