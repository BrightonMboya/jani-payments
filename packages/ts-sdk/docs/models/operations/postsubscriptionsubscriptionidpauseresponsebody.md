# PostSubscriptionSubscriptionIdPauseResponseBody

Pause a subscription given its id

## Example Usage

```typescript
import { PostSubscriptionSubscriptionIdPauseResponseBody } from "jani-payments/models/operations";

let value: PostSubscriptionSubscriptionIdPauseResponseBody = {
  data: {
    id: "<id>",
    status: "<value>",
    customerId: "<id>",
    addressId: "<id>",
    currencyCode: "VES",
    createdAt: "1707999599801",
    updatedAt: "1737918236744",
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
      frequency: 715053,
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
        quantity: 817339,
        id: "<id>",
        subscriptionId: "<id>",
        recurring: false,
        createdAt: "1721364367962",
        updatedAt: "1737969159893",
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
            frequency: 3735.11,
          },
          trialPeriod: {
            interval: "month",
            frequency: 8890.6,
          },
          unitPrice: {
            amount: 7372.79,
            currencyCode: "AED",
          },
          status: "archived",
          id: "<id>",
          createdAt: "1735440916132",
          updatedAt: "1737954314134",
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

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                                   | [operations.PostSubscriptionSubscriptionIdPauseData](../../models/operations/postsubscriptionsubscriptionidpausedata.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |