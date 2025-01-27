# SubscriptionCreateData

## Example Usage

```typescript
import { SubscriptionCreateData } from "jani-payments/models/operations";

let value: SubscriptionCreateData = {
  id: "<id>",
  status: "<value>",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "BOB",
  createdAt: "1709822207280",
  updatedAt: "1737948273856",
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
    frequency: 745398,
    interval: "<value>",
  },
  scheduledChange: [
    {
      id: "<id>",
      subscriptionId: "<id>",
      action: "cancel",
      effectiveAt: "<value>",
      status: "scheduled",
    },
  ],
  items: [
    {
      status: "trialing",
      priceId: "<id>",
      quantity: 399802,
      id: "<id>",
      subscriptionId: "<id>",
      recurring: false,
      createdAt: "1718441974790",
      updatedAt: "1737910095345",
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
          frequency: 8620.63,
        },
        trialPeriod: {
          interval: "day",
          frequency: 4977.77,
        },
        unitPrice: {
          amount: 5810.82,
          currencyCode: "DZD",
        },
        status: "active",
        id: "<id>",
        createdAt: "1733555465222",
        updatedAt: "1737902382182",
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