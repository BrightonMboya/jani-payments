# MethodDetails2

## Example Usage

```typescript
import { MethodDetails2 } from "jani-payments/models/operations";

let value: MethodDetails2 = {
  paymentMethod: "CARD",
  details: {
    last4: "<value>",
    brand: "<value>",
    expMonth: 4288.1,
    expYear: 5551.94,
    cardholderName: "<value>",
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `paymentMethod`                                                                                                                | [operations.PostTransactionsMethodDetailsPaymentMethod](../../models/operations/posttransactionsmethoddetailspaymentmethod.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `details`                                                                                                                      | [operations.PostTransactionsMethodDetailsDetails](../../models/operations/posttransactionsmethoddetailsdetails.md)             | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |