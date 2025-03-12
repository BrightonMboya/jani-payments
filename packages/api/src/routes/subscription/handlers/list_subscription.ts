import { type Context } from "hono";
import { APPRouteHandler } from "~/lib/types";
import { ListSubscription } from "../subscription.routes";
import { transformSubscription } from "../helpers";
import * as HttpStatusCodes from "~/lib/http-status-code";
import * as schema from "@repo/db/db/schema.ts";
import { db } from "@repo/db";
import { eq, inArray, and } from "drizzle-orm";

const list_subscriptions: APPRouteHandler<ListSubscription> = async (
  c: Context
) => {
  const customer_id = c.req.query("customer_Id");
  const whereConditions = [
    eq(schema.Subscriptions.project_id, c.get("organization_Id")),
  ];
  if (customer_id) {
    whereConditions.push(eq(schema.Subscriptions.customer_id, customer_id));
  }
  const subscriptions = await db.query.Subscriptions.findMany({
    where: and(...whereConditions),
    with: {
      BillingDetails: true,
      discount: {
        with: {
          discount_prices: true,
        },
      },
      Subscription_Items: {
        with: {
          price: true,
        },
      },
      Subscription_Scheduled_Changes: {
        where: inArray(schema.Subscription_Scheduled_Changes.action, [
          "pause",
          "cancel",
        ]),
      },
    },
  });

  const transformedSubscriptions = subscriptions.map((x) =>
    transformSubscription(x)
  );

  return c.json(transformedSubscriptions, HttpStatusCodes.OK);
};

export default list_subscriptions;
