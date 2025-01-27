# PricesGetPriceResponseBody

Returns a Price by its Id

## Example Usage

```typescript
import { PricesGetPriceResponseBody } from "jani-payments/models/operations";

let value: PricesGetPriceResponseBody = {
  productId: "<id>",
  type: "standard",
  name: "<value>",
  billingCycle: {
    interval: "week",
    frequency: 5100.17,
  },
  trialPeriod: {
    interval: "month",
    frequency: 6813.93,
  },
  unitPrice: {
    amount: 2775.96,
    currencyCode: "BRL",
  },
  status: "active",
  id: "<id>",
  createdAt: "1736610456720",
  updatedAt: "1737915014724",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `productId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `description`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `type`                                                                                         | [operations.PricesGetPriceType](../../models/operations/pricesgetpricetype.md)                 | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `name`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `billingCycle`                                                                                 | [operations.PricesGetPriceBillingCycle](../../models/operations/pricesgetpricebillingcycle.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `trialPeriod`                                                                                  | [operations.PricesGetPriceTrialPeriod](../../models/operations/pricesgetpricetrialperiod.md)   | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `unitPrice`                                                                                    | [operations.PricesGetPriceUnitPrice](../../models/operations/pricesgetpriceunitprice.md)       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `status`                                                                                       | [operations.PricesGetPriceStatus](../../models/operations/pricesgetpricestatus.md)             | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `customData`                                                                                   | [operations.PricesGetPriceCustomData](../../models/operations/pricesgetpricecustomdata.md)     | :heavy_minus_sign:                                                                             | Any valid JSON value                                                                           |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `createdAt`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `updatedAt`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |