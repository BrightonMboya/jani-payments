# DiscountUpdateResponseBody

Updates a Discount by ID

## Example Usage

```typescript
import { DiscountUpdateResponseBody } from "jani-payments/models/operations";

let value: DiscountUpdateResponseBody = {
  id: "<id>",
  status: "active",
  amount: 9894.1,
  currencyCode: "BAM",
  type: "flat_per_seat",
  customData: {},
  createdAt: "1715544181598",
  updatedAt: "1737919705202",
  restrictedTo: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `status`                                                                                                     | [operations.DiscountUpdateDiscountsStatus](../../models/operations/discountupdatediscountsstatus.md)         | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `description`                                                                                                | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `enabledForCheckout`                                                                                         | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `amount`                                                                                                     | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `currencyCode`                                                                                               | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `type`                                                                                                       | [operations.DiscountUpdateDiscountsType](../../models/operations/discountupdatediscountstype.md)             | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `recur`                                                                                                      | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `maxRecurringIntervals`                                                                                      | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `usageLimit`                                                                                                 | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `expiresAt`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `customData`                                                                                                 | [operations.DiscountUpdateDiscountsCustomData](../../models/operations/discountupdatediscountscustomdata.md) | :heavy_check_mark:                                                                                           | Any valid JSON value                                                                                         |
| `timesUsed`                                                                                                  | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `createdAt`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `updatedAt`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `restrictedTo`                                                                                               | *string*[]                                                                                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |