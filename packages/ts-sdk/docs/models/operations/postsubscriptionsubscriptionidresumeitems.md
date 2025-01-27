# PostSubscriptionSubscriptionIdResumeItems

## Example Usage

```typescript
import { PostSubscriptionSubscriptionIdResumeItems } from "jani-payments/models/operations";

let value: PostSubscriptionSubscriptionIdResumeItems = {
  status: "trialing",
  priceId: "<id>",
  quantity: 795591,
  id: "<id>",
  subscriptionId: "<id>",
  recurring: false,
  createdAt: "1717308443773",
  updatedAt: "1737959534143",
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
      frequency: 8659.46,
    },
    trialPeriod: {
      interval: "week",
      frequency: 4864.1,
    },
    unitPrice: {
      amount: 4483.69,
      currencyCode: "MRU",
    },
    status: "archived",
    id: "<id>",
    createdAt: "1722153921795",
    updatedAt: "1737967821171",
  },
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `status`                                                                                                                                               | [operations.PostSubscriptionSubscriptionIdResumeSubscriptionStatus](../../models/operations/postsubscriptionsubscriptionidresumesubscriptionstatus.md) | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
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
| `price`                                                                                                                                                | [operations.PostSubscriptionSubscriptionIdResumePrice](../../models/operations/postsubscriptionsubscriptionidresumeprice.md)                           | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |