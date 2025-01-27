# TransactionsListMethodDetails1

## Example Usage

```typescript
import { TransactionsListMethodDetails1 } from "jani-payments/models/operations";

let value: TransactionsListMethodDetails1 = {
  paymentMethod: "MOBILE_MONEY",
  details: {
    network: "<value>",
    phoneSuffix: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethod`                                                                                                                                                        | [operations.TransactionsListMethodDetailsTransactionsResponsePaymentMethod](../../models/operations/transactionslistmethoddetailstransactionsresponsepaymentmethod.md) | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `details`                                                                                                                                                              | [operations.TransactionsListMethodDetailsTransactionsResponseDetails](../../models/operations/transactionslistmethoddetailstransactionsresponsedetails.md)             | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |