import * as routes from "./prices.routes";
import * as handlers from "./prices.handlers";
import { CreateRouter } from "~/lib/create-app";

const router = CreateRouter()
  .openapi(routes.list, handlers.list)
  .openapi(routes.create_prices, handlers.create)
  .openapi(routes.get_price, handlers.get_price)
  .openapi(routes.update_price, handlers.update_price);

export default router;
