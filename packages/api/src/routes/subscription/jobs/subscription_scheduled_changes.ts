import { db } from "~/middleware/with-db";
import { DateTime } from "luxon";

export async function SubscriptionScheduledChanges() {
  const now = DateTime.now();
  const startOfToday = now.startOf("day").toJSDate();
  const endOfToday = now.endOf("day").toJSDate();
  const scheduled_changes = await db.subscription_Scheduled_Changes.findMany({
    where: {
      effective_at: {
        gte: startOfToday,
        lt: endOfToday,
      },
      status: "scheduled",
    },
  });

  //   perform the scheduled change
  return await db.$transaction(async (tx) => {
    for (const change of scheduled_changes) {
      switch (change.action) {
        case "cancel": {
          await tx.subscriptions.update({
            where: {
              id: change.subscription_id,
            },
            data: {
              status: "cancelled",
              canceled_at: change.effective_at,
              Subscription_Scheduled_Changes: {
                update: {
                  where: {
                    id: change.id,
                  },
                  data: {
                    status: "completed",
                  },
                },
              },
            },
          });
          break;
        }
        case "pause": {
          await tx.subscriptions.update({
            where: {
              id: change.subscription_id,
            },
            data: {
              status: "paused",
              paused_at: change.effective_at,
              Subscription_Scheduled_Changes: {
                update: {
                  where: {
                    id: change.id,
                  },
                  data: {
                    status: "completed",
                  },
                },
              },
            },
          });
        }

        case "resume": {
          await tx.subscriptions.update({
            where: {
              id: change.subscription_id,
            },
            data: {
              status: "active",
              paused_at: null,
              Subscription_Scheduled_Changes: {
                update: {
                  where: {
                    id: change.id,
                  },
                  data: {
                    status: "completed",
                  },
                },
              },
            },
          });
        }
      }
    }
  });
}
