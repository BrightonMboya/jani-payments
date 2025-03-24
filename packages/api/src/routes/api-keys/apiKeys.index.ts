import * as routes from "./keys.routes";
import * as handlers from "./keys.handlers";
import { CreateRouter } from "~/lib/create-app";

const router = CreateRouter()
  .openapi(routes.create_keys, handlers.create)
  .openapi(routes.store_azam_credentials, handlers.StoreAzamCredentials)
  .openapi(routes.fetch_azam_credentials, handlers.Fetch_Azam_Credentials);

export default router;
