# GetPricesPriceIdResponseBody

Returns a Price by its Id

## Example Usage

```typescript
import { GetPricesPriceIdResponseBody } from "jani-payments/models/operations";

let value: GetPricesPriceIdResponseBody = {
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
  createdAt: "1736604540899",
  updatedAt: "1737909098903",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `productId`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `description`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `type`                                                                                             | [operations.GetPricesPriceIdType](../../models/operations/getpricespriceidtype.md)                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `name`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `billingCycle`                                                                                     | [operations.GetPricesPriceIdBillingCycle](../../models/operations/getpricespriceidbillingcycle.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `trialPeriod`                                                                                      | [operations.GetPricesPriceIdTrialPeriod](../../models/operations/getpricespriceidtrialperiod.md)   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `unitPrice`                                                                                        | [operations.GetPricesPriceIdUnitPrice](../../models/operations/getpricespriceidunitprice.md)       | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `status`                                                                                           | [operations.GetPricesPriceIdStatus](../../models/operations/getpricespriceidstatus.md)             | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `customData`                                                                                       | [operations.GetPricesPriceIdCustomData](../../models/operations/getpricespriceidcustomdata.md)     | :heavy_minus_sign:                                                                                 | Any valid JSON value                                                                               |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `createdAt`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `updatedAt`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |