# TransactionsGetMethodDetails1

## Example Usage

```typescript
import { TransactionsGetMethodDetails1 } from "jani-payments/models/operations";

let value: TransactionsGetMethodDetails1 = {
  paymentMethod: "MOBILE_MONEY",
  details: {
    network: "<value>",
    phoneSuffix: "<value>",
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethod`                                                                                                              | [operations.TransactionsGetMethodDetailsPaymentMethod](../../models/operations/transactionsgetmethoddetailspaymentmethod.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `details`                                                                                                                    | [operations.TransactionsGetMethodDetailsDetails](../../models/operations/transactionsgetmethoddetailsdetails.md)             | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |