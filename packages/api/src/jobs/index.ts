/**
 * this is the entry point for all the cron jobs happening
 * rn all the jobs are running on one lambda fn, u might want to split this up when it gets out of hand
 *
 */
import { Handle_Discount_Expires_Date } from "~/routes/discounts/jobs/handle-discount-expires-date";
import { MarkAsPaused } from "~/routes/subscription/jobs/mark-as-paused";
import { Subscription_Scheduled_Changes } from "~/routes/subscription/jobs/subscription_scheduled_changes";
import { TrialManagement } from "~/routes/subscription/jobs/trial-management";

export default async function handler() {
  await Handle_Discount_Expires_Date();
  await MarkAsPaused();
  await Subscription_Scheduled_Changes();
  await TrialManagement();
}
