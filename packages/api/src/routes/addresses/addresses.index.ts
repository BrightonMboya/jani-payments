import { CreateRouter } from "~/lib/create-app";
import * as handlers from "./addresses.handlers";
import * as routes from "./addresses.routes";

export const router = CreateRouter()
  .openapi(routes.list, handlers.list)
  .openapi(routes.create, handlers.create)
  .openapi(routes.get_address, handlers.get_address)
  .openapi(routes.update_address, handlers.update_address);

export default router;
