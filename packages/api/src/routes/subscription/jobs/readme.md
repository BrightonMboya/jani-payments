1. Job to handle subscription renewal/billing

Example: Monthly subscription of $50
- Cron checks daily for subscriptions where next_billed_at = today
- For each subscription due:
  a. Attempt to charge the customer $50
  b. If successful: 
     - Update next_billed_at to next month
     - Generate invoice
  c. If failed:
     - Mark for retry
     - Update status to past_due



2. Trial Management
Example: 14-day free trial
- Cron checks daily for trials where trial_ended_at = today
- For each ending trial:
  a. If customer added payment method:
     - Convert to paid subscription
     - Process first payment
  b. If no payment method:
     - Cancel subscription
     - Send final notice


3. Payment Retry
Example: Failed payment for $100
- Day 1: Payment fails
- Cron job runs retry schedule:
  - Day 3: First retry
  - Day 5: Second retry
  - Day 7: Final retry
  - After all fails: Cancel subscription

4. Subscription status updates
Example: Past due subscription
- Cron checks daily for overdue subscriptions
- Status flow:
  a. active → past_due (after failed payment)
  b. past_due → cancelled (after grace period)
  - Example: 7 days grace period before cancellation


5. Invoice generation
Example: Monthly subscription
- Cron runs daily to:
  a. Generate invoices for next billing cycle
  b. Include:
     - Regular subscription fees
     - Usage charges
     - Any overage fees
  c. Send to customer before charging

7. Job to handle subscription_scheduled_changes
go to the schdeduled_changes table and then perfrom the logic for the scheduled change