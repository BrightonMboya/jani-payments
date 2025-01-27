# SubscriptionCreateResponseBody

Creates a Subscription

## Example Usage

```typescript
import { SubscriptionCreateResponseBody } from "jani-payments/models/operations";

let value: SubscriptionCreateResponseBody = {
  data: {
    id: "<id>",
    status: "<value>",
    customerId: "<id>",
    addressId: "<id>",
    currencyCode: "KWD",
    createdAt: "1710100665777",
    updatedAt: "1737936814248",
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
        createdAt: "1719181732296",
        updatedAt: "1737931868199",
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
          createdAt: "1732383142910",
          updatedAt: "1737953779766",
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

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `data`                                                                                 | [operations.SubscriptionCreateData](../../models/operations/subscriptioncreatedata.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |