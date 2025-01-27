# GetPricesResponseBody

## Example Usage

```typescript
import { GetPricesResponseBody } from "jani-payments/models/operations";

let value: GetPricesResponseBody = {
  productId: "<id>",
  type: "standard",
  name: "<value>",
  billingCycle: {
    interval: "month",
    frequency: 2243.17,
  },
  trialPeriod: {
    interval: "day",
    frequency: 8621.92,
  },
  unitPrice: {
    amount: 9729.2,
    currencyCode: "XPF",
  },
  status: "archived",
  id: "<id>",
  createdAt: "1730853686848",
  updatedAt: "1737921714346",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `productId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `description`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `type`                                                                               | [operations.GetPricesType](../../models/operations/getpricestype.md)                 | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `billingCycle`                                                                       | [operations.GetPricesBillingCycle](../../models/operations/getpricesbillingcycle.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `trialPeriod`                                                                        | [operations.GetPricesTrialPeriod](../../models/operations/getpricestrialperiod.md)   | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `unitPrice`                                                                          | [operations.GetPricesUnitPrice](../../models/operations/getpricesunitprice.md)       | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `status`                                                                             | [operations.GetPricesStatus](../../models/operations/getpricesstatus.md)             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `customData`                                                                         | [operations.GetPricesCustomData](../../models/operations/getpricescustomdata.md)     | :heavy_minus_sign:                                                                   | Any valid JSON value                                                                 |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `createdAt`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `updatedAt`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |