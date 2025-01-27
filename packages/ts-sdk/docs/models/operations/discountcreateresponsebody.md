# DiscountCreateResponseBody

Creates a new Discount

## Example Usage

```typescript
import { DiscountCreateResponseBody } from "jani-payments/models/operations";

let value: DiscountCreateResponseBody = {
  id: "<id>",
  status: "active",
  amount: 6144.65,
  currencyCode: "AOA",
  type: "flat",
  customData: {},
  createdAt: "1719971748329",
  updatedAt: "1737904728384",
  restrictedTo: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `status`                                                                                                     | [operations.DiscountCreateDiscountsStatus](../../models/operations/discountcreatediscountsstatus.md)         | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `description`                                                                                                | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `enabledForCheckout`                                                                                         | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `amount`                                                                                                     | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `currencyCode`                                                                                               | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `type`                                                                                                       | [operations.DiscountCreateDiscountsType](../../models/operations/discountcreatediscountstype.md)             | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `recur`                                                                                                      | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `maxRecurringIntervals`                                                                                      | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `usageLimit`                                                                                                 | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `expiresAt`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `customData`                                                                                                 | [operations.DiscountCreateDiscountsCustomData](../../models/operations/discountcreatediscountscustomdata.md) | :heavy_check_mark:                                                                                           | Any valid JSON value                                                                                         |
| `timesUsed`                                                                                                  | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `createdAt`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `updatedAt`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `restrictedTo`                                                                                               | *string*[]                                                                                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |