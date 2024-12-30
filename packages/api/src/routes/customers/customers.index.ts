import * as handlers from "./customers.handlers";
import * as routes from "./customers.routes";
import { CreateRouter } from "~/lib/create-app";

const route = CreateRouter()
  .openapi(routes.list, handlers.list)
  .openapi(routes.create, handlers.create)
  .openapi(routes.get_customer, handlers.get_customer)
  .openapi(routes.update_customer, handlers.update_customer);

export default route;
