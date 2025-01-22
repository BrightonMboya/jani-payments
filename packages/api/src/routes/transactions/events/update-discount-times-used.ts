/* 
This event is responsible to increment the discount by 1, given the discount_id

*/

import { db } from "~/middleware/with-db";

export async function UpdateDiscountUsage(discount_id: string) {
  await db.discounts.update({
    where: {
      id: discount_id,
    },
    data: {
      times_used: {
        increment: 1,
      },
    },
  });
}
