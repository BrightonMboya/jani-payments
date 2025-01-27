# PostSubscriptionSubscriptionIdActivateResponseBody

Activates a subscription given its id

## Example Usage

```typescript
import { PostSubscriptionSubscriptionIdActivateResponseBody } from "jani-payments/models/operations";

let value: PostSubscriptionSubscriptionIdActivateResponseBody = {
  data: {
    id: "<id>",
    status: "<value>",
    customerId: "<id>",
    addressId: "<id>",
    currencyCode: "GBP",
    createdAt: "1720845936673",
    updatedAt: "1737894741650",
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
      frequency: 411615,
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
        quantity: 753240,
        id: "<id>",
        subscriptionId: "<id>",
        recurring: false,
        createdAt: "1713880599441",
        updatedAt: "1737946542157",
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
            frequency: 7782.76,
          },
          trialPeriod: {
            interval: "year",
            frequency: 4904.2,
          },
          unitPrice: {
            amount: 1853.48,
            currencyCode: "ZWL",
          },
          status: "active",
          id: "<id>",
          createdAt: "1721311209139",
          updatedAt: "1737898814762",
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

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                                         | [operations.PostSubscriptionSubscriptionIdActivateData](../../models/operations/postsubscriptionsubscriptionidactivatedata.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |