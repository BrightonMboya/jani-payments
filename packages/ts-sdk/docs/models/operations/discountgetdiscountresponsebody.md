# DiscountGetDiscountResponseBody

Returns a Discount by ID

## Example Usage

```typescript
import { DiscountGetDiscountResponseBody } from "jani-payments/models/operations";

let value: DiscountGetDiscountResponseBody = {
  id: "<id>",
  status: "active",
  amount: 1310.55,
  currencyCode: "AFN",
  type: "flat",
  customData: {},
  createdAt: "1725953639707",
  updatedAt: "1737983021624",
  restrictedTo: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `status`                                                                                             | [operations.DiscountGetDiscountStatus](../../models/operations/discountgetdiscountstatus.md)         | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `description`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `enabledForCheckout`                                                                                 | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `amount`                                                                                             | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `currencyCode`                                                                                       | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `type`                                                                                               | [operations.DiscountGetDiscountType](../../models/operations/discountgetdiscounttype.md)             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `recur`                                                                                              | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `maxRecurringIntervals`                                                                              | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `usageLimit`                                                                                         | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `expiresAt`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `customData`                                                                                         | [operations.DiscountGetDiscountCustomData](../../models/operations/discountgetdiscountcustomdata.md) | :heavy_check_mark:                                                                                   | Any valid JSON value                                                                                 |
| `timesUsed`                                                                                          | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `createdAt`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `updatedAt`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `restrictedTo`                                                                                       | *string*[]                                                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |