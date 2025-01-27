# SubscriptionUpdateSubscriptionData

## Example Usage

```typescript
import { SubscriptionUpdateSubscriptionData } from "jani-payments/models/operations";

let value: SubscriptionUpdateSubscriptionData = {
  id: "<id>",
  status: "<value>",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "CUP",
  createdAt: "1719807506772",
  updatedAt: "1737929757408",
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
    frequency: 163684,
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
      quantity: 35160,
      id: "<id>",
      subscriptionId: "<id>",
      recurring: false,
      createdAt: "1735028160635",
      updatedAt: "1737969380546",
      previouslyBilledAt: "<value>",
      nextBilledAt: "<value>",
      trialStartedAt: "<value>",
      trialEndedAt: "<value>",
      price: {
        productId: "<id>",
        type: "custom",
        name: "<value>",
        billingCycle: {
          interval: "year",
          frequency: 9623.96,
        },
        trialPeriod: {
          interval: "day",
          frequency: 6308.32,
        },
        unitPrice: {
          amount: 9979.94,
          currencyCode: "ZMW",
        },
        status: "archived",
        id: "<id>",
        createdAt: "1710486513529",
        updatedAt: "1737949234764",
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

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                       | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `status`                                                                                                                                                   | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `customerId`                                                                                                                                               | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `addressId`                                                                                                                                                | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `currencyCode`                                                                                                                                             | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `createdAt`                                                                                                                                                | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `updatedAt`                                                                                                                                                | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `startedAt`                                                                                                                                                | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `firstBilledAt`                                                                                                                                            | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `nextBilledAt`                                                                                                                                             | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `pausedAt`                                                                                                                                                 | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `canceledAt`                                                                                                                                               | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `collectionMode`                                                                                                                                           | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `billingDetails`                                                                                                                                           | [operations.SubscriptionUpdateSubscriptionSubscriptionBillingDetails](../../models/operations/subscriptionupdatesubscriptionsubscriptionbillingdetails.md) | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `currentBillingPeriod`                                                                                                                                     | [operations.SubscriptionUpdateSubscriptionCurrentBillingPeriod](../../models/operations/subscriptionupdatesubscriptioncurrentbillingperiod.md)             | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `billingCycle`                                                                                                                                             | [operations.SubscriptionUpdateSubscriptionBillingCycle](../../models/operations/subscriptionupdatesubscriptionbillingcycle.md)                             | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `scheduledChange`                                                                                                                                          | [operations.SubscriptionUpdateSubscriptionScheduledChange](../../models/operations/subscriptionupdatesubscriptionscheduledchange.md)[]                     | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `items`                                                                                                                                                    | [operations.SubscriptionUpdateSubscriptionSubscriptionItems](../../models/operations/subscriptionupdatesubscriptionsubscriptionitems.md)[]                 | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `customData`                                                                                                                                               | [operations.SubscriptionUpdateSubscriptionSubscriptionCustomData](../../models/operations/subscriptionupdatesubscriptionsubscriptioncustomdata.md)         | :heavy_minus_sign:                                                                                                                                         | Any valid JSON value                                                                                                                                       |
| `managementUrls`                                                                                                                                           | [operations.SubscriptionUpdateSubscriptionManagementUrls](../../models/operations/subscriptionupdatesubscriptionmanagementurls.md)                         | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `discount`                                                                                                                                                 | [operations.SubscriptionUpdateSubscriptionDiscount](../../models/operations/subscriptionupdatesubscriptiondiscount.md)                                     | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |