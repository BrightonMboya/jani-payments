/* 
This cron job is responsible to manage the trial period for subscription items
these are the items that the customer is subscibing to

If the `trial_ended_at` date is the same as today it marks the item status as active
*/
import { db } from "~/middleware/with-db";
import { DateTime } from "luxon";

export async function TrialManagement() {
  const today = DateTime.now();
  const startOfToday = today.startOf("day").toJSDate();
  const endOfToday = today.endOf("day").toJSDate();

  await db.subscriptionItems.updateMany({
    where: {
      trial_ended_at: {
        gte: startOfToday,
        lt: endOfToday,
      },
    },
    data: {
      status: "active",
    },
  });
}
