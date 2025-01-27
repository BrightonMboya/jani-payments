# Data

## Example Usage

```typescript
import { Data } from "jani-payments/models/operations";

let value: Data = {
  id: "<id>",
  status: "<value>",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "DKK",
  createdAt: "1719388516670",
  updatedAt: "1737952699036",
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
    frequency: 886961,
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
      status: "trialing",
      priceId: "<id>",
      quantity: 871786,
      id: "<id>",
      subscriptionId: "<id>",
      recurring: false,
      createdAt: "1722303048422",
      updatedAt: "1737978536945",
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
          frequency: 8298.98,
        },
        trialPeriod: {
          interval: "year",
          frequency: 9197.83,
        },
        unitPrice: {
          amount: 360.33,
          currencyCode: "CHF",
        },
        status: "active",
        id: "<id>",
        createdAt: "1736476018151",
        updatedAt: "1737924769199",
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