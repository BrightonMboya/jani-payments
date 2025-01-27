# TransactionsListMethodDetails3

## Example Usage

```typescript
import { TransactionsListMethodDetails3 } from "jani-payments/models/operations";

let value: TransactionsListMethodDetails3 = {
  paymentMethod: "BANK_TRANSFER",
  details: {
    bankName: "<value>",
    bankReference: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `paymentMethod`                                                                                                                                        | [operations.TransactionsListMethodDetailsTransactionsPaymentMethod](../../models/operations/transactionslistmethoddetailstransactionspaymentmethod.md) | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `details`                                                                                                                                              | [operations.TransactionsListMethodDetailsTransactionsDetails](../../models/operations/transactionslistmethoddetailstransactionsdetails.md)             | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |