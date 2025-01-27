# SubscriptionPauseSubscriptionData

## Example Usage

```typescript
import { SubscriptionPauseSubscriptionData } from "jani-payments/models/operations";

let value: SubscriptionPauseSubscriptionData = {
  id: "<id>",
  status: "<value>",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "GEL",
  createdAt: "1728999145266",
  updatedAt: "1737934971485",
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
    frequency: 172951,
    interval: "<value>",
  },
  scheduledChange: [
    {
      id: "<id>",
      subscriptionId: "<id>",
      action: "pause",
      effectiveAt: "<value>",
      status: "scheduled",
    },
  ],
  items: [
    {
      status: "inactive",
      priceId: "<id>",
      quantity: 882284,
      id: "<id>",
      subscriptionId: "<id>",
      recurring: false,
      createdAt: "1729574252675",
      updatedAt: "1737934247202",
      previouslyBilledAt: "<value>",
      nextBilledAt: "<value>",
      trialStartedAt: "<value>",
      trialEndedAt: "<value>",
      price: {
        productId: "<id>",
        type: "standard",
        name: "<value>",
        billingCycle: {
          interval: "month",
          frequency: 8890.6,
        },
        trialPeriod: {
          interval: "month",
          frequency: 51.52,
        },
        unitPrice: {
          amount: 6941.58,
          currencyCode: "VND",
        },
        status: "archived",
        id: "<id>",
        createdAt: "1712031301419",
        updatedAt: "1737940622752",
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