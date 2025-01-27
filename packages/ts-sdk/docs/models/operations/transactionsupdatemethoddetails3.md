# TransactionsUpdateMethodDetails3

## Example Usage

```typescript
import { TransactionsUpdateMethodDetails3 } from "jani-payments/models/operations";

let value: TransactionsUpdateMethodDetails3 = {
  paymentMethod: "BANK_TRANSFER",
  details: {
    bankName: "<value>",
    bankReference: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethod`                                                                                                                                                            | [operations.TransactionsUpdateMethodDetailsTransactionsResponsePaymentMethod](../../models/operations/transactionsupdatemethoddetailstransactionsresponsepaymentmethod.md) | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `details`                                                                                                                                                                  | [operations.TransactionsUpdateMethodDetailsTransactionsResponseDetails](../../models/operations/transactionsupdatemethoddetailstransactionsresponsedetails.md)             | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |