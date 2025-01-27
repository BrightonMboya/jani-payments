# TransactionsGetMethodDetails3

## Example Usage

```typescript
import { TransactionsGetMethodDetails3 } from "jani-payments/models/operations";

let value: TransactionsGetMethodDetails3 = {
  paymentMethod: "BANK_TRANSFER",
  details: {
    bankName: "<value>",
    bankReference: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethod`                                                                                                                                                      | [operations.TransactionsGetMethodDetailsTransactionsResponsePaymentMethod](../../models/operations/transactionsgetmethoddetailstransactionsresponsepaymentmethod.md) | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `details`                                                                                                                                                            | [operations.TransactionsGetMethodDetailsTransactionsResponseDetails](../../models/operations/transactionsgetmethoddetailstransactionsresponsedetails.md)             | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |