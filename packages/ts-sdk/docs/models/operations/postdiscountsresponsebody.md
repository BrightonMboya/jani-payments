# PostDiscountsResponseBody

Creates a new Discount

## Example Usage

```typescript
import { PostDiscountsResponseBody } from "jani-payments/models/operations";

let value: PostDiscountsResponseBody = {
  id: "<id>",
  amount: 4541.62,
  currencyCode: "GTQ",
  type: "flat",
  customData: {},
  createdAt: "1725821089412",
  updatedAt: "1737895788654",
  restrictedTo: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `status`                                                                                                   | [operations.PostDiscountsDiscountsStatus](../../models/operations/postdiscountsdiscountsstatus.md)         | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `description`                                                                                              | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `enabledForCheckout`                                                                                       | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `amount`                                                                                                   | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `currencyCode`                                                                                             | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `type`                                                                                                     | [operations.PostDiscountsDiscountsType](../../models/operations/postdiscountsdiscountstype.md)             | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `recur`                                                                                                    | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `maxRecurringIntervals`                                                                                    | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `usageLimit`                                                                                               | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `expiresAt`                                                                                                | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `customData`                                                                                               | [operations.PostDiscountsDiscountsCustomData](../../models/operations/postdiscountsdiscountscustomdata.md) | :heavy_check_mark:                                                                                         | Any valid JSON value                                                                                       |
| `timesUsed`                                                                                                | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `createdAt`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `updatedAt`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `restrictedTo`                                                                                             | *string*[]                                                                                                 | :heavy_check_mark:                                                                                         | N/A                                                                                                        |