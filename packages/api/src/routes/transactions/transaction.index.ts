import * as routes from "./transaction.routes";
import * as handlers from "./transaction.handlers";
import { CreateRouter } from "~/lib/create-app";

const router = CreateRouter().openapi(
  routes.list_transaction,
  handlers.list_transactions
);

export default router;
