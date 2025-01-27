# PricesListResponseBody

## Example Usage

```typescript
import { PricesListResponseBody } from "jani-payments/models/operations";

let value: PricesListResponseBody = {
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
  createdAt: "1730859602657",
  updatedAt: "1737927630155",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `productId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `description`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `type`                                                                                 | [operations.PricesListType](../../models/operations/priceslisttype.md)                 | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `billingCycle`                                                                         | [operations.PricesListBillingCycle](../../models/operations/priceslistbillingcycle.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `trialPeriod`                                                                          | [operations.PricesListTrialPeriod](../../models/operations/priceslisttrialperiod.md)   | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `unitPrice`                                                                            | [operations.PricesListUnitPrice](../../models/operations/priceslistunitprice.md)       | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `status`                                                                               | [operations.PricesListStatus](../../models/operations/pricesliststatus.md)             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `customData`                                                                           | [operations.PricesListCustomData](../../models/operations/priceslistcustomdata.md)     | :heavy_minus_sign:                                                                     | Any valid JSON value                                                                   |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `createdAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `updatedAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |