# PostSubscriptionSubscriptionIdActivateData

## Example Usage

```typescript
import { PostSubscriptionSubscriptionIdActivateData } from "jani-payments/models/operations";

let value: PostSubscriptionSubscriptionIdActivateData = {
  id: "<id>",
  status: "<value>",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "DKK",
  createdAt: "1722427761329",
  updatedAt: "1737956594954",
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
    frequency: 97676,
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
      status: "active",
      priceId: "<id>",
      quantity: 677141,
      id: "<id>",
      subscriptionId: "<id>",
      recurring: false,
      createdAt: "1725140403205",
      updatedAt: "1737893801071",
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
          frequency: 439.75,
        },
        trialPeriod: {
          interval: "year",
          frequency: 5200.81,
        },
        unitPrice: {
          amount: 306.61,
          currencyCode: "DJF",
        },
        status: "archived",
        id: "<id>",
        createdAt: "1724807366098",
        updatedAt: "1737902217101",
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

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                           | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `status`                                                                                                                                                       | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `customerId`                                                                                                                                                   | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `addressId`                                                                                                                                                    | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `currencyCode`                                                                                                                                                 | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `createdAt`                                                                                                                                                    | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `updatedAt`                                                                                                                                                    | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `startedAt`                                                                                                                                                    | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `firstBilledAt`                                                                                                                                                | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `nextBilledAt`                                                                                                                                                 | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `pausedAt`                                                                                                                                                     | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `canceledAt`                                                                                                                                                   | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `collectionMode`                                                                                                                                               | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `billingDetails`                                                                                                                                               | [operations.PostSubscriptionSubscriptionIdActivateBillingDetails](../../models/operations/postsubscriptionsubscriptionidactivatebillingdetails.md)             | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `currentBillingPeriod`                                                                                                                                         | [operations.PostSubscriptionSubscriptionIdActivateCurrentBillingPeriod](../../models/operations/postsubscriptionsubscriptionidactivatecurrentbillingperiod.md) | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `billingCycle`                                                                                                                                                 | [operations.PostSubscriptionSubscriptionIdActivateBillingCycle](../../models/operations/postsubscriptionsubscriptionidactivatebillingcycle.md)                 | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `scheduledChange`                                                                                                                                              | [operations.PostSubscriptionSubscriptionIdActivateScheduledChange](../../models/operations/postsubscriptionsubscriptionidactivatescheduledchange.md)[]         | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `items`                                                                                                                                                        | [operations.PostSubscriptionSubscriptionIdActivateItems](../../models/operations/postsubscriptionsubscriptionidactivateitems.md)[]                             | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `customData`                                                                                                                                                   | [operations.PostSubscriptionSubscriptionIdActivateCustomData](../../models/operations/postsubscriptionsubscriptionidactivatecustomdata.md)                     | :heavy_minus_sign:                                                                                                                                             | Any valid JSON value                                                                                                                                           |
| `managementUrls`                                                                                                                                               | [operations.PostSubscriptionSubscriptionIdActivateManagementUrls](../../models/operations/postsubscriptionsubscriptionidactivatemanagementurls.md)             | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `discount`                                                                                                                                                     | [operations.PostSubscriptionSubscriptionIdActivateDiscount](../../models/operations/postsubscriptionsubscriptionidactivatediscount.md)                         | :heavy_minus_sign:                                                                                                                                             | N/A                                                                                                                                                            |