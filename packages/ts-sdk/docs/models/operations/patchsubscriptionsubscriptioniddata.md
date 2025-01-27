# PatchSubscriptionSubscriptionIdData

## Example Usage

```typescript
import { PatchSubscriptionSubscriptionIdData } from "jani-payments/models/operations";

let value: PatchSubscriptionSubscriptionIdData = {
  id: "<id>",
  status: "<value>",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "NIO",
  createdAt: "1707796421236",
  updatedAt: "1737953484886",
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
    frequency: 913285,
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
      status: "active",
      priceId: "<id>",
      quantity: 754901,
      id: "<id>",
      subscriptionId: "<id>",
      recurring: false,
      createdAt: "1734353379875",
      updatedAt: "1737901593310",
      previouslyBilledAt: "<value>",
      nextBilledAt: "<value>",
      trialStartedAt: "<value>",
      trialEndedAt: "<value>",
      price: {
        productId: "<id>",
        type: "custom",
        name: "<value>",
        billingCycle: {
          interval: "day",
          frequency: 9670.55,
        },
        trialPeriod: {
          interval: "month",
          frequency: 5524.39,
        },
        unitPrice: {
          amount: 2959.5,
          currencyCode: "WST",
        },
        status: "active",
        id: "<id>",
        createdAt: "1732559762428",
        updatedAt: "1737978044066",
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

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                         | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `status`                                                                                                                                                     | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `customerId`                                                                                                                                                 | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `addressId`                                                                                                                                                  | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `currencyCode`                                                                                                                                               | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `createdAt`                                                                                                                                                  | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `updatedAt`                                                                                                                                                  | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `startedAt`                                                                                                                                                  | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `firstBilledAt`                                                                                                                                              | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `nextBilledAt`                                                                                                                                               | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `pausedAt`                                                                                                                                                   | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `canceledAt`                                                                                                                                                 | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `collectionMode`                                                                                                                                             | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `billingDetails`                                                                                                                                             | [operations.PatchSubscriptionSubscriptionIdSubscriptionBillingDetails](../../models/operations/patchsubscriptionsubscriptionidsubscriptionbillingdetails.md) | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `currentBillingPeriod`                                                                                                                                       | [operations.PatchSubscriptionSubscriptionIdCurrentBillingPeriod](../../models/operations/patchsubscriptionsubscriptionidcurrentbillingperiod.md)             | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `billingCycle`                                                                                                                                               | [operations.PatchSubscriptionSubscriptionIdBillingCycle](../../models/operations/patchsubscriptionsubscriptionidbillingcycle.md)                             | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `scheduledChange`                                                                                                                                            | [operations.PatchSubscriptionSubscriptionIdScheduledChange](../../models/operations/patchsubscriptionsubscriptionidscheduledchange.md)[]                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `items`                                                                                                                                                      | [operations.PatchSubscriptionSubscriptionIdSubscriptionItems](../../models/operations/patchsubscriptionsubscriptionidsubscriptionitems.md)[]                 | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `customData`                                                                                                                                                 | [operations.PatchSubscriptionSubscriptionIdSubscriptionCustomData](../../models/operations/patchsubscriptionsubscriptionidsubscriptioncustomdata.md)         | :heavy_minus_sign:                                                                                                                                           | Any valid JSON value                                                                                                                                         |
| `managementUrls`                                                                                                                                             | [operations.PatchSubscriptionSubscriptionIdManagementUrls](../../models/operations/patchsubscriptionsubscriptionidmanagementurls.md)                         | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `discount`                                                                                                                                                   | [operations.PatchSubscriptionSubscriptionIdDiscount](../../models/operations/patchsubscriptionsubscriptioniddiscount.md)                                     | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |