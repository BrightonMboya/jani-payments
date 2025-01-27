# GetDiscountsResponseBody

## Example Usage

```typescript
import { GetDiscountsResponseBody } from "jani-payments/models/operations";

let value: GetDiscountsResponseBody = {
  id: "<id>",
  amount: 8490.39,
  currencyCode: "AOA",
  type: "flat_per_seat",
  customData: {},
  createdAt: "1717650242667",
  updatedAt: "1737923750135",
  restrictedTo: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `status`                                                                               | [operations.GetDiscountsStatus](../../models/operations/getdiscountsstatus.md)         | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `description`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `enabledForCheckout`                                                                   | *boolean*                                                                              | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `amount`                                                                               | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `currencyCode`                                                                         | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `type`                                                                                 | [operations.GetDiscountsType](../../models/operations/getdiscountstype.md)             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `recur`                                                                                | *boolean*                                                                              | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `maxRecurringIntervals`                                                                | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `usageLimit`                                                                           | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `expiresAt`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `customData`                                                                           | [operations.GetDiscountsCustomData](../../models/operations/getdiscountscustomdata.md) | :heavy_check_mark:                                                                     | Any valid JSON value                                                                   |
| `timesUsed`                                                                            | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `createdAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `updatedAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `restrictedTo`                                                                         | *string*[]                                                                             | :heavy_check_mark:                                                                     | N/A                                                                                    |