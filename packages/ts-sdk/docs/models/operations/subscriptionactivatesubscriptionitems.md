# SubscriptionActivateSubscriptionItems

## Example Usage

```typescript
import { SubscriptionActivateSubscriptionItems } from "jani-payments/models/operations";

let value: SubscriptionActivateSubscriptionItems = {
  status: "active",
  priceId: "<id>",
  quantity: 939161,
  id: "<id>",
  subscriptionId: "<id>",
  recurring: false,
  createdAt: "1722414786843",
  updatedAt: "1737983707515",
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
    createdAt: "1724081828887",
    updatedAt: "1737977010723",
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