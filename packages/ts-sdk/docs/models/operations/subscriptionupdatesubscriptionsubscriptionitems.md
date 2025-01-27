# SubscriptionUpdateSubscriptionSubscriptionItems

## Example Usage

```typescript
import { SubscriptionUpdateSubscriptionSubscriptionItems } from "jani-payments/models/operations";

let value: SubscriptionUpdateSubscriptionSubscriptionItems = {
  status: "trialing",
  priceId: "<id>",
  quantity: 524577,
  id: "<id>",
  subscriptionId: "<id>",
  recurring: false,
  createdAt: "1717620081096",
  updatedAt: "1737909239311",
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
      frequency: 1002.51,
    },
    trialPeriod: {
      interval: "year",
      frequency: 170.6,
    },
    unitPrice: {
      amount: 9670.55,
      currencyCode: "NGN",
    },
    status: "archived",
    id: "<id>",
    createdAt: "1715782321126",
    updatedAt: "1737979137342",
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