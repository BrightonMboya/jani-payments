/* 
This cron jobs is responsible for perfoming actions of the scheduled changes
it performs the action pasued | cancelled | resume on the subscription scheduled on that particular day
and then marks the scheduled change as completed
*/
import { db } from "@repo/db";
import { DateTime } from "luxon";
import { and, eq, gte, inArray, lt } from "drizzle-orm";
import * as schema from "@repo/db/db/schema.ts";

export async function Subscription_Scheduled_Changes() {
  const now = DateTime.now();
  const startOfToday = now.startOf("day").toJSDate();
  const endOfToday = now.endOf("day").toJSDate();

  const scheduled_changes =
    await db.query.Subscription_Scheduled_Changes.findMany({
      where: and(
        gte(
          schema.Subscription_Scheduled_Changes.effective_at,
          startOfToday.toISOString()
        ),
        lt(
          schema.Subscription_Scheduled_Changes.effective_at,
          endOfToday.toISOString()
        ),
        inArray(schema.Subscription_Scheduled_Changes.status, ["scheduled"])
      ),
    });

  //   perform the scheduled change
  return await db.transaction(async (tx) => {
    for (const change of scheduled_changes) {
      switch (change.action) {
        case "cancel": {
          await tx
            .update(schema.Subscriptions)
            .set({
              status: "cancelled",
              canceled_at: change.effective_at,
            })
            .where(eq(schema.Subscriptions.id, change.subscription_id));
          await tx
            .update(schema.Subscription_Scheduled_Changes)
            .set({ status: "completed" })
            .where(
              eq(
                schema.Subscription_Scheduled_Changes.subscription_id,
                change.subscription_id
              )
            );
          break;
        }
        case "pause": {
          await tx
            .update(schema.Subscriptions)
            .set({
              status: "paused",
              canceled_at: change.effective_at,
            })
            .where(eq(schema.Subscriptions.id, change.subscription_id));
          await tx
            .update(schema.Subscription_Scheduled_Changes)
            .set({ status: "completed" })
            .where(
              eq(
                schema.Subscription_Scheduled_Changes.subscription_id,
                change.subscription_id
              )
            );
        }

        case "resume": {
          await tx
            .update(schema.Subscriptions)
            .set({
              status: "active",
              paused_at: null,
              canceled_at: change.effective_at,
            })
            .where(eq(schema.Subscriptions.id, change.subscription_id));
          await tx
            .update(schema.Subscription_Scheduled_Changes)
            .set({ status: "completed" })
            .where(
              eq(
                schema.Subscription_Scheduled_Changes.subscription_id,
                change.subscription_id
              )
            );
        }
      }
    }
  });
}
