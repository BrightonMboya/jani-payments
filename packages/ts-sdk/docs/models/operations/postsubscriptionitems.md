# PostSubscriptionItems

## Example Usage

```typescript
import { PostSubscriptionItems } from "jani-payments/models/operations";

let value: PostSubscriptionItems = {
  status: "trialing",
  priceId: "<id>",
  quantity: 89494,
  id: "<id>",
  subscriptionId: "<id>",
  recurring: false,
  createdAt: "1719245127841",
  updatedAt: "1737895031817",
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
      frequency: 2790.68,
    },
    trialPeriod: {
      interval: "day",
      frequency: 1157.03,
    },
    unitPrice: {
      amount: 5771.4,
      currencyCode: "QAR",
    },
    status: "archived",
    id: "<id>",
    createdAt: "1736366611383",
    updatedAt: "1737893164736",
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `status`                                                                                                                       | [operations.PostSubscriptionSubscriptionResponseStatus](../../models/operations/postsubscriptionsubscriptionresponsestatus.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `priceId`                                                                                                                      | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `quantity`                                                                                                                     | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `id`                                                                                                                           | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `subscriptionId`                                                                                                               | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `recurring`                                                                                                                    | *boolean*                                                                                                                      | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `createdAt`                                                                                                                    | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `updatedAt`                                                                                                                    | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `previouslyBilledAt`                                                                                                           | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `nextBilledAt`                                                                                                                 | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `trialStartedAt`                                                                                                               | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `trialEndedAt`                                                                                                                 | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `customData`                                                                                                                   | *any*                                                                                                                          | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `price`                                                                                                                        | [operations.PostSubscriptionPrice](../../models/operations/postsubscriptionprice.md)                                           | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |