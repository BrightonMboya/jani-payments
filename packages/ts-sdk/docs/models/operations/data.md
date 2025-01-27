# Data

## Example Usage

```typescript
import { Data } from "jani-payments/models/operations";

let value: Data = {
  id: "<id>",
  status: "<value>",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "PHP",
  createdAt: "1736371004953",
  updatedAt: "1737897558306",
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
    frequency: 647197,
    interval: "<value>",
  },
  scheduledChange: [
    {
      id: "<id>",
      subscriptionId: "<id>",
      action: "resume",
      effectiveAt: "<value>",
      status: "scheduled",
    },
  ],
  items: [
    {
      status: "trialing",
      priceId: "<id>",
      quantity: 16871,
      id: "<id>",
      subscriptionId: "<id>",
      recurring: false,
      createdAt: "1728411993991",
      updatedAt: "1737967625775",
      previouslyBilledAt: "<value>",
      nextBilledAt: "<value>",
      trialStartedAt: "<value>",
      trialEndedAt: "<value>",
      price: {
        productId: "<id>",
        type: "custom",
        name: "<value>",
        billingCycle: {
          interval: "week",
          frequency: 7908.4,
        },
        trialPeriod: {
          interval: "day",
          frequency: 4420.36,
        },
        unitPrice: {
          amount: 5199.52,
          currencyCode: "PYG",
        },
        status: "active",
        id: "<id>",
        createdAt: "1713630348166",
        updatedAt: "1737932774399",
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

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `status`                                                                                                           | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `customerId`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `addressId`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `currencyCode`                                                                                                     | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `createdAt`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `updatedAt`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `startedAt`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `firstBilledAt`                                                                                                    | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `nextBilledAt`                                                                                                     | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `pausedAt`                                                                                                         | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `canceledAt`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `collectionMode`                                                                                                   | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `billingDetails`                                                                                                   | [operations.SubscriptionListBillingDetails](../../models/operations/subscriptionlistbillingdetails.md)             | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `currentBillingPeriod`                                                                                             | [operations.SubscriptionListCurrentBillingPeriod](../../models/operations/subscriptionlistcurrentbillingperiod.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `billingCycle`                                                                                                     | [operations.SubscriptionListBillingCycle](../../models/operations/subscriptionlistbillingcycle.md)                 | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `scheduledChange`                                                                                                  | [operations.ScheduledChange](../../models/operations/scheduledchange.md)[]                                         | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `items`                                                                                                            | [operations.SubscriptionListItems](../../models/operations/subscriptionlistitems.md)[]                             | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `customData`                                                                                                       | [operations.SubscriptionListCustomData](../../models/operations/subscriptionlistcustomdata.md)                     | :heavy_minus_sign:                                                                                                 | Any valid JSON value                                                                                               |
| `managementUrls`                                                                                                   | [operations.SubscriptionListManagementUrls](../../models/operations/subscriptionlistmanagementurls.md)             | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `discount`                                                                                                         | [operations.SubscriptionListDiscount](../../models/operations/subscriptionlistdiscount.md)                         | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |