# PostPricesResponseBody

Creates a new Price

## Example Usage

```typescript
import { PostPricesResponseBody } from "jani-payments/models/operations";

let value: PostPricesResponseBody = {
  productId: "<id>",
  type: "custom",
  name: "<value>",
  billingCycle: {
    interval: "day",
    frequency: 6969.97,
  },
  trialPeriod: {
    interval: "year",
    frequency: 7774.08,
  },
  unitPrice: {
    amount: 2594.22,
    currencyCode: "ILS",
  },
  status: "archived",
  id: "<id>",
  createdAt: "1715047042208",
  updatedAt: "1737924972277",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `productId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `description`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `type`                                                                                         | [operations.PostPricesType](../../models/operations/postpricestype.md)                         | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `name`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `billingCycle`                                                                                 | [operations.PostPricesBillingCycle](../../models/operations/postpricesbillingcycle.md)         | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `trialPeriod`                                                                                  | [operations.PostPricesTrialPeriod](../../models/operations/postpricestrialperiod.md)           | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `unitPrice`                                                                                    | [operations.PostPricesUnitPrice](../../models/operations/postpricesunitprice.md)               | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `status`                                                                                       | [operations.PostPricesPricesStatus](../../models/operations/postpricespricesstatus.md)         | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `customData`                                                                                   | [operations.PostPricesPricesCustomData](../../models/operations/postpricespricescustomdata.md) | :heavy_minus_sign:                                                                             | Any valid JSON value                                                                           |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `createdAt`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `updatedAt`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |