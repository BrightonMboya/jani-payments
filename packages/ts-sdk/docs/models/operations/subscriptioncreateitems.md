# SubscriptionCreateItems

## Example Usage

```typescript
import { SubscriptionCreateItems } from "jani-payments/models/operations";

let value: SubscriptionCreateItems = {
  status: "inactive",
  priceId: "<id>",
  quantity: 591027,
  id: "<id>",
  subscriptionId: "<id>",
  recurring: false,
  createdAt: "1727235513356",
  updatedAt: "1737931647385",
  previouslyBilledAt: "<value>",
  nextBilledAt: "<value>",
  trialStartedAt: "<value>",
  trialEndedAt: "<value>",
  price: {
    productId: "<id>",
    type: "custom",
    name: "<value>",
    billingCycle: {
      interval: "week",
      frequency: 7214.07,
    },
    trialPeriod: {
      interval: "month",
      frequency: 8130.54,
    },
    unitPrice: {
      amount: 9762.26,
      currencyCode: "USD",
    },
    status: "archived",
    id: "<id>",
    createdAt: "1728467688098",
    updatedAt: "1737926311506",
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