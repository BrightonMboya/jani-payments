# PatchTransactionTransactionIdMethodDetails3

## Example Usage

```typescript
import { PatchTransactionTransactionIdMethodDetails3 } from "jani-payments/models/operations";

let value: PatchTransactionTransactionIdMethodDetails3 = {
  paymentMethod: "BANK_TRANSFER",
  details: {
    bankName: "<value>",
    bankReference: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                                            | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `paymentMethod`                                                                                                                                                                                  | [operations.PatchTransactionTransactionIdMethodDetailsTransactionsResponsePaymentMethod](../../models/operations/patchtransactiontransactionidmethoddetailstransactionsresponsepaymentmethod.md) | :heavy_check_mark:                                                                                                                                                                               | N/A                                                                                                                                                                                              |
| `details`                                                                                                                                                                                        | [operations.PatchTransactionTransactionIdMethodDetailsTransactionsResponseDetails](../../models/operations/patchtransactiontransactionidmethoddetailstransactionsresponsedetails.md)             | :heavy_check_mark:                                                                                                                                                                               | N/A                                                                                                                                                                                              |