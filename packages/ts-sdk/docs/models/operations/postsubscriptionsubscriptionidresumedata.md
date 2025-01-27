# PostSubscriptionSubscriptionIdResumeData

## Example Usage

```typescript
import { PostSubscriptionSubscriptionIdResumeData } from "jani-payments/models/operations";

let value: PostSubscriptionSubscriptionIdResumeData = {
  id: "<id>",
  status: "<value>",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "TZS",
  createdAt: "1735410611488",
  updatedAt: "1737903309784",
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
    frequency: 334474,
    interval: "<value>",
  },
  scheduledChange: [
    {
      id: "<id>",
      subscriptionId: "<id>",
      action: "pause",
      effectiveAt: "<value>",
      status: "completed",
    },
  ],
  items: [
    {
      status: "trialing",
      priceId: "<id>",
      quantity: 56877,
      id: "<id>",
      subscriptionId: "<id>",
      recurring: false,
      createdAt: "1737363926425",
      updatedAt: "1737901264780",
      previouslyBilledAt: "<value>",
      nextBilledAt: "<value>",
      trialStartedAt: "<value>",
      trialEndedAt: "<value>",
      price: {
        productId: "<id>",
        type: "custom",
        name: "<value>",
        billingCycle: {
          interval: "month",
          frequency: 3679.17,
        },
        trialPeriod: {
          interval: "week",
          frequency: 7573.64,
        },
        unitPrice: {
          amount: 3145.73,
          currencyCode: "PEN",
        },
        status: "archived",
        id: "<id>",
        createdAt: "1721737207624",
        updatedAt: "1737970791034",
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
| `billingDetails`                                                                                                                                           | [operations.PostSubscriptionSubscriptionIdResumeBillingDetails](../../models/operations/postsubscriptionsubscriptionidresumebillingdetails.md)             | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `currentBillingPeriod`                                                                                                                                     | [operations.PostSubscriptionSubscriptionIdResumeCurrentBillingPeriod](../../models/operations/postsubscriptionsubscriptionidresumecurrentbillingperiod.md) | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `billingCycle`                                                                                                                                             | [operations.PostSubscriptionSubscriptionIdResumeBillingCycle](../../models/operations/postsubscriptionsubscriptionidresumebillingcycle.md)                 | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `scheduledChange`                                                                                                                                          | [operations.PostSubscriptionSubscriptionIdResumeScheduledChange](../../models/operations/postsubscriptionsubscriptionidresumescheduledchange.md)[]         | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `items`                                                                                                                                                    | [operations.PostSubscriptionSubscriptionIdResumeItems](../../models/operations/postsubscriptionsubscriptionidresumeitems.md)[]                             | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `customData`                                                                                                                                               | [operations.PostSubscriptionSubscriptionIdResumeCustomData](../../models/operations/postsubscriptionsubscriptionidresumecustomdata.md)                     | :heavy_minus_sign:                                                                                                                                         | Any valid JSON value                                                                                                                                       |
| `managementUrls`                                                                                                                                           | [operations.PostSubscriptionSubscriptionIdResumeManagementUrls](../../models/operations/postsubscriptionsubscriptionidresumemanagementurls.md)             | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `discount`                                                                                                                                                 | [operations.PostSubscriptionSubscriptionIdResumeDiscount](../../models/operations/postsubscriptionsubscriptionidresumediscount.md)                         | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |