import * as handlers from "./products.handlers";
import * as routes from "./products.routes";
import { CreateRouter } from "~/lib/create-app";

const router = CreateRouter()
  .openapi(routes.list, handlers.list)
  .openapi(routes.create, handlers.create)
  .openapi(routes.get_product, handlers.get_product)
  .openapi(routes.update_product, handlers.update_product)
  .openapi(routes.createProductWithPrices, handlers.createProductsWithPrices);

export default router;
