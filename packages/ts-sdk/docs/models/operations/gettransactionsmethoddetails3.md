# GetTransactionsMethodDetails3

## Example Usage

```typescript
import { GetTransactionsMethodDetails3 } from "jani-payments/models/operations";

let value: GetTransactionsMethodDetails3 = {
  paymentMethod: "BANK_TRANSFER",
  details: {
    bankName: "<value>",
    bankReference: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethod`                                                                                                                                      | [operations.GetTransactionsMethodDetailsTransactionsPaymentMethod](../../models/operations/gettransactionsmethoddetailstransactionspaymentmethod.md) | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `details`                                                                                                                                            | [operations.GetTransactionsMethodDetailsTransactionsDetails](../../models/operations/gettransactionsmethoddetailstransactionsdetails.md)             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |