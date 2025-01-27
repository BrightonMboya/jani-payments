# SubscriptionPauseSubscriptionItems

## Example Usage

```typescript
import { SubscriptionPauseSubscriptionItems } from "jani-payments/models/operations";

let value: SubscriptionPauseSubscriptionItems = {
  status: "active",
  priceId: "<id>",
  quantity: 403026,
  id: "<id>",
  subscriptionId: "<id>",
  recurring: false,
  createdAt: "1729950913135",
  updatedAt: "1737944371530",
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
      frequency: 4254.02,
    },
    trialPeriod: {
      interval: "day",
      frequency: 2082.53,
    },
    unitPrice: {
      amount: 9323.94,
      currencyCode: "CZK",
    },
    status: "archived",
    id: "<id>",
    createdAt: "1731769291816",
    updatedAt: "1737912597328",
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