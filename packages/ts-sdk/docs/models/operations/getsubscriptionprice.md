# GetSubscriptionPrice

## Example Usage

```typescript
import { GetSubscriptionPrice } from "jani-payments/models/operations";

let value: GetSubscriptionPrice = {
  productId: "<id>",
  type: "standard",
  name: "<value>",
  billingCycle: {
    interval: "week",
    frequency: 2384.13,
  },
  trialPeriod: {
    interval: "month",
    frequency: 3679.27,
  },
  unitPrice: {
    amount: 4565.2,
    currencyCode: "GYD",
  },
  status: "archived",
  id: "<id>",
  createdAt: "1710651477017",
  updatedAt: "1737901294995",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `productId`                                                                                                                          | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `description`                                                                                                                        | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `type`                                                                                                                               | [operations.GetSubscriptionSubscriptionType](../../models/operations/getsubscriptionsubscriptiontype.md)                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `name`                                                                                                                               | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `billingCycle`                                                                                                                       | [operations.GetSubscriptionSubscriptionBillingCycle](../../models/operations/getsubscriptionsubscriptionbillingcycle.md)             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `trialPeriod`                                                                                                                        | [operations.GetSubscriptionTrialPeriod](../../models/operations/getsubscriptiontrialperiod.md)                                       | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `unitPrice`                                                                                                                          | [operations.GetSubscriptionUnitPrice](../../models/operations/getsubscriptionunitprice.md)                                           | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `status`                                                                                                                             | [operations.GetSubscriptionSubscriptionResponse200Status](../../models/operations/getsubscriptionsubscriptionresponse200status.md)   | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `customData`                                                                                                                         | [operations.GetSubscriptionSubscriptionResponseCustomData](../../models/operations/getsubscriptionsubscriptionresponsecustomdata.md) | :heavy_minus_sign:                                                                                                                   | Any valid JSON value                                                                                                                 |
| `id`                                                                                                                                 | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `createdAt`                                                                                                                          | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `updatedAt`                                                                                                                          | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |