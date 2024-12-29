import * as routes from "./discounts.routes";
import * as handlers from "./discounts.handlers";
import { CreateRouter } from "~/lib/create-app";

const router = CreateRouter()
  .openapi(routes.list_discounts, handlers.list)
  .openapi(routes.create_discount, handlers.create);

export default router;
