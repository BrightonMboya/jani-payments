# PostSubscriptionSubscriptionIdCancelData

## Example Usage

```typescript
import { PostSubscriptionSubscriptionIdCancelData } from "jani-payments/models/operations";

let value: PostSubscriptionSubscriptionIdCancelData = {
  id: "<id>",
  status: "<value>",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "UAH",
  createdAt: "1728227919321",
  updatedAt: "1737978237257",
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
    frequency: 759283,
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
      status: "inactive",
      priceId: "<id>",
      quantity: 364912,
      id: "<id>",
      subscriptionId: "<id>",
      recurring: false,
      createdAt: "1714671215343",
      updatedAt: "1737935782650",
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
          frequency: 5243.8,
        },
        trialPeriod: {
          interval: "day",
          frequency: 1598.45,
        },
        unitPrice: {
          amount: 468.06,
          currencyCode: "ZAR",
        },
        status: "active",
        id: "<id>",
        createdAt: "1712075029007",
        updatedAt: "1737945882388",
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
| `billingDetails`                                                                                                                                           | [operations.PostSubscriptionSubscriptionIdCancelBillingDetails](../../models/operations/postsubscriptionsubscriptionidcancelbillingdetails.md)             | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `currentBillingPeriod`                                                                                                                                     | [operations.PostSubscriptionSubscriptionIdCancelCurrentBillingPeriod](../../models/operations/postsubscriptionsubscriptionidcancelcurrentbillingperiod.md) | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `billingCycle`                                                                                                                                             | [operations.PostSubscriptionSubscriptionIdCancelBillingCycle](../../models/operations/postsubscriptionsubscriptionidcancelbillingcycle.md)                 | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `scheduledChange`                                                                                                                                          | [operations.PostSubscriptionSubscriptionIdCancelScheduledChange](../../models/operations/postsubscriptionsubscriptionidcancelscheduledchange.md)[]         | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `items`                                                                                                                                                    | [operations.PostSubscriptionSubscriptionIdCancelItems](../../models/operations/postsubscriptionsubscriptionidcancelitems.md)[]                             | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `customData`                                                                                                                                               | [operations.PostSubscriptionSubscriptionIdCancelCustomData](../../models/operations/postsubscriptionsubscriptionidcancelcustomdata.md)                     | :heavy_minus_sign:                                                                                                                                         | Any valid JSON value                                                                                                                                       |
| `managementUrls`                                                                                                                                           | [operations.PostSubscriptionSubscriptionIdCancelManagementUrls](../../models/operations/postsubscriptionsubscriptionidcancelmanagementurls.md)             | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `discount`                                                                                                                                                 | [operations.PostSubscriptionSubscriptionIdCancelDiscount](../../models/operations/postsubscriptionsubscriptionidcanceldiscount.md)                         | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |