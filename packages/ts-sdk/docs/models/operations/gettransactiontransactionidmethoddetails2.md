# GetTransactionTransactionIdMethodDetails2

## Example Usage

```typescript
import { GetTransactionTransactionIdMethodDetails2 } from "jani-payments/models/operations";

let value: GetTransactionTransactionIdMethodDetails2 = {
  paymentMethod: "CARD",
  details: {
    last4: "<value>",
    brand: "<value>",
    expMonth: 263.21,
    expYear: 7188.79,
    cardholderName: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethod`                                                                                                                                                              | [operations.GetTransactionTransactionIdMethodDetailsTransactionsPaymentMethod](../../models/operations/gettransactiontransactionidmethoddetailstransactionspaymentmethod.md) | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `details`                                                                                                                                                                    | [operations.GetTransactionTransactionIdMethodDetailsTransactionsDetails](../../models/operations/gettransactiontransactionidmethoddetailstransactionsdetails.md)             | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |