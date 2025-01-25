/* 
This job is responsible for marking the expired discounts as expired
*/

import { db } from "~/middleware/with-db";
import { DateTime } from "luxon";

export async function handler() {
  const now = DateTime.now();
  const startOfToday = now.startOf("day").toJSDate();
  const endOfToday = now.endOf("day").toJSDate();

  await db.discounts.updateMany({
    where: {
      expires_at: {
        gte: startOfToday,
        lt: endOfToday,
      },
    },
    data: {
      status: "archived",
    },
  });
}
