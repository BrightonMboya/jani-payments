# SubscriptionCancelSubscriptionItems

## Example Usage

```typescript
import { SubscriptionCancelSubscriptionItems } from "jani-payments/models/operations";

let value: SubscriptionCancelSubscriptionItems = {
  status: "active",
  priceId: "<id>",
  quantity: 100014,
  id: "<id>",
  subscriptionId: "<id>",
  recurring: false,
  createdAt: "1714806016529",
  updatedAt: "1737903040114",
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
    createdAt: "1720102314364",
    updatedAt: "1737942963765",
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `status`                                                                                                                                   | [operations.SubscriptionCancelSubscriptionSubscriptionStatus](../../models/operations/subscriptioncancelsubscriptionsubscriptionstatus.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
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
| `price`                                                                                                                                    | [operations.SubscriptionCancelSubscriptionPrice](../../models/operations/subscriptioncancelsubscriptionprice.md)                           | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |