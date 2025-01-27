# TransactionsUpdateMethodDetails1

## Example Usage

```typescript
import { TransactionsUpdateMethodDetails1 } from "jani-payments/models/operations";

let value: TransactionsUpdateMethodDetails1 = {
  paymentMethod: "MOBILE_MONEY",
  details: {
    network: "<value>",
    phoneSuffix: "<value>",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethod`                                                                                                                    | [operations.TransactionsUpdateMethodDetailsPaymentMethod](../../models/operations/transactionsupdatemethoddetailspaymentmethod.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `details`                                                                                                                          | [operations.TransactionsUpdateMethodDetailsDetails](../../models/operations/transactionsupdatemethoddetailsdetails.md)             | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |