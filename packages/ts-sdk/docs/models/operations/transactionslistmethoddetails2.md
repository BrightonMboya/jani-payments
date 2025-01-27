# TransactionsListMethodDetails2

## Example Usage

```typescript
import { TransactionsListMethodDetails2 } from "jani-payments/models/operations";

let value: TransactionsListMethodDetails2 = {
  paymentMethod: "CARD",
  details: {
    last4: "<value>",
    brand: "<value>",
    expMonth: 371.29,
    expYear: 142.51,
    cardholderName: "<value>",
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `paymentMethod`                                                                                                                | [operations.TransactionsListMethodDetailsPaymentMethod](../../models/operations/transactionslistmethoddetailspaymentmethod.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `details`                                                                                                                      | [operations.TransactionsListMethodDetailsDetails](../../models/operations/transactionslistmethoddetailsdetails.md)             | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |