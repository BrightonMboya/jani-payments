# SubscriptionListResponseBody

## Example Usage

```typescript
import { SubscriptionListResponseBody } from "jani-payments/models/operations";

let value: SubscriptionListResponseBody = {
  data: {
    id: "<id>",
    status: "<value>",
    customerId: "<id>",
    addressId: "<id>",
    currencyCode: "NIO",
    createdAt: "1734418919069",
    updatedAt: "1737950790721",
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
      frequency: 133461,
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
        status: "inactive",
        priceId: "<id>",
        quantity: 922348,
        id: "<id>",
        subscriptionId: "<id>",
        recurring: false,
        createdAt: "1723520708931",
        updatedAt: "1737977097481",
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
            frequency: 9197.83,
          },
          trialPeriod: {
            interval: "day",
            frequency: 1747.72,
          },
          unitPrice: {
            amount: 3891.35,
            currencyCode: "XOF",
          },
          status: "active",
          id: "<id>",
          createdAt: "1711508232218",
          updatedAt: "1737973900598",
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

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `data`                                             | [operations.Data](../../models/operations/data.md) | :heavy_check_mark:                                 | N/A                                                |