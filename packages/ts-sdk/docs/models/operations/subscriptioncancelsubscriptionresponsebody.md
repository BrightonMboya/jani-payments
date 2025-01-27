# SubscriptionCancelSubscriptionResponseBody

Cancels an active subscription given its id

## Example Usage

```typescript
import { SubscriptionCancelSubscriptionResponseBody } from "jani-payments/models/operations";

let value: SubscriptionCancelSubscriptionResponseBody = {
  data: {
    id: "<id>",
    status: "<value>",
    customerId: "<id>",
    addressId: "<id>",
    currencyCode: "BDT",
    createdAt: "1734259212128",
    updatedAt: "1737959499350",
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
        createdAt: "1722870457053",
        updatedAt: "1737920411309",
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
          createdAt: "1717047045627",
          updatedAt: "1737973414600",
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
| `data`                                                                                                         | [operations.SubscriptionCancelSubscriptionData](../../models/operations/subscriptioncancelsubscriptiondata.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |