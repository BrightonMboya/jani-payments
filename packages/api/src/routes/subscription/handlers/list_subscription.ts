import { type Context } from "hono";
import { APPRouteHandler } from "~/lib/types";
import { ListSubscription } from "../subscription.routes";
import { PrismaClient } from "@repo/db/types";
import { transformSubscription } from "../helpers";
import * as HttpStatusCodes from "~/lib/http-status-code";

const list_subscriptions: APPRouteHandler<ListSubscription> = async (
  c: Context
) => {
  const db: PrismaClient = c.get("db");
  const user = c.get("user");
  const project_id = await db.project.findUnique({
    where: {
      slug: user?.user.defaultWorkspace,
    },
    select: {
      id: true,
    },
  });

  const subscriptions = await db.subscriptions.findMany({
    where: {
      project_id: project_id?.id!,
    },
    include: {
      discount: {
        include: {
          discount_prices: true,
        },
      },
      Subscription_Items: {
        include: {
          price: true,
        },
      },
      Subscription_Scheduled_Changes: true,
      BillingDetails: true,
    },
  });

  const transformedSubscriptions = subscriptions.map((x) =>
    transformSubscription(x)
  );

  return c.json(transformedSubscriptions, HttpStatusCodes.OK);
};

export default list_subscriptions;
