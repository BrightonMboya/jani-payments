import * as routes from "./keys.routes";
import * as handlers from "./keys.handlers";
import { CreateRouter } from "~/lib/create-app";

const router = CreateRouter().openapi(routes.create_keys, handlers.create);

export default router;
