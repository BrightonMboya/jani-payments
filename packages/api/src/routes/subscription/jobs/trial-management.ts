/* 
This cron job is responsible to manage the trial period for subscription items
these are the items that the customer is subscibing to

If the `trial_ended_at` date is the same as today it marks the item status as active
*/
import { db } from "@repo/db";
import { DateTime } from "luxon";
import { and, gte, lt } from "drizzle-orm";
import * as schema from "@repo/db/db/schema.ts";

export async function TrialManagement() {
  const today = DateTime.now();
  const startOfToday = today.startOf("day").toJSDate();
  const endOfToday = today.endOf("day").toJSDate();

  await db
    .update(schema.SubscriptionItems)
    .set({
      status: "active",
    })
    .where(
      and(
        gte(
          schema.SubscriptionItems.trial_ended_at,
          startOfToday.toISOString()
        ),
        lt(schema.SubscriptionItems, endOfToday.toISOString())
      )
    );
}
