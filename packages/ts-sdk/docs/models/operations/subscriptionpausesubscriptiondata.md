# SubscriptionPauseSubscriptionData

## Example Usage

```typescript
import { SubscriptionPauseSubscriptionData } from "jani-payments/models/operations";

let value: SubscriptionPauseSubscriptionData = {
  id: "<id>",
  status: "<value>",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "CNY",
  createdAt: "1719157552557",
  updatedAt: "1737961712331",
  startedAt: "<value>",
  firstBilledAt: "<value>",
  nextBilledAt: "<value>",
  pausedAt: "<value>",
  canceledAt: "<value>",
  collectionMode: "<value>",
  billingDetails: {
    paymentTerms: {},
  },
  currentBillingPeriod: {
    startsAt: "<value>",
    endsAt: "<value>",
  },
  billingCycle: {
    frequency: 526907,
    interval: "<value>",
  },
  scheduledChange: [
    {
      id: "<id>",
      subscriptionId: "<id>",
      action: "resume",
      effectiveAt: "<value>",
      status: "completed",
    },
  ],
  items: [
    {
      status: "inactive",
      priceId: "<id>",
      quantity: 63553,
      id: "<id>",
      subscriptionId: "<id>",
      recurring: false,
      createdAt: "1713015199299",
      updatedAt: "1737977882853",
      previouslyBilledAt: "<value>",
      nextBilledAt: "<value>",
      trialStartedAt: "<value>",
      trialEndedAt: "<value>",
      price: {
        productId: "<id>",
        type: "standard",
        name: "<value>",
        billingCycle: {
          interval: "year",
          frequency: 8028.94,
        },
        trialPeriod: {
          interval: "day",
          frequency: 6057.12,
        },
        unitPrice: {
          amount: 1156.61,
          currencyCode: "SAR",
        },
        status: "archived",
        id: "<id>",
        createdAt: "1732053018620",
        updatedAt: "1737938743296",
      },
    },
  ],
  managementUrls: {
    updatePaymentMethod: "<value>",
    cancel: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                         | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `status`                                                                                                                                     | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `customerId`                                                                                                                                 | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `addressId`                                                                                                                                  | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `currencyCode`                                                                                                                               | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `createdAt`                                                                                                                                  | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `updatedAt`                                                                                                                                  | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `startedAt`                                                                                                                                  | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `firstBilledAt`                                                                                                                              | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `nextBilledAt`                                                                                                                               | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `pausedAt`                                                                                                                                   | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `canceledAt`                                                                                                                                 | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `collectionMode`                                                                                                                             | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `billingDetails`                                                                                                                             | [operations.SubscriptionPauseSubscriptionBillingDetails](../../models/operations/subscriptionpausesubscriptionbillingdetails.md)             | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `currentBillingPeriod`                                                                                                                       | [operations.SubscriptionPauseSubscriptionCurrentBillingPeriod](../../models/operations/subscriptionpausesubscriptioncurrentbillingperiod.md) | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `billingCycle`                                                                                                                               | [operations.SubscriptionPauseSubscriptionBillingCycle](../../models/operations/subscriptionpausesubscriptionbillingcycle.md)                 | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `scheduledChange`                                                                                                                            | [operations.SubscriptionPauseSubscriptionScheduledChange](../../models/operations/subscriptionpausesubscriptionscheduledchange.md)[]         | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `items`                                                                                                                                      | [operations.SubscriptionPauseSubscriptionItems](../../models/operations/subscriptionpausesubscriptionitems.md)[]                             | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `customData`                                                                                                                                 | [operations.SubscriptionPauseSubscriptionCustomData](../../models/operations/subscriptionpausesubscriptioncustomdata.md)                     | :heavy_minus_sign:                                                                                                                           | Any valid JSON value                                                                                                                         |
| `managementUrls`                                                                                                                             | [operations.SubscriptionPauseSubscriptionManagementUrls](../../models/operations/subscriptionpausesubscriptionmanagementurls.md)             | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `discount`                                                                                                                                   | [operations.SubscriptionPauseSubscriptionDiscount](../../models/operations/subscriptionpausesubscriptiondiscount.md)                         | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |