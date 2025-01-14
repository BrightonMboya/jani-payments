import * as handlers from "./subscription.handlers";
import * as routes from "./subscription.routes";
import { CreateRouter } from "~/lib/create-app";

const router = CreateRouter()
  .openapi(routes.create_subscription, handlers.create_subscription)
  .openapi(routes.list_subscriptions, handlers.list_subscriptions)
  .openapi(routes.cancel_subscription, handlers.cancel_subscription)
  .openapi(routes.pause_subscription, handlers.pause_subscription)
  .openapi(routes.resume_subscription, handlers.resume_subscription)
  .openapi(routes.activate_subscription, handlers.activate_subscription)
  .openapi(routes.update_subscription, handlers.update_subscription);

export default router;
