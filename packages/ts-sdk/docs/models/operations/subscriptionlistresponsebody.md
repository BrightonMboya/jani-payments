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
    currencyCode: "CAD",
    createdAt: "1734399750079",
    updatedAt: "1737937415046",
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
      frequency: 907876,
      interval: "<value>",
    },
    scheduledChange: [
      {
        id: "<id>",
        subscriptionId: "<id>",
        action: "pause",
        effectiveAt: "<value>",
        status: "scheduled",
      },
    ],
    items: [
      {
        status: "inactive",
        priceId: "<id>",
        quantity: 76486,
        id: "<id>",
        subscriptionId: "<id>",
        recurring: false,
        createdAt: "1728412908051",
        updatedAt: "1737920222023",
        previouslyBilledAt: "<value>",
        nextBilledAt: "<value>",
        trialStartedAt: "<value>",
        trialEndedAt: "<value>",
        price: {
          productId: "<id>",
          type: "standard",
          name: "<value>",
          billingCycle: {
            interval: "day",
            frequency: 610.78,
          },
          trialPeriod: {
            interval: "year",
            frequency: 7398.84,
          },
          unitPrice: {
            amount: 8980.63,
            currencyCode: "PHP",
          },
          status: "archived",
          id: "<id>",
          createdAt: "1716050267260",
          updatedAt: "1737985069960",
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