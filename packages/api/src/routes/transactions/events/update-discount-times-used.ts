/* 
This event is responsible to increment the discount by 1, given the discount_id

*/

import { db } from "@repo/db";
import * as schema from "@repo/db/db/schema.ts";
import { eq, sql } from "drizzle-orm";

export async function UpdateDiscountUsage(discount_id: string) {
  await db
    .update(schema.Discounts)
    .set({
      times_used: sql`${schema.Discounts.times_used} + 1`,
    })
    .where(eq(schema.Discounts.id, discount_id));
  // await db.discounts.update({
  //   where: {
  //     id: discount_id,
  //   },
  //   data: {
  //     times_used: {
  //       increment: 1,
  //     },
  //   },
  // });
}
