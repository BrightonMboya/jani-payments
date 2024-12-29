import CreateAPP from "~/lib/create-app";
import products from "./routes/products/products.index";
import prices from "./routes/prices/prices.index"
import configureOpenAPI from "./lib/configure-open-api";

const app = CreateAPP();
configureOpenAPI(app);

const routes = [products, prices] as const;
routes.forEach((route) => {

  app.route("/", route);
});

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
