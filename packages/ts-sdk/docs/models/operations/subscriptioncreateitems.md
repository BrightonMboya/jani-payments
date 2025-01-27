# SubscriptionCreateItems

## Example Usage

```typescript
import { SubscriptionCreateItems } from "jani-payments/models/operations";

let value: SubscriptionCreateItems = {
  status: "inactive",
  priceId: "<id>",
  quantity: 773084,
  id: "<id>",
  subscriptionId: "<id>",
  recurring: false,
  createdAt: "1736684099857",
  updatedAt: "1737908983438",
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
      frequency: 7453.98,
    },
    trialPeriod: {
      interval: "year",
      frequency: 9358.33,
    },
    unitPrice: {
      amount: 9834.27,
      currencyCode: "IRR",
    },
    status: "active",
    id: "<id>",
    createdAt: "1711110541347",
    updatedAt: "1737958024718",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                           | [operations.SubscriptionCreateSubscriptionResponseStatus](../../models/operations/subscriptioncreatesubscriptionresponsestatus.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `priceId`                                                                                                                          | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `quantity`                                                                                                                         | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `subscriptionId`                                                                                                                   | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `recurring`                                                                                                                        | *boolean*                                                                                                                          | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `createdAt`                                                                                                                        | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `updatedAt`                                                                                                                        | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `previouslyBilledAt`                                                                                                               | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `nextBilledAt`                                                                                                                     | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `trialStartedAt`                                                                                                                   | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `trialEndedAt`                                                                                                                     | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `customData`                                                                                                                       | *any*                                                                                                                              | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `price`                                                                                                                            | [operations.SubscriptionCreatePrice](../../models/operations/subscriptioncreateprice.md)                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |