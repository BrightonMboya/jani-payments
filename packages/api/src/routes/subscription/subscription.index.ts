import * as handlers from "./subscription.handlers";
import * as routes from "./subscription.routes";
import { CreateRouter } from "~/lib/create-app";

const router = CreateRouter()
  .openapi(routes.create_subscription, handlers.create_subscription)
  .openapi(routes.list_subscriptions, handlers.list_subscriptions)
  // .openapi(routes.get_subscription, handlers.get_subscription)
  .openapi(routes.cancel_subscription, handlers.cancel_subscription)
  .openapi(routes.pause_subscription, handlers.pause_subscription)
  .openapi(routes.resume_subscription, handlers.resume_subscription);

export default router;
