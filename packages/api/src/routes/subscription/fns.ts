import { DateTime } from "luxon";
import {
  BillingInterval,
  SubscriptionsStatus,
  SubscriptionItemsStatus,
} from "@repo/db/types";

interface Price {
  trial_period_interval: BillingInterval;
  trial_period_frequency: number;
  billing_cycle_interval: BillingInterval;
  billing_cycle_frequency: number;
}

export function calculateSubscriptionDates(prices: Price[]) {
  const start = DateTime.now();
  const hasTrialPeriod = prices.some(
    (price) => price.trial_period_frequency > 0
  );

  if (!hasTrialPeriod) {
    // No trial - subscription starts active
    const { billing_cycle_interval, billing_cycle_frequency } = prices[0];
    const periodEnd = start.plus({
      [billing_cycle_interval + "s"]: billing_cycle_frequency,
    });

    return {
      started_at: start.toJSDate(),
      trial_ends_at: null,
      first_billed_at: null, // Will be set after first payment succeeds
      next_billed_at: start.toJSDate(), // Set to now since we'll attempt payment immediately
      current_period_starts: start.toJSDate(),
      current_period_ends: periodEnd.toJSDate(),
      trial_end_dates: prices.map(() => null),
      has_trial: false,
    };
  }

  // Has trial period - calculate trial end dates
  const trialEndDates = prices.map((price) => {
    if (price.trial_period_frequency === 0) {
      return start;
    }
    return start.plus({
      [price.trial_period_interval + "s"]: price.trial_period_frequency,
    });
  });

  // Get the latest trial end date
  const trialEndsAt = DateTime.max(...trialEndDates);

  return {
    started_at: start.toJSDate(),
    trial_ends_at: trialEndsAt.toJSDate(),
    first_billed_at: null, // Will be set after trial ends and payment succeeds
    next_billed_at: trialEndsAt.toJSDate(), // First payment attempt will be at trial end
    current_period_starts: start.toJSDate(),
    current_period_ends: trialEndsAt.toJSDate(),
    trial_end_dates: trialEndDates.map((date) => date.toJSDate()),
    has_trial: true,
  };
}

export function getSubscriptionStatus(prices: Price[]): {
  subscriptionStatus: SubscriptionsStatus;
  itemStatus: SubscriptionItemsStatus;
} {
  const hasTrialPeriod = prices.some(
    (price) => price.trial_period_frequency > 0
  );

  return {
    subscriptionStatus: hasTrialPeriod ? "trial" : "active",
    itemStatus: hasTrialPeriod ? "trialing" : "active",
  };
}
