import { type Context } from "hono";
import { APPRouteHandler } from "~/lib/types";
import { CreateSubscription } from "../subscription.routes";
import { createSubscriptionSchema, transformSubscription } from "../helpers";
import {
  calculateSubscriptionDates,
  getSubscriptionStatus,
  PriceDetails,
} from "../fns";
import * as HttpStatusCodes from "~/lib/http-status-code";
import * as schema from "@repo/db/db/schema.ts";
import { db } from "@repo/db";
import { eq, and } from "drizzle-orm";

const create_subscription: APPRouteHandler<CreateSubscription> = async (
  c: Context
) => {
  const input = createSubscriptionSchema.parse(await c.req.json());

  // 1. Fetch project and prices
  const [priceDetails] = await Promise.all([
    Promise.all(
      input.items.map(async (item) => {
        return await db.query.Prices.findFirst({
          where: and(
            eq(schema.Prices.id, item.price_id),
            eq(schema.Prices.projectId, c.get("organization_Id"))
          ),
          columns: {
            trialPeriodFrequency: true,
            trialPeriodInterval: true,
            billingCycleFrequency: true,
            billingCycleInterval: true,
            currencyCode: true,
            status: true,
          },
        });
      })
    ),
  ]);

  // 2. Validate currencies and prices
  const currencies = new Set(priceDetails.map((p) => p?.currencyCode));
  if (currencies.size > 1) {
    throw new Error("All prices must be in the same currency");
  }
  if (priceDetails.some((p) => p?.status === "archived")) {
    throw new Error("Cannot create subscription with archived prices");
  }

  // 3. Calculate dates and determine status
  // Filter out undefined values
  const filteredPriceDetails = priceDetails.filter(
    (item): item is PriceDetails => item !== undefined
  );
  const dates = calculateSubscriptionDates(filteredPriceDetails);
  const { subscriptionStatus, itemStatus } =
    getSubscriptionStatus(filteredPriceDetails);

  // prepare data for subscription insert
  type SubscriptionInsert = typeof schema.Subscriptions.$inferInsert;
  const subscriptionId = `sub_${crypto.randomUUID()}`;

  const subInsertData: SubscriptionInsert = {
    id: subscriptionId,
    status: subscriptionStatus, // Automatically set based on trial periods
    currency_code: input.currency_code,
    customer_id: input.customer_id,
    address_id: input.address_id,
    project_id: c.get("organization_Id"),
    discount_id: input.discount_id,
    collection_mode: "automatic",
    // Billing cycle info from first price
    billing_cycle_interval: priceDetails[0]?.billingCycleInterval!,
    billing_cycle_frequency: priceDetails[0]?.billingCycleFrequency!,
    // Dates
    started_at: dates.started_at.toISOString(),
    first_billed_at: dates.first_billed_at,
    next_billed_at: dates.next_billed_at.toISOString(),
    current_period_starts: dates.current_period_starts.toISOString(),
    current_period_ends: dates.current_period_ends.toISOString(),
    updated_at: new Date().toISOString(),
  };

  type SubItemInsert = typeof schema.SubscriptionItems.$inferInsert;

  const subItemsData: SubItemInsert[] = input.items?.map((item, index) => ({
    id: `si_${crypto.randomUUID()}`,
    subscription_id: subscriptionId,
    price_id: item.price_id,
    quantity: Number(item.quantity),
    status: itemStatus, // Automatically set based on trial periods
    recurring: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    // Only set trial dates if there's a trial
    trial_started_at: dates.has_trial ? dates.started_at.toISOString() : null,
    trial_ended_at: dates.has_trial
      ? dates.trial_end_dates[index]?.toISOString()
      : null,
    previously_billed_at: dates.has_trial
      ? null
      : dates.started_at.toISOString(),
    next_billed_at: dates.next_billed_at.toISOString(),
    // custom_data: undefined // Add this line to include the optional property
  }));

  // 4. Create the subscription with a transaction
  const subscription = await db.transaction(async (tx) => {
    // insert into the subscription table
    await tx.insert(schema.Subscriptions).values(subInsertData);

    // insert into the subscription items table
    await tx.insert(schema.SubscriptionItems).values(subItemsData);

    // Create billing details if provided
    if (input.billingDetails) {
      await tx.insert(schema.BillingDetails).values({
        id: `bd_${crypto.randomUUID()}`,
        subscription_id: subscriptionId,
        payment_interval: input.billingDetails?.payment_terms?.payment_interval,
        payment_frequency:
          input.billingDetails?.payment_terms?.payment_frequency,
        enable_checkout: input.billingDetails.enable_checkout,
        purchase_order_number: `po_${crypto.randomUUID()}`,
        additional_information: input.billingDetails.additional_information,
        updated_at: new Date().toISOString(),
      });
    }

    return await tx.query.Subscriptions.findFirst({
      where: and(
        eq(schema.Subscriptions.id, subscriptionId),
        eq(schema.Subscriptions.project_id, c.get("organization_Id"))
      ),
      with: {
        discount: {
          with: {
            discount_prices: true,
          },
        },
        Subscription_Items: {
          with: { price: true },
        },
        BillingDetails: true,
        Subscription_Scheduled_Changes: true,
      },
    });
  })

  if (!subscription) {
    throw new Error("Subscription creation failed");
  }

  const formattedSubscription = transformSubscription(subscription);
  return c.json(formattedSubscription, HttpStatusCodes.OK);
  
};

export default create_subscription;
