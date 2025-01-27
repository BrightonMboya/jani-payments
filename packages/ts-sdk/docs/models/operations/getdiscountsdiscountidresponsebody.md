# GetDiscountsDiscountIdResponseBody

Returns a Discount by ID

## Example Usage

```typescript
import { GetDiscountsDiscountIdResponseBody } from "jani-payments/models/operations";

let value: GetDiscountsDiscountIdResponseBody = {
  id: "<id>",
  amount: 680.74,
  currencyCode: "EGP",
  type: "flat",
  customData: {},
  createdAt: "1714427968284",
  updatedAt: "1737904254093",
  restrictedTo: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `status`                                                                                                   | [operations.GetDiscountsDiscountIdStatus](../../models/operations/getdiscountsdiscountidstatus.md)         | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `description`                                                                                              | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `enabledForCheckout`                                                                                       | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `amount`                                                                                                   | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `currencyCode`                                                                                             | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `type`                                                                                                     | [operations.GetDiscountsDiscountIdType](../../models/operations/getdiscountsdiscountidtype.md)             | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `recur`                                                                                                    | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `maxRecurringIntervals`                                                                                    | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `usageLimit`                                                                                               | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `expiresAt`                                                                                                | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `customData`                                                                                               | [operations.GetDiscountsDiscountIdCustomData](../../models/operations/getdiscountsdiscountidcustomdata.md) | :heavy_check_mark:                                                                                         | Any valid JSON value                                                                                       |
| `timesUsed`                                                                                                | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `createdAt`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `updatedAt`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `restrictedTo`                                                                                             | *string*[]                                                                                                 | :heavy_check_mark:                                                                                         | N/A                                                                                                        |