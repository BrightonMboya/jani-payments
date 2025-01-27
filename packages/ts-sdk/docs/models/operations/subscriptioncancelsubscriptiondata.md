# SubscriptionCancelSubscriptionData

## Example Usage

```typescript
import { SubscriptionCancelSubscriptionData } from "jani-payments/models/operations";

let value: SubscriptionCancelSubscriptionData = {
  id: "<id>",
  status: "<value>",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "UAH",
  createdAt: "1728232312891",
  updatedAt: "1737982630827",
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
      createdAt: "1714675608913",
      updatedAt: "1737940176220",
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
        createdAt: "1712079422577",
        updatedAt: "1737950275958",
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
| `billingDetails`                                                                                                                               | [operations.SubscriptionCancelSubscriptionBillingDetails](../../models/operations/subscriptioncancelsubscriptionbillingdetails.md)             | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `currentBillingPeriod`                                                                                                                         | [operations.SubscriptionCancelSubscriptionCurrentBillingPeriod](../../models/operations/subscriptioncancelsubscriptioncurrentbillingperiod.md) | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `billingCycle`                                                                                                                                 | [operations.SubscriptionCancelSubscriptionBillingCycle](../../models/operations/subscriptioncancelsubscriptionbillingcycle.md)                 | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `scheduledChange`                                                                                                                              | [operations.SubscriptionCancelSubscriptionScheduledChange](../../models/operations/subscriptioncancelsubscriptionscheduledchange.md)[]         | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `items`                                                                                                                                        | [operations.SubscriptionCancelSubscriptionItems](../../models/operations/subscriptioncancelsubscriptionitems.md)[]                             | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `customData`                                                                                                                                   | [operations.SubscriptionCancelSubscriptionCustomData](../../models/operations/subscriptioncancelsubscriptioncustomdata.md)                     | :heavy_minus_sign:                                                                                                                             | Any valid JSON value                                                                                                                           |
| `managementUrls`                                                                                                                               | [operations.SubscriptionCancelSubscriptionManagementUrls](../../models/operations/subscriptioncancelsubscriptionmanagementurls.md)             | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `discount`                                                                                                                                     | [operations.SubscriptionCancelSubscriptionDiscount](../../models/operations/subscriptioncancelsubscriptiondiscount.md)                         | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |