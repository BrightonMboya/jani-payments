# PostSubscriptionSubscriptionIdCancelResponseBody

Cancels an active subscription given its id

## Example Usage

```typescript
import { PostSubscriptionSubscriptionIdCancelResponseBody } from "jani-payments/models/operations";

let value: PostSubscriptionSubscriptionIdCancelResponseBody = {
  data: {
    id: "<id>",
    status: "<value>",
    customerId: "<id>",
    addressId: "<id>",
    currencyCode: "BDT",
    createdAt: "1734254818558",
    updatedAt: "1737955105780",
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
      frequency: 966390,
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
        status: "inactive",
        priceId: "<id>",
        quantity: 930819,
        id: "<id>",
        subscriptionId: "<id>",
        recurring: false,
        createdAt: "1722866063484",
        updatedAt: "1737916017740",
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
            frequency: 13.83,
          },
          trialPeriod: {
            interval: "day",
            frequency: 3182.33,
          },
          unitPrice: {
            amount: 8587.78,
            currencyCode: "KPW",
          },
          status: "active",
          id: "<id>",
          createdAt: "1717042652057",
          updatedAt: "1737969021031",
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

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                     | [operations.PostSubscriptionSubscriptionIdCancelData](../../models/operations/postsubscriptionsubscriptionidcanceldata.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |