import { CreateRouter } from "~/lib/create-app";
import * as handlers from "./checkouts.handlers";
import * as routers from "./checkouts.routes";
const router = CreateRouter()
  .openapi(routers.createCheckout, handlers.create)
  .openapi(routers.getCheckoutSession, handlers.get)
  .openapi(routers.listCheckoutSessions, handlers.list);

export default router;
