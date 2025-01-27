# SubscriptionUpdateSubscriptionResponseBody

Updates a Subscription given its Id

## Example Usage

```typescript
import { SubscriptionUpdateSubscriptionResponseBody } from "jani-payments/models/operations";

let value: SubscriptionUpdateSubscriptionResponseBody = {
  data: {
    id: "<id>",
    status: "<value>",
    customerId: "<id>",
    addressId: "<id>",
    currencyCode: "AED",
    createdAt: "1712722115144",
    updatedAt: "1737981455578",
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
      frequency: 330440,
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
        status: "trialing",
        priceId: "<id>",
        quantity: 728559,
        id: "<id>",
        subscriptionId: "<id>",
        recurring: false,
        createdAt: "1716845126070",
        updatedAt: "1737967254889",
        previouslyBilledAt: "<value>",
        nextBilledAt: "<value>",
        trialStartedAt: "<value>",
        trialEndedAt: "<value>",
        price: {
          productId: "<id>",
          type: "standard",
          name: "<value>",
          billingCycle: {
            interval: "week",
            frequency: 2212.18,
          },
          trialPeriod: {
            interval: "month",
            frequency: 1024.46,
          },
          unitPrice: {
            amount: 3970.26,
            currencyCode: "FJD",
          },
          status: "archived",
          id: "<id>",
          createdAt: "1717483620397",
          updatedAt: "1737959880663",
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

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                         | [operations.SubscriptionUpdateSubscriptionData](../../models/operations/subscriptionupdatesubscriptiondata.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |