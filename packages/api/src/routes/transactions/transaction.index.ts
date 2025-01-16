import * as routes from "./transaction.routes";
import * as handlers from "./transaction.handlers";
import { CreateRouter } from "~/lib/create-app";

const router = CreateRouter()
  .openapi(routes.list_transaction, handlers.list_transactions)
  .openapi(routes.get_transaction, handlers.get_transaction);

export default router;
