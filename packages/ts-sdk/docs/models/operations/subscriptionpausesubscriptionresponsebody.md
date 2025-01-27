# SubscriptionPauseSubscriptionResponseBody

Pause a subscription given its id

## Example Usage

```typescript
import { SubscriptionPauseSubscriptionResponseBody } from "jani-payments/models/operations";

let value: SubscriptionPauseSubscriptionResponseBody = {
  data: {
    id: "<id>",
    status: "<value>",
    customerId: "<id>",
    addressId: "<id>",
    currencyCode: "VES",
    createdAt: "1708003993292",
    updatedAt: "1737922630235",
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
        createdAt: "1721368761453",
        updatedAt: "1737973553384",
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
          createdAt: "1735445309623",
          updatedAt: "1737958707625",
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

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                       | [operations.SubscriptionPauseSubscriptionData](../../models/operations/subscriptionpausesubscriptiondata.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |