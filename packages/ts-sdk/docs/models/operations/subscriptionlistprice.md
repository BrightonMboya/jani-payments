# SubscriptionListPrice

## Example Usage

```typescript
import { SubscriptionListPrice } from "jani-payments/models/operations";

let value: SubscriptionListPrice = {
  productId: "<id>",
  type: "standard",
  name: "<value>",
  billingCycle: {
    interval: "week",
    frequency: 5305.37,
  },
  trialPeriod: {
    interval: "year",
    frequency: 894.94,
  },
  unitPrice: {
    amount: 4059.42,
    currencyCode: "AMD",
  },
  status: "active",
  id: "<id>",
  createdAt: "1726071925032",
  updatedAt: "1737922958174",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `productId`                                                                                                                            | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `description`                                                                                                                          | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `type`                                                                                                                                 | [operations.SubscriptionListSubscriptionType](../../models/operations/subscriptionlistsubscriptiontype.md)                             | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `name`                                                                                                                                 | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `billingCycle`                                                                                                                         | [operations.SubscriptionListSubscriptionBillingCycle](../../models/operations/subscriptionlistsubscriptionbillingcycle.md)             | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `trialPeriod`                                                                                                                          | [operations.SubscriptionListTrialPeriod](../../models/operations/subscriptionlisttrialperiod.md)                                       | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `unitPrice`                                                                                                                            | [operations.SubscriptionListUnitPrice](../../models/operations/subscriptionlistunitprice.md)                                           | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `status`                                                                                                                               | [operations.SubscriptionListSubscriptionResponse200Status](../../models/operations/subscriptionlistsubscriptionresponse200status.md)   | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `customData`                                                                                                                           | [operations.SubscriptionListSubscriptionResponseCustomData](../../models/operations/subscriptionlistsubscriptionresponsecustomdata.md) | :heavy_minus_sign:                                                                                                                     | Any valid JSON value                                                                                                                   |
| `id`                                                                                                                                   | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `createdAt`                                                                                                                            | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `updatedAt`                                                                                                                            | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |