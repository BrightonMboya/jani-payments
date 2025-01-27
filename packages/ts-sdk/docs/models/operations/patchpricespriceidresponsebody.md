# PatchPricesPriceIdResponseBody

Returns the updated Price

## Example Usage

```typescript
import { PatchPricesPriceIdResponseBody } from "jani-payments/models/operations";

let value: PatchPricesPriceIdResponseBody = {
  productId: "<id>",
  type: "standard",
  name: "<value>",
  billingCycle: {
    interval: "year",
    frequency: 5757.51,
  },
  trialPeriod: {
    interval: "year",
    frequency: 9088.44,
  },
  unitPrice: {
    amount: 8155.24,
    currencyCode: "CAD",
  },
  status: "archived",
  id: "<id>",
  createdAt: "1719008353391",
  updatedAt: "1737898349346",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `productId`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `description`                                                                                                      | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `type`                                                                                                             | [operations.PatchPricesPriceIdPricesType](../../models/operations/patchpricespriceidpricestype.md)                 | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `name`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `billingCycle`                                                                                                     | [operations.PatchPricesPriceIdPricesBillingCycle](../../models/operations/patchpricespriceidpricesbillingcycle.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `trialPeriod`                                                                                                      | [operations.PatchPricesPriceIdPricesTrialPeriod](../../models/operations/patchpricespriceidpricestrialperiod.md)   | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `unitPrice`                                                                                                        | [operations.PatchPricesPriceIdPricesUnitPrice](../../models/operations/patchpricespriceidpricesunitprice.md)       | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `status`                                                                                                           | [operations.PatchPricesPriceIdPricesStatus](../../models/operations/patchpricespriceidpricesstatus.md)             | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `customData`                                                                                                       | [operations.PatchPricesPriceIdPricesCustomData](../../models/operations/patchpricespriceidpricescustomdata.md)     | :heavy_minus_sign:                                                                                                 | Any valid JSON value                                                                                               |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `createdAt`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `updatedAt`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |