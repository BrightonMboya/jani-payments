# GetSubscriptionItems

## Example Usage

```typescript
import { GetSubscriptionItems } from "jani-payments/models/operations";

let value: GetSubscriptionItems = {
  status: "inactive",
  priceId: "<id>",
  quantity: 591027,
  id: "<id>",
  subscriptionId: "<id>",
  recurring: false,
  createdAt: "1727231119791",
  updatedAt: "1737927253820",
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
    createdAt: "1728463294533",
    updatedAt: "1737921917942",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `status`                                                                                                     | [operations.GetSubscriptionSubscriptionStatus](../../models/operations/getsubscriptionsubscriptionstatus.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `priceId`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `quantity`                                                                                                   | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `subscriptionId`                                                                                             | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `recurring`                                                                                                  | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `createdAt`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `updatedAt`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `previouslyBilledAt`                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `nextBilledAt`                                                                                               | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `trialStartedAt`                                                                                             | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `trialEndedAt`                                                                                               | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `customData`                                                                                                 | *any*                                                                                                        | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `price`                                                                                                      | [operations.GetSubscriptionPrice](../../models/operations/getsubscriptionprice.md)                           | :heavy_check_mark:                                                                                           | N/A                                                                                                          |