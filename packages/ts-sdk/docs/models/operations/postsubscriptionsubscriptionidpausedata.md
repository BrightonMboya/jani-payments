# PostSubscriptionSubscriptionIdPauseData

## Example Usage

```typescript
import { PostSubscriptionSubscriptionIdPauseData } from "jani-payments/models/operations";

let value: PostSubscriptionSubscriptionIdPauseData = {
  id: "<id>",
  status: "<value>",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "CNY",
  createdAt: "1719153159065",
  updatedAt: "1737957318839",
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
      createdAt: "1713010805808",
      updatedAt: "1737973489362",
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
        createdAt: "1732048625129",
        updatedAt: "1737934349805",
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

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                     | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `status`                                                                                                                                                 | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `customerId`                                                                                                                                             | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `addressId`                                                                                                                                              | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `currencyCode`                                                                                                                                           | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `createdAt`                                                                                                                                              | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `updatedAt`                                                                                                                                              | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `startedAt`                                                                                                                                              | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `firstBilledAt`                                                                                                                                          | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `nextBilledAt`                                                                                                                                           | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `pausedAt`                                                                                                                                               | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `canceledAt`                                                                                                                                             | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `collectionMode`                                                                                                                                         | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `billingDetails`                                                                                                                                         | [operations.PostSubscriptionSubscriptionIdPauseBillingDetails](../../models/operations/postsubscriptionsubscriptionidpausebillingdetails.md)             | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `currentBillingPeriod`                                                                                                                                   | [operations.PostSubscriptionSubscriptionIdPauseCurrentBillingPeriod](../../models/operations/postsubscriptionsubscriptionidpausecurrentbillingperiod.md) | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `billingCycle`                                                                                                                                           | [operations.PostSubscriptionSubscriptionIdPauseBillingCycle](../../models/operations/postsubscriptionsubscriptionidpausebillingcycle.md)                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `scheduledChange`                                                                                                                                        | [operations.PostSubscriptionSubscriptionIdPauseScheduledChange](../../models/operations/postsubscriptionsubscriptionidpausescheduledchange.md)[]         | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `items`                                                                                                                                                  | [operations.PostSubscriptionSubscriptionIdPauseItems](../../models/operations/postsubscriptionsubscriptionidpauseitems.md)[]                             | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `customData`                                                                                                                                             | [operations.PostSubscriptionSubscriptionIdPauseCustomData](../../models/operations/postsubscriptionsubscriptionidpausecustomdata.md)                     | :heavy_minus_sign:                                                                                                                                       | Any valid JSON value                                                                                                                                     |
| `managementUrls`                                                                                                                                         | [operations.PostSubscriptionSubscriptionIdPauseManagementUrls](../../models/operations/postsubscriptionsubscriptionidpausemanagementurls.md)             | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `discount`                                                                                                                                               | [operations.PostSubscriptionSubscriptionIdPauseDiscount](../../models/operations/postsubscriptionsubscriptionidpausediscount.md)                         | :heavy_minus_sign:                                                                                                                                       | N/A                                                                                                                                                      |