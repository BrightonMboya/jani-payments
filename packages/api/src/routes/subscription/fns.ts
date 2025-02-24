import { DateTime } from "luxon";
import { SubscriptionStatus, type Subscriptions, type SubscriptionItemStatus } from "./helpers";

// interface Price {
//   trial_period_interval: BillingInterval;
//   trial_period_frequency: number;
//   billing_cycle_interval: BillingInterval;
//   billing_cycle_frequency: number;
// }

 export type PriceDetails = {
   status: "active" | "archived";
   currencyCode: string;
   billingCycleFrequency: number;
   billingCycleInterval: "day" | "week" | "month" | "year";
   trialPeriodFrequency: number;
   trialPeriodInterval: "day" | "week" | "month" | "year";
 };

export function calculateSubscriptionDates(prices: PriceDetails[]) {
  const start = DateTime.now();
  const hasTrialPeriod = prices.some(
    (price) => price.trialPeriodFrequency > 0
  );

  if (!hasTrialPeriod) {
    // No trial - subscription starts active
    const { billingCycleInterval, billingCycleFrequency } = prices[0];
    const periodEnd = start.plus({
      [billingCycleInterval + "s"]: billingCycleFrequency,
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
    if (price.trialPeriodFrequency === 0) {
      return start;
    }
    return start.plus({
      [price.trialPeriodInterval + "s"]: price.trialPeriodFrequency
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

export function getSubscriptionStatus(prices: PriceDetails[]): {
  subscriptionStatus: SubscriptionStatus;
  itemStatus: SubscriptionItemStatus;
} {
  const hasTrialPeriod = prices.some((price) => price.trialPeriodFrequency > 0);

  return {
    subscriptionStatus: hasTrialPeriod ? "trial" : "active",
    itemStatus: hasTrialPeriod ? "trialing" : "active",
  };
}

// Helper function to calculate period end based on billing cycle
export function calculatePeriodEnd(
  startDate: Date,
  subscription: Subscriptions
): Date {
  const start = DateTime.fromJSDate(startDate);

  switch (subscription.billing_cycle_interval) {
    case "day":
      return start
        .plus({ days: subscription.billing_cycle_frequency })
        .toJSDate();
    case "week":
      return start
        .plus({ weeks: subscription.billing_cycle_frequency })
        .toJSDate();
    case "month":
      return start
        .plus({ months: subscription.billing_cycle_frequency })
        .toJSDate();
    case "year":
      return start
        .plus({ years: subscription.billing_cycle_frequency })
        .toJSDate();
    default:
      throw new Error(
        `Invalid billing cycle interval: ${subscription.billing_cycle_interval}`
      );
  }
}
