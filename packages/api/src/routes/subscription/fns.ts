import { BillingInterval } from "@repo/db/types";
import { DateTime } from "luxon";


export function calculateSubscriptionDates(
  prices: Array<{
    trial_period_interval: BillingInterval;
    trial_period_frequency: number;
    billing_cycle_interval: BillingInterval;
    billing_cycle_frequency: number;
  }>
) {
  // Always start from now
  const start = DateTime.now();

  // Calculate trial end dates for each price
  const trialEndDates = prices.map((price) => {
    const { trial_period_interval, trial_period_frequency } = price;

    switch (trial_period_interval) {
      case "day":
        return start.plus({ days: trial_period_frequency });
      case "week":
        return start.plus({ weeks: trial_period_frequency });
      case "month":
        return start.plus({ months: trial_period_frequency });
      case "year":
        return start.plus({ years: trial_period_frequency });
      default:
        throw new Error(`Invalid trial interval: ${trial_period_interval}`);
    }
  });

  // Get the latest trial end date
  const trialEndsAt = DateTime.max(...trialEndDates);

  // Calculate next billing date based on billing cycle
  const nextBillingDate = (() => {
    const { billing_cycle_interval, billing_cycle_frequency } = prices[0];

    switch (billing_cycle_interval) {
      case "day":
        return trialEndsAt.plus({ days: billing_cycle_frequency });
      case "week":
        return trialEndsAt.plus({ weeks: billing_cycle_frequency });
      case "month":
        return trialEndsAt.plus({ months: billing_cycle_frequency });
      case "year":
        return trialEndsAt.plus({ years: billing_cycle_frequency });
      default:
        throw new Error(`Invalid billing interval: ${billing_cycle_interval}`);
    }
  })();

  return {
    started_at: start.toJSDate(),
    trial_ends_at: trialEndsAt.toJSDate(),
    first_billed_at: trialEndsAt.toJSDate(),
    next_billed_at: nextBillingDate.toJSDate(),
    current_period_starts: start.toJSDate(),
    current_period_ends: trialEndsAt.toJSDate(),
    trial_end_dates: trialEndDates.map((date) => date.toJSDate()), // Individual trial end dates for each price
  };
}
