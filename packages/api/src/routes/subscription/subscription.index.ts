import * as handlers from "./subscription.handlers";
import * as routes from "./subscription.routes";
import { CreateRouter } from "~/lib/create-app";

const router = CreateRouter()
  .openapi(routes.create_subscription, handlers.create_subscription)
  .openapi(routes.list_subscriptions, handlers.list_subscriptions)
  .openapi(routes.get_subscription, handlers.get_subscription);

export default router;
