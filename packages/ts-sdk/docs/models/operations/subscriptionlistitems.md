# SubscriptionListItems

## Example Usage

```typescript
import { SubscriptionListItems } from "jani-payments/models/operations";

let value: SubscriptionListItems = {
  status: "inactive",
  priceId: "<id>",
  quantity: 676243,
  id: "<id>",
  subscriptionId: "<id>",
  recurring: false,
  createdAt: "1734175271347",
  updatedAt: "1737944297979",
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
      frequency: 7103.37,
    },
    trialPeriod: {
      interval: "day",
      frequency: 3726.79,
    },
    unitPrice: {
      amount: 5305.37,
      currencyCode: "VUV",
    },
    status: "active",
    id: "<id>",
    createdAt: "1719249521399",
    updatedAt: "1737899425375",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                       | [operations.SubscriptionListSubscriptionStatus](../../models/operations/subscriptionlistsubscriptionstatus.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `priceId`                                                                                                      | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `quantity`                                                                                                     | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `subscriptionId`                                                                                               | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `recurring`                                                                                                    | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `createdAt`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `updatedAt`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `previouslyBilledAt`                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `nextBilledAt`                                                                                                 | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `trialStartedAt`                                                                                               | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `trialEndedAt`                                                                                                 | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `customData`                                                                                                   | *any*                                                                                                          | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `price`                                                                                                        | [operations.SubscriptionListPrice](../../models/operations/subscriptionlistprice.md)                           | :heavy_check_mark:                                                                                             | N/A                                                                                                            |