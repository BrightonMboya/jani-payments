# GetTransactionsMethodDetails2

## Example Usage

```typescript
import { GetTransactionsMethodDetails2 } from "jani-payments/models/operations";

let value: GetTransactionsMethodDetails2 = {
  paymentMethod: "CARD",
  details: {
    last4: "<value>",
    brand: "<value>",
    expMonth: 2375.23,
    expYear: 2713.06,
    cardholderName: "<value>",
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethod`                                                                                                              | [operations.GetTransactionsMethodDetailsPaymentMethod](../../models/operations/gettransactionsmethoddetailspaymentmethod.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `details`                                                                                                                    | [operations.GetTransactionsMethodDetailsDetails](../../models/operations/gettransactionsmethoddetailsdetails.md)             | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |