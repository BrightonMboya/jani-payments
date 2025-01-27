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
    currencyCode: "SOS",
    createdAt: "1722814590752",
    updatedAt: "1737903033892",
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
      frequency: 472414,
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
        quantity: 357758,
        id: "<id>",
        subscriptionId: "<id>",
        recurring: false,
        createdAt: "1711609671839",
        updatedAt: "1737935459428",
        previouslyBilledAt: "<value>",
        nextBilledAt: "<value>",
        trialStartedAt: "<value>",
        trialEndedAt: "<value>",
        price: {
          productId: "<id>",
          type: "standard",
          name: "<value>",
          billingCycle: {
            interval: "month",
            frequency: 351.6,
          },
          trialPeriod: {
            interval: "year",
            frequency: 8163.65,
          },
          unitPrice: {
            amount: 5525.81,
            currencyCode: "TRY",
          },
          status: "archived",
          id: "<id>",
          createdAt: "1709933156098",
          updatedAt: "1737951828382",
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