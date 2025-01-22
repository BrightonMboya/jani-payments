/**
 * this event is responsible for updating the subscription dates when the merchant
 * has received the money from the customer hence calling the `create-transaction` endpoint
 */


import { Context } from "hono";
import { DateTime } from "luxon";
import { db } from "~/middleware/with-db";

interface UpdateSubscriptionDatesProps {
  subscription_id: string;
  is_first_payment: boolean;
  billing_offset_days?: number; // how many days before period end to bill
  c: Context;
}

export async function updateSubscriptionDates({
  subscription_id,
  is_first_payment,
  billing_offset_days = 7, // default to billing 7 days before period end
  c,
}: UpdateSubscriptionDatesProps) {
  // First fetch the subscription to get billing cycle details

  const subscription = await db.subscriptions.findUnique({
    where: { id: subscription_id },
    include: {
      BillingDetails: true,
      //   Subscription_Scheduled_Changes: {
      //     where: {
      //       action: {
      //         in: ["pause", "resume", "cancel"],
      //       },
      //     },
      //   },
      //   discount: {
      //     include: {
      //       discount_prices: true,
      //     },
      //   },
      //   Subscription_Items: {
      //     include: {
      //       price: true,
      //     },
      //   },
    },
  });
  if (!subscription) {
    throw new Error(`Subscription not found: ${subscription_id}`);
  }

  const today = DateTime.now();

  if (is_first_payment) {
    // For first payment, start period from today
    const periodEnd = today.plus({
      [subscription.billing_cycle_interval]:
        subscription.billing_cycle_frequency,
    });

    const nextBillingDate = periodEnd.plus({ days: 1});

    await db.subscriptions.update({
      where: {
        id: subscription_id,
      },
      data: {
        first_billed_at: today.toJSDate(),
        current_period_starts: today.toJSDate(),
        current_period_ends: periodEnd.toJSDate(),
        next_billed_at: nextBillingDate.toJSDate(),
      },
    });
  } else {
    // For subsequent payments:
    // 1. Use the current period end as the new period start
    // 2. Calculate new period end from there
    const currentPeriodEnd = DateTime.fromJSDate(
      subscription.current_period_ends!
    );
    const newPeriodEnd = currentPeriodEnd.plus({
      [subscription.billing_cycle_interval]:
        subscription.billing_cycle_frequency,
    });

    const nextBillingDate = newPeriodEnd.minus({ days: billing_offset_days });

    return await db.subscriptions.update({
      where: {
        id: subscription_id,
      },
      data: {
        current_period_starts: currentPeriodEnd.toJSDate(),
        current_period_ends: newPeriodEnd.toJSDate(),
        next_billed_at: nextBillingDate.toJSDate(),
      },
    });
  }

}
