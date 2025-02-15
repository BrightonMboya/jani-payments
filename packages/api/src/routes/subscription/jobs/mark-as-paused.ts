/* 
This cron job is responsible for marking the subscription which ends today as paused 
not to be confused with the trial management
*/

import { DateTime } from "luxon";
import { db } from "~/middleware/with-db";

export async function handler() {
  const today = DateTime.now();
  const startOfToday = today.startOf("day").toJSDate();
  const endOfToday = today.endOf("day").toJSDate();

  const dueSubscriptions = await db.subscriptions.updateMany({
    where: {
      current_period_ends: {
        gte: startOfToday,
        lt: endOfToday,
      },
    },
    data: {
      status: "paused",
    },
  });
}
