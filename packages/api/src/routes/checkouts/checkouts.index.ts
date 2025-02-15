import { CreateRouter } from "~/lib/create-app";
import * as handlers from "./checkouts.handlers";
import * as routers from "./checkouts.routes";
const router = CreateRouter().openapi(routers.createCheckout, handlers.create);

export default router;
