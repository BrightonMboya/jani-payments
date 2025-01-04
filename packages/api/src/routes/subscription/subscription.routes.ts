import { createRoute, z } from "@hono/zod-openapi";
import * as HttpsStatusCodes from "~/lib/http-status-code";
import jsonContent from "~/lib/json-content";
import { SubscriptionsModel } from "@repo/db/zod/subscriptions.ts";
const tags = ["subscription"];

export const create_subscription = createRoute({
  path: "/subscription",
  method: "post",
  tags,
  responses: {
    [HttpsStatusCodes.CREATED]: jsonContent(
      SubscriptionsModel,
      "Creates a Subscription"
    ),
  },
});

export type CreateSubscription = typeof create_subscription;
