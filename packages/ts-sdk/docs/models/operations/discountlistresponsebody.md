# DiscountListResponseBody

## Example Usage

```typescript
import { DiscountListResponseBody } from "jani-payments/models/operations";

let value: DiscountListResponseBody = {
  id: "<id>",
  amount: 8490.39,
  currencyCode: "AOA",
  type: "flat_per_seat",
  customData: {},
  createdAt: "1717654636251",
  updatedAt: "1737928143719",
  restrictedTo: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `status`                                                                               | [operations.DiscountListStatus](../../models/operations/discountliststatus.md)         | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `description`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `enabledForCheckout`                                                                   | *boolean*                                                                              | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `amount`                                                                               | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `currencyCode`                                                                         | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `type`                                                                                 | [operations.DiscountListType](../../models/operations/discountlisttype.md)             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `recur`                                                                                | *boolean*                                                                              | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `maxRecurringIntervals`                                                                | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `usageLimit`                                                                           | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `expiresAt`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `customData`                                                                           | [operations.DiscountListCustomData](../../models/operations/discountlistcustomdata.md) | :heavy_check_mark:                                                                     | Any valid JSON value                                                                   |
| `timesUsed`                                                                            | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `createdAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `updatedAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `restrictedTo`                                                                         | *string*[]                                                                             | :heavy_check_mark:                                                                     | N/A                                                                                    |