# SubscriptionUpdateSubscriptionSubscriptionItems

## Example Usage

```typescript
import { SubscriptionUpdateSubscriptionSubscriptionItems } from "jani-payments/models/operations";

let value: SubscriptionUpdateSubscriptionSubscriptionItems = {
  status: "inactive",
  priceId: "<id>",
  quantity: 83291,
  id: "<id>",
  subscriptionId: "<id>",
  recurring: false,
  createdAt: "1708058441413",
  updatedAt: "1737980744795",
  previouslyBilledAt: "<value>",
  nextBilledAt: "<value>",
  trialStartedAt: "<value>",
  trialEndedAt: "<value>",
  price: {
    productId: "<id>",
    type: "custom",
    name: "<value>",
    billingCycle: {
      interval: "day",
      frequency: 6.64,
    },
    trialPeriod: {
      interval: "year",
      frequency: 2783.25,
    },
    unitPrice: {
      amount: 1858.97,
      currencyCode: "PYG",
    },
    status: "active",
    id: "<id>",
    createdAt: "1714793714581",
    updatedAt: "1737981572329",
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `status`                                                                                                                                   | [operations.SubscriptionUpdateSubscriptionSubscriptionStatus](../../models/operations/subscriptionupdatesubscriptionsubscriptionstatus.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `priceId`                                                                                                                                  | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `quantity`                                                                                                                                 | *number*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `id`                                                                                                                                       | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `subscriptionId`                                                                                                                           | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `recurring`                                                                                                                                | *boolean*                                                                                                                                  | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `createdAt`                                                                                                                                | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `updatedAt`                                                                                                                                | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `previouslyBilledAt`                                                                                                                       | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `nextBilledAt`                                                                                                                             | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `trialStartedAt`                                                                                                                           | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `trialEndedAt`                                                                                                                             | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `customData`                                                                                                                               | *any*                                                                                                                                      | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `price`                                                                                                                                    | [operations.SubscriptionUpdateSubscriptionPrice](../../models/operations/subscriptionupdatesubscriptionprice.md)                           | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |