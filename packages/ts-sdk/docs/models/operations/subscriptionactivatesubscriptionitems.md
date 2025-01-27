# SubscriptionActivateSubscriptionItems

## Example Usage

```typescript
import { SubscriptionActivateSubscriptionItems } from "jani-payments/models/operations";

let value: SubscriptionActivateSubscriptionItems = {
  status: "trialing",
  priceId: "<id>",
  quantity: 97676,
  id: "<id>",
  subscriptionId: "<id>",
  recurring: false,
  createdAt: "1722687833423",
  updatedAt: "1737979925239",
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
      frequency: 5928.8,
    },
    trialPeriod: {
      interval: "day",
      frequency: 4758.26,
    },
    unitPrice: {
      amount: 7087.71,
      currencyCode: "ARS",
    },
    status: "archived",
    id: "<id>",
    createdAt: "1722850534413",
    updatedAt: "1737901496461",
  },
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                       | [operations.SubscriptionActivateSubscriptionSubscriptionStatus](../../models/operations/subscriptionactivatesubscriptionsubscriptionstatus.md) | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `priceId`                                                                                                                                      | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `quantity`                                                                                                                                     | *number*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `id`                                                                                                                                           | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `subscriptionId`                                                                                                                               | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `recurring`                                                                                                                                    | *boolean*                                                                                                                                      | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `createdAt`                                                                                                                                    | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `updatedAt`                                                                                                                                    | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `previouslyBilledAt`                                                                                                                           | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `nextBilledAt`                                                                                                                                 | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `trialStartedAt`                                                                                                                               | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `trialEndedAt`                                                                                                                                 | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `customData`                                                                                                                                   | *any*                                                                                                                                          | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |
| `price`                                                                                                                                        | [operations.SubscriptionActivateSubscriptionPrice](../../models/operations/subscriptionactivatesubscriptionprice.md)                           | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |