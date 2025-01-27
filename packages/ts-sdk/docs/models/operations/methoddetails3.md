# MethodDetails3

## Example Usage

```typescript
import { MethodDetails3 } from "jani-payments/models/operations";

let value: MethodDetails3 = {
  paymentMethod: "BANK_TRANSFER",
  details: {
    bankName: "<value>",
    bankReference: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethod`                                                                                                                                            | [operations.TransactionsCreateMethodDetailsTransactionsPaymentMethod](../../models/operations/transactionscreatemethoddetailstransactionspaymentmethod.md) | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `details`                                                                                                                                                  | [operations.TransactionsCreateMethodDetailsTransactionsDetails](../../models/operations/transactionscreatemethoddetailstransactionsdetails.md)             | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |