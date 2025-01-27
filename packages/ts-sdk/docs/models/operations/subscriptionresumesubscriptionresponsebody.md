# SubscriptionResumeSubscriptionResponseBody

Resumes a subscription given its id

## Example Usage

```typescript
import { SubscriptionResumeSubscriptionResponseBody } from "jani-payments/models/operations";

let value: SubscriptionResumeSubscriptionResponseBody = {
  data: {
    id: "<id>",
    status: "<value>",
    customerId: "<id>",
    addressId: "<id>",
    currencyCode: "GYD",
    createdAt: "1729400241486",
    updatedAt: "1737969279754",
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
      frequency: 217663,
      interval: "<value>",
    },
    scheduledChange: [
      {
        id: "<id>",
        subscriptionId: "<id>",
        action: "cancel",
        effectiveAt: "<value>",
        status: "completed",
      },
    ],
    items: [
      {
        status: "active",
        priceId: "<id>",
        quantity: 179795,
        id: "<id>",
        subscriptionId: "<id>",
        recurring: false,
        createdAt: "1717345113376",
        updatedAt: "1737940324124",
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
            frequency: 8894.48,
          },
          trialPeriod: {
            interval: "day",
            frequency: 6228.94,
          },
          unitPrice: {
            amount: 1114.96,
            currencyCode: "KPW",
          },
          status: "active",
          id: "<id>",
          createdAt: "1716430414536",
          updatedAt: "1737940542140",
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
| `data`                                                                                                         | [operations.SubscriptionResumeSubscriptionData](../../models/operations/subscriptionresumesubscriptiondata.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |