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
    currencyCode: "BWP",
    createdAt: "1717770522014",
    updatedAt: "1737979813251",
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
      frequency: 923306,
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
        status: "inactive",
        priceId: "<id>",
        quantity: 963198,
        id: "<id>",
        subscriptionId: "<id>",
        recurring: false,
        createdAt: "1711110310000",
        updatedAt: "1737921044618",
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
            frequency: 8989.61,
          },
          trialPeriod: {
            interval: "day",
            frequency: 5326.69,
          },
          unitPrice: {
            amount: 3262.69,
            currencyCode: "GMD",
          },
          status: "active",
          id: "<id>",
          createdAt: "1720106777279",
          updatedAt: "1737929721690",
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