/* 
This job is responsible for marking the expired discounts as expired
*/

import { db } from "@repo/db";
import { DateTime } from "luxon";
import * as schema from "@repo/db/db/schema.ts";
import { gte, and, lt } from "drizzle-orm";

export async function handler() {
  const now = DateTime.now();
  const startOfToday = now.startOf("day").toJSDate();
  const endOfToday = now.endOf("day").toJSDate();

  await db.transaction(async (tx) => {
    await tx
      .update(schema.Discounts)
      .set({
        status: "archived",
      })
      .where(
        and(
          gte(schema.Discounts.expires_at, startOfToday.toISOString()),
          lt(schema.Discounts.expires_at, endOfToday.toISOString())
        )
      );
  });

  // await db.discounts.updateMany({
  //   where: {
  //     expires_at: {
  //       gte: startOfToday,
  //       lt: endOfToday,
  //     },
  //   },
  //   data: {
  //     status: "archived",
  //   },
  // });
}
