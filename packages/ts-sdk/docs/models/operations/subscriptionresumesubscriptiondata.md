# SubscriptionResumeSubscriptionData

## Example Usage

```typescript
import { SubscriptionResumeSubscriptionData } from "jani-payments/models/operations";

let value: SubscriptionResumeSubscriptionData = {
  id: "<id>",
  status: "<value>",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "TZS",
  createdAt: "1735415004970",
  updatedAt: "1737907703266",
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
      createdAt: "1737368319907",
      updatedAt: "1737905658262",
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
        createdAt: "1721741601106",
        updatedAt: "1737975184516",
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

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                           | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `status`                                                                                                                                       | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `customerId`                                                                                                                                   | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `addressId`                                                                                                                                    | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `currencyCode`                                                                                                                                 | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `createdAt`                                                                                                                                    | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `updatedAt`                                                                                                                                    | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `startedAt`                                                                                                                                    | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `firstBilledAt`                                                                                                                                | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `nextBilledAt`                                                                                                                                 | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `pausedAt`                                                                                                                                     | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `canceledAt`                                                                                                                                   | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `collectionMode`                                                                                                                               | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `billingDetails`                                                                                                                               | [operations.SubscriptionResumeSubscriptionBillingDetails](../../models/operations/subscriptionresumesubscriptionbillingdetails.md)             | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `currentBillingPeriod`                                                                                                                         | [operations.SubscriptionResumeSubscriptionCurrentBillingPeriod](../../models/operations/subscriptionresumesubscriptioncurrentbillingperiod.md) | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `billingCycle`                                                                                                                                 | [operations.SubscriptionResumeSubscriptionBillingCycle](../../models/operations/subscriptionresumesubscriptionbillingcycle.md)                 | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `scheduledChange`                                                                                                                              | [operations.SubscriptionResumeSubscriptionScheduledChange](../../models/operations/subscriptionresumesubscriptionscheduledchange.md)[]         | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `items`                                                                                                                                        | [operations.SubscriptionResumeSubscriptionItems](../../models/operations/subscriptionresumesubscriptionitems.md)[]                             | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `customData`                                                                                                                                   | [operations.SubscriptionResumeSubscriptionCustomData](../../models/operations/subscriptionresumesubscriptioncustomdata.md)                     | :heavy_minus_sign:                                                                                                                             | Any valid JSON value                                                                                                                           |
| `managementUrls`                                                                                                                               | [operations.SubscriptionResumeSubscriptionManagementUrls](../../models/operations/subscriptionresumesubscriptionmanagementurls.md)             | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `discount`                                                                                                                                     | [operations.SubscriptionResumeSubscriptionDiscount](../../models/operations/subscriptionresumesubscriptiondiscount.md)                         | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |