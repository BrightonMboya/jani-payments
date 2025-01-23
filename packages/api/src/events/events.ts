/**
Events are things that need to happen in the bg while some other process is happening
in our case can be creating an Invoice Pdf when you have received the create transaction body

or send a welcome email when someone signs up,
or syncing up the customer data when they have updated their auth details

not to be confused with cron jobs which runs like every midnight
 */

import { bus } from "sst/aws/bus";
import { TransactionEvent } from "~/routes/transactions/events/event-defintion";
import { UpdateDiscountUsage } from "~/routes/transactions/events/update-discount-times-used";
import { updateSubscriptionDates } from "~/routes/transactions/events/update-subscription-dates";

export const handler = bus.subscriber(
  [TransactionEvent.Created],
  async (event) => {
    // console.log(event.type, event.properties, event.metadata);
    switch (event.type) {
      case "transaction.created": {
        await updateSubscriptionDates(event.properties);
        if (event.properties.discount_id) {
          await UpdateDiscountUsage(event.properties.discount_id);
        }
        // TODO: Finish the fn to create invoices after the transaction is created
      }
    }
  }
);
