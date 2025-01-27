# SubscriptionListItems

## Example Usage

```typescript
import { SubscriptionListItems } from "jani-payments/models/operations";

let value: SubscriptionListItems = {
  status: "active",
  priceId: "<id>",
  quantity: 115703,
  id: "<id>",
  subscriptionId: "<id>",
  recurring: false,
  createdAt: "1724649941144",
  updatedAt: "1737958917619",
  previouslyBilledAt: "<value>",
  nextBilledAt: "<value>",
  trialStartedAt: "<value>",
  trialEndedAt: "<value>",
  price: {
    productId: "<id>",
    type: "custom",
    name: "<value>",
    billingCycle: {
      interval: "year",
      frequency: 27.03,
    },
    trialPeriod: {
      interval: "month",
      frequency: 6003.92,
    },
    unitPrice: {
      amount: 5887.4,
      currencyCode: "YER",
    },
    status: "active",
    id: "<id>",
    createdAt: "1728413516225",
    updatedAt: "1737969148009",
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