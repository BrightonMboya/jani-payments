# PostDiscountsRequestBody

## Example Usage

```typescript
import { PostDiscountsRequestBody } from "jani-payments/models/operations";

let value: PostDiscountsRequestBody = {
  amount: 4012.59,
  currencyCode: "WST",
  type: "flat",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `status`                                                                                 | [operations.PostDiscountsStatus](../../models/operations/postdiscountsstatus.md)         | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `description`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `enabledForCheckout`                                                                     | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `amount`                                                                                 | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `currencyCode`                                                                           | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `type`                                                                                   | [operations.PostDiscountsType](../../models/operations/postdiscountstype.md)             | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `recur`                                                                                  | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `maxRecurringIntervals`                                                                  | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `usageLimit`                                                                             | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `expiresAt`                                                                              | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `customData`                                                                             | [operations.PostDiscountsCustomData](../../models/operations/postdiscountscustomdata.md) | :heavy_minus_sign:                                                                       | Any valid JSON value                                                                     |
| `priceIds`                                                                               | *string*[]                                                                               | :heavy_minus_sign:                                                                       | N/A                                                                                      |