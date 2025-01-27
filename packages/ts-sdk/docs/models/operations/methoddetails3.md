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

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `paymentMethod`                                                                                                                                        | [operations.PostTransactionsMethodDetailsTransactionsPaymentMethod](../../models/operations/posttransactionsmethoddetailstransactionspaymentmethod.md) | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `details`                                                                                                                                              | [operations.PostTransactionsMethodDetailsTransactionsDetails](../../models/operations/posttransactionsmethoddetailstransactionsdetails.md)             | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |