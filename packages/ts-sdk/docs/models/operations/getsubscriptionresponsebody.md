# GetSubscriptionResponseBody

## Example Usage

```typescript
import { GetSubscriptionResponseBody } from "jani-payments/models/operations";

let value: GetSubscriptionResponseBody = {
  data: {
    id: "<id>",
    status: "<value>",
    customerId: "<id>",
    addressId: "<id>",
    currencyCode: "KWD",
    createdAt: "1710096272204",
    updatedAt: "1737932420675",
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
      frequency: 979963,
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
        quantity: 271252,
        id: "<id>",
        subscriptionId: "<id>",
        recurring: false,
        createdAt: "1719177338722",
        updatedAt: "1737927474625",
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
            frequency: 7137.67,
          },
          trialPeriod: {
            interval: "month",
            frequency: 3991.61,
          },
          unitPrice: {
            amount: 4317.6,
            currencyCode: "NGN",
          },
          status: "active",
          id: "<id>",
          createdAt: "1732378749336",
          updatedAt: "1737949386192",
        },
      },
    ],
    managementUrls: {
      updatePaymentMethod: "<value>",
      cancel: "<value>",
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `data`                                                                           | [operations.GetSubscriptionData](../../models/operations/getsubscriptiondata.md) | :heavy_check_mark:                                                               | N/A                                                                              |