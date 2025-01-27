# PostPricesRequestBody

## Example Usage

```typescript
import { PostPricesRequestBody } from "jani-payments/models/operations";

let value: PostPricesRequestBody = {
  productId: "<id>",
  type: "standard",
  name: "<value>",
  billingCycle: {
    interval: "month",
    frequency: 2453.67,
  },
  trialPeriod: {
    interval: "week",
    frequency: 5573.69,
  },
  unitPrice: {
    amount: 8605.52,
    currencyCode: "RWF",
  },
  status: "active",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `productId`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `description`                                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `type`                                                                             | [operations.Type](../../models/operations/type.md)                                 | :heavy_check_mark:                                                                 | N/A                                                                                |
| `name`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `billingCycle`                                                                     | [operations.BillingCycle](../../models/operations/billingcycle.md)                 | :heavy_check_mark:                                                                 | N/A                                                                                |
| `trialPeriod`                                                                      | [operations.TrialPeriod](../../models/operations/trialperiod.md)                   | :heavy_check_mark:                                                                 | N/A                                                                                |
| `unitPrice`                                                                        | [operations.UnitPrice](../../models/operations/unitprice.md)                       | :heavy_check_mark:                                                                 | N/A                                                                                |
| `status`                                                                           | [operations.PostPricesStatus](../../models/operations/postpricesstatus.md)         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `customData`                                                                       | [operations.PostPricesCustomData](../../models/operations/postpricescustomdata.md) | :heavy_minus_sign:                                                                 | Any valid JSON value                                                               |