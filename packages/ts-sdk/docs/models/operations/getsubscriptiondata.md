# GetSubscriptionData

## Example Usage

```typescript
import { GetSubscriptionData } from "jani-payments/models/operations";

let value: GetSubscriptionData = {
  id: "<id>",
  status: "<value>",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "BOB",
  createdAt: "1709817813706",
  updatedAt: "1737943880282",
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
      createdAt: "1718437581216",
      updatedAt: "1737905701771",
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
        createdAt: "1733551071648",
        updatedAt: "1737897988608",
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

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `status`                                                                                                         | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `customerId`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `addressId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `currencyCode`                                                                                                   | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `createdAt`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `updatedAt`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `startedAt`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `firstBilledAt`                                                                                                  | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `nextBilledAt`                                                                                                   | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `pausedAt`                                                                                                       | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `canceledAt`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `collectionMode`                                                                                                 | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `billingDetails`                                                                                                 | [operations.GetSubscriptionBillingDetails](../../models/operations/getsubscriptionbillingdetails.md)             | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `currentBillingPeriod`                                                                                           | [operations.GetSubscriptionCurrentBillingPeriod](../../models/operations/getsubscriptioncurrentbillingperiod.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `billingCycle`                                                                                                   | [operations.GetSubscriptionBillingCycle](../../models/operations/getsubscriptionbillingcycle.md)                 | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `scheduledChange`                                                                                                | [operations.GetSubscriptionScheduledChange](../../models/operations/getsubscriptionscheduledchange.md)[]         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `items`                                                                                                          | [operations.GetSubscriptionItems](../../models/operations/getsubscriptionitems.md)[]                             | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `customData`                                                                                                     | [operations.GetSubscriptionCustomData](../../models/operations/getsubscriptioncustomdata.md)                     | :heavy_minus_sign:                                                                                               | Any valid JSON value                                                                                             |
| `managementUrls`                                                                                                 | [operations.GetSubscriptionManagementUrls](../../models/operations/getsubscriptionmanagementurls.md)             | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `discount`                                                                                                       | [operations.GetSubscriptionDiscount](../../models/operations/getsubscriptiondiscount.md)                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |