# PostSubscriptionSubscriptionIdCancelItems

## Example Usage

```typescript
import { PostSubscriptionSubscriptionIdCancelItems } from "jani-payments/models/operations";

let value: PostSubscriptionSubscriptionIdCancelItems = {
  status: "active",
  priceId: "<id>",
  quantity: 100014,
  id: "<id>",
  subscriptionId: "<id>",
  recurring: false,
  createdAt: "1714801622959",
  updatedAt: "1737898646545",
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
      frequency: 1621.2,
    },
    trialPeriod: {
      interval: "month",
      frequency: 7734.56,
    },
    unitPrice: {
      amount: 4564.1,
      currencyCode: "BZD",
    },
    status: "active",
    id: "<id>",
    createdAt: "1720097920794",
    updatedAt: "1737938570195",
  },
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `status`                                                                                                                                               | [operations.PostSubscriptionSubscriptionIdCancelSubscriptionStatus](../../models/operations/postsubscriptionsubscriptionidcancelsubscriptionstatus.md) | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `priceId`                                                                                                                                              | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `quantity`                                                                                                                                             | *number*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `id`                                                                                                                                                   | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `subscriptionId`                                                                                                                                       | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `recurring`                                                                                                                                            | *boolean*                                                                                                                                              | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `createdAt`                                                                                                                                            | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `updatedAt`                                                                                                                                            | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `previouslyBilledAt`                                                                                                                                   | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `nextBilledAt`                                                                                                                                         | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `trialStartedAt`                                                                                                                                       | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `trialEndedAt`                                                                                                                                         | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `customData`                                                                                                                                           | *any*                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `price`                                                                                                                                                | [operations.PostSubscriptionSubscriptionIdCancelPrice](../../models/operations/postsubscriptionsubscriptionidcancelprice.md)                           | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |