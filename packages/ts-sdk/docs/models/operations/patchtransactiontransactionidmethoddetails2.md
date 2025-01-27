# PatchTransactionTransactionIdMethodDetails2

## Example Usage

```typescript
import { PatchTransactionTransactionIdMethodDetails2 } from "jani-payments/models/operations";

let value: PatchTransactionTransactionIdMethodDetails2 = {
  paymentMethod: "CARD",
  details: {
    last4: "<value>",
    brand: "<value>",
    expMonth: 804.67,
    expYear: 5421.87,
    cardholderName: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethod`                                                                                                                                                                  | [operations.PatchTransactionTransactionIdMethodDetailsTransactionsPaymentMethod](../../models/operations/patchtransactiontransactionidmethoddetailstransactionspaymentmethod.md) | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |
| `details`                                                                                                                                                                        | [operations.PatchTransactionTransactionIdMethodDetailsTransactionsDetails](../../models/operations/patchtransactiontransactionidmethoddetailstransactionsdetails.md)             | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |