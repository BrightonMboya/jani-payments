# TransactionsUpdateMethodDetails2

## Example Usage

```typescript
import { TransactionsUpdateMethodDetails2 } from "jani-payments/models/operations";

let value: TransactionsUpdateMethodDetails2 = {
  paymentMethod: "CARD",
  details: {
    last4: "<value>",
    brand: "<value>",
    expMonth: 6502,
    expYear: 5059.08,
    cardholderName: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethod`                                                                                                                                            | [operations.TransactionsUpdateMethodDetailsTransactionsPaymentMethod](../../models/operations/transactionsupdatemethoddetailstransactionspaymentmethod.md) | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `details`                                                                                                                                                  | [operations.TransactionsUpdateMethodDetailsTransactionsDetails](../../models/operations/transactionsupdatemethoddetailstransactionsdetails.md)             | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |