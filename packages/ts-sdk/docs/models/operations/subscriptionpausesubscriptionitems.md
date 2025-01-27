# SubscriptionPauseSubscriptionItems

## Example Usage

```typescript
import { SubscriptionPauseSubscriptionItems } from "jani-payments/models/operations";

let value: SubscriptionPauseSubscriptionItems = {
  status: "trialing",
  priceId: "<id>",
  quantity: 391797,
  id: "<id>",
  subscriptionId: "<id>",
  recurring: false,
  createdAt: "1714085068836",
  updatedAt: "1737918959089",
  previouslyBilledAt: "<value>",
  nextBilledAt: "<value>",
  trialStartedAt: "<value>",
  trialEndedAt: "<value>",
  price: {
    productId: "<id>",
    type: "standard",
    name: "<value>",
    billingCycle: {
      interval: "day",
      frequency: 6397.05,
    },
    trialPeriod: {
      interval: "week",
      frequency: 3774.06,
    },
    unitPrice: {
      amount: 8093.65,
      currencyCode: "RSD",
    },
    status: "archived",
    id: "<id>",
    createdAt: "1717546385863",
    updatedAt: "1737974871733",
  },
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                 | [operations.SubscriptionPauseSubscriptionSubscriptionStatus](../../models/operations/subscriptionpausesubscriptionsubscriptionstatus.md) | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `priceId`                                                                                                                                | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `quantity`                                                                                                                               | *number*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `id`                                                                                                                                     | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `subscriptionId`                                                                                                                         | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `recurring`                                                                                                                              | *boolean*                                                                                                                                | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `createdAt`                                                                                                                              | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `updatedAt`                                                                                                                              | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `previouslyBilledAt`                                                                                                                     | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `nextBilledAt`                                                                                                                           | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `trialStartedAt`                                                                                                                         | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `trialEndedAt`                                                                                                                           | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `customData`                                                                                                                             | *any*                                                                                                                                    | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `price`                                                                                                                                  | [operations.SubscriptionPauseSubscriptionPrice](../../models/operations/subscriptionpausesubscriptionprice.md)                           | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |