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
    currencyCode: "MNT",
    createdAt: "1732523631697",
    updatedAt: "1737960013838",
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
      frequency: 38557,
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
        status: "trialing",
        priceId: "<id>",
        quantity: 42924,
        id: "<id>",
        subscriptionId: "<id>",
        recurring: false,
        createdAt: "1716951484357",
        updatedAt: "1737905941838",
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
            frequency: 2981.87,
          },
          trialPeriod: {
            interval: "day",
            frequency: 3302.67,
          },
          unitPrice: {
            amount: 8138.8,
            currencyCode: "BWP",
          },
          status: "active",
          id: "<id>",
          createdAt: "1708619040496",
          updatedAt: "1737958297655",
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