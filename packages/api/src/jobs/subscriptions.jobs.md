// add this job when you start accepting payments on behalf of other folks

<!-- 1. Job to handle subscription renewal/billing

Example: Monthly subscription of $50
- Cron checks daily for subscriptions where next_billed_at = today
- For each subscription due:
  a. Attempt to charge the customer $50
  b. If successful:
     - Update next_billed_at to next month
     - Generate invoice
  c. If failed:
     - Mark for retry
     - Update status to past_due -->

[Done] 2. Trial Management
Example: 14-day free trial

- Cron checks daily for trials where trial_ended_at = today

5. Invoice generation
   Example: Monthly subscription

- Cron run daily to:
  a. Generate invoice for next billing cycle
  b. Include:
  - Regular subscription fees
  - Usage charges
  - Any overage fees
    c. Send to customer before charging

[Done] 6. this is not a job parse, but when you collect the payment u need to update the
first_billed_at, next_billed_at, and current_billing_period dates

[Done]7. Job to handle subscription_scheduled_changes to to the schdeduled_changes table and then perfrom the logic for the scheduled change
