import { defineEvent } from "~/events/utils";
import { z } from "zod";
import { Context } from "hono";

export const TransactionEvent = {
  Created: defineEvent(
    "transaction.created",
    z.object({
      subscription_id: z.string(),
      is_first_payment: z.boolean(),
      c: z.custom<Context>(),
    })
  ),
};
