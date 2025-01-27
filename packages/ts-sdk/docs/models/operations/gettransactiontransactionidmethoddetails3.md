# GetTransactionTransactionIdMethodDetails3

## Example Usage

```typescript
import { GetTransactionTransactionIdMethodDetails3 } from "jani-payments/models/operations";

let value: GetTransactionTransactionIdMethodDetails3 = {
  paymentMethod: "BANK_TRANSFER",
  details: {
    bankName: "<value>",
    bankReference: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                                        | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethod`                                                                                                                                                                              | [operations.GetTransactionTransactionIdMethodDetailsTransactionsResponsePaymentMethod](../../models/operations/gettransactiontransactionidmethoddetailstransactionsresponsepaymentmethod.md) | :heavy_check_mark:                                                                                                                                                                           | N/A                                                                                                                                                                                          |
| `details`                                                                                                                                                                                    | [operations.GetTransactionTransactionIdMethodDetailsTransactionsResponseDetails](../../models/operations/gettransactiontransactionidmethoddetailstransactionsresponsedetails.md)             | :heavy_check_mark:                                                                                                                                                                           | N/A                                                                                                                                                                                          |