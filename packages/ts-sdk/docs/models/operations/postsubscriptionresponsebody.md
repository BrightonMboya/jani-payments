# PostSubscriptionResponseBody

Creates a Subscription

## Example Usage

```typescript
import { PostSubscriptionResponseBody } from "jani-payments/models/operations";

let value: PostSubscriptionResponseBody = {
  data: {
    id: "<id>",
    status: "<value>",
    customerId: "<id>",
    addressId: "<id>",
    currencyCode: "TJS",
    createdAt: "1736979210469",
    updatedAt: "1737972399517",
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
      frequency: 36033,
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
        quantity: 300029,
        id: "<id>",
        subscriptionId: "<id>",
        recurring: false,
        createdAt: "1711503838661",
        updatedAt: "1737969507041",
        previouslyBilledAt: "<value>",
        nextBilledAt: "<value>",
        trialStartedAt: "<value>",
        trialEndedAt: "<value>",
        price: {
          productId: "<id>",
          type: "standard",
          name: "<value>",
          billingCycle: {
            interval: "year",
            frequency: 1602.3,
          },
          trialPeriod: {
            interval: "month",
            frequency: 4402.64,
          },
          unitPrice: {
            amount: 764.86,
            currencyCode: "QAR",
          },
          status: "active",
          id: "<id>",
          createdAt: "1707692646285",
          updatedAt: "1737898110332",
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