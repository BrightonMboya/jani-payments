/* 
This cron job is responsible for marking the subscription which ends today as paused 
not to be confused with the trial management
*/

import { DateTime } from "luxon";
import { db } from "@repo/db";
import * as schema from "@repo/db/db/schema.ts";
import { gte, and, lt } from "drizzle-orm";

export async function MarkAsPaused() {
  const today = DateTime.now();
  const startOfToday = today.startOf("day").toJSDate();
  const endOfToday = today.endOf("day").toJSDate();

  const dueSubscriptions = await db
    .update(schema.Subscriptions)
    .set({
      status: "paused",
    })
    .where(
      and(
        gte(
          schema.Subscriptions.current_period_ends,
          startOfToday.toISOString()
        ),
        lt(schema.Subscriptions.current_period_ends, endOfToday.toISOString())
      )
    );
}
