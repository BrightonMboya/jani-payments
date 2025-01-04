import * as handlers from "./subscription.handlers";
import * as routes from "./subscription.routes";
import { CreateRouter } from "~/lib/create-app";

const router = CreateRouter().openapi(
  routes.create_subscription,
  handlers.create_subscription
);


export default router;