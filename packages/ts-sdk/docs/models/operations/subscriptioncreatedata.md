# SubscriptionCreateData

## Example Usage

```typescript
import { SubscriptionCreateData } from "jani-payments/models/operations";

let value: SubscriptionCreateData = {
  id: "<id>",
  status: "<value>",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "AZN",
  createdAt: "1721290747444",
  updatedAt: "1737908855030",
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
    frequency: 457059,
    interval: "<value>",
  },
  scheduledChange: [
    {
      id: "<id>",
      subscriptionId: "<id>",
      action: "cancel",
      effectiveAt: "<value>",
      status: "completed",
    },
  ],
  items: [
    {
      status: "trialing",
      priceId: "<id>",
      quantity: 117315,
      id: "<id>",
      subscriptionId: "<id>",
      recurring: false,
      createdAt: "1715003452312",
      updatedAt: "1737933734380",
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
          frequency: 3447.18,
        },
        trialPeriod: {
          interval: "month",
          frequency: 6391.87,
        },
        unitPrice: {
          amount: 3991.61,
          currencyCode: "KES",
        },
        status: "archived",
        id: "<id>",
        createdAt: "1708658097530",
        updatedAt: "1737969902212",
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

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `status`                                                                                                               | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `customerId`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `addressId`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `currencyCode`                                                                                                         | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `createdAt`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `updatedAt`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `startedAt`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `firstBilledAt`                                                                                                        | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `nextBilledAt`                                                                                                         | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `pausedAt`                                                                                                             | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `canceledAt`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `collectionMode`                                                                                                       | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `billingDetails`                                                                                                       | [operations.SubscriptionCreateBillingDetails](../../models/operations/subscriptioncreatebillingdetails.md)             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `currentBillingPeriod`                                                                                                 | [operations.SubscriptionCreateCurrentBillingPeriod](../../models/operations/subscriptioncreatecurrentbillingperiod.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `billingCycle`                                                                                                         | [operations.SubscriptionCreateBillingCycle](../../models/operations/subscriptioncreatebillingcycle.md)                 | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `scheduledChange`                                                                                                      | [operations.SubscriptionCreateScheduledChange](../../models/operations/subscriptioncreatescheduledchange.md)[]         | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `items`                                                                                                                | [operations.SubscriptionCreateItems](../../models/operations/subscriptioncreateitems.md)[]                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `customData`                                                                                                           | [operations.SubscriptionCreateCustomData](../../models/operations/subscriptioncreatecustomdata.md)                     | :heavy_minus_sign:                                                                                                     | Any valid JSON value                                                                                                   |
| `managementUrls`                                                                                                       | [operations.SubscriptionCreateManagementUrls](../../models/operations/subscriptioncreatemanagementurls.md)             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `discount`                                                                                                             | [operations.SubscriptionCreateDiscount](../../models/operations/subscriptioncreatediscount.md)                         | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |