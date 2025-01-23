import { defineEvent } from "~/events/utils";
import { z } from "zod";
import { Context } from "hono";

export const TransactionEvent = {
  Created: defineEvent(
    "transaction.created",
    z.object({
      subscription_id: z.string(),
      is_first_payment: z.boolean(),
      discount_id: z.string().nullish().optional(),
      c: z.custom<Context>(),
    })
  ),
};
