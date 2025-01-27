# PricesUpdateResponseBody

Returns the updated Price

## Example Usage

```typescript
import { PricesUpdateResponseBody } from "jani-payments/models/operations";

let value: PricesUpdateResponseBody = {
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
  createdAt: "1719014269214",
  updatedAt: "1737904265169",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `productId`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `description`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `type`                                                                                                 | [operations.PricesUpdatePricesType](../../models/operations/pricesupdatepricestype.md)                 | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `billingCycle`                                                                                         | [operations.PricesUpdatePricesBillingCycle](../../models/operations/pricesupdatepricesbillingcycle.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `trialPeriod`                                                                                          | [operations.PricesUpdatePricesTrialPeriod](../../models/operations/pricesupdatepricestrialperiod.md)   | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `unitPrice`                                                                                            | [operations.PricesUpdatePricesUnitPrice](../../models/operations/pricesupdatepricesunitprice.md)       | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `status`                                                                                               | [operations.PricesUpdatePricesStatus](../../models/operations/pricesupdatepricesstatus.md)             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `customData`                                                                                           | [operations.PricesUpdatePricesCustomData](../../models/operations/pricesupdatepricescustomdata.md)     | :heavy_minus_sign:                                                                                     | Any valid JSON value                                                                                   |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `createdAt`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `updatedAt`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |