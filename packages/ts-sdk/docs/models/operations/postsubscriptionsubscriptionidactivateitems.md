# PostSubscriptionSubscriptionIdActivateItems

## Example Usage

```typescript
import { PostSubscriptionSubscriptionIdActivateItems } from "jani-payments/models/operations";

let value: PostSubscriptionSubscriptionIdActivateItems = {
  status: "active",
  priceId: "<id>",
  quantity: 939161,
  id: "<id>",
  subscriptionId: "<id>",
  recurring: false,
  createdAt: "1722410393353",
  updatedAt: "1737979314025",
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
      frequency: 2902.48,
    },
    trialPeriod: {
      interval: "week",
      frequency: 5910.65,
    },
    unitPrice: {
      amount: 9217.19,
      currencyCode: "SYP",
    },
    status: "archived",
    id: "<id>",
    createdAt: "1724077435397",
    updatedAt: "1737972617233",
  },
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                                   | [operations.PostSubscriptionSubscriptionIdActivateSubscriptionStatus](../../models/operations/postsubscriptionsubscriptionidactivatesubscriptionstatus.md) | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `priceId`                                                                                                                                                  | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `quantity`                                                                                                                                                 | *number*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `id`                                                                                                                                                       | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `subscriptionId`                                                                                                                                           | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `recurring`                                                                                                                                                | *boolean*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `createdAt`                                                                                                                                                | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `updatedAt`                                                                                                                                                | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `previouslyBilledAt`                                                                                                                                       | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `nextBilledAt`                                                                                                                                             | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `trialStartedAt`                                                                                                                                           | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `trialEndedAt`                                                                                                                                             | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `customData`                                                                                                                                               | *any*                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |
| `price`                                                                                                                                                    | [operations.PostSubscriptionSubscriptionIdActivatePrice](../../models/operations/postsubscriptionsubscriptionidactivateprice.md)                           | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |