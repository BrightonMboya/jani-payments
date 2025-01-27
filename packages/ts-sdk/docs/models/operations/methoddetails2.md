# MethodDetails2

## Example Usage

```typescript
import { MethodDetails2 } from "jani-payments/models/operations";

let value: MethodDetails2 = {
  paymentMethod: "CARD",
  details: {
    last4: "<value>",
    brand: "<value>",
    expMonth: 1631.81,
    expYear: 6962.19,
    cardholderName: "<value>",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethod`                                                                                                                    | [operations.TransactionsCreateMethodDetailsPaymentMethod](../../models/operations/transactionscreatemethoddetailspaymentmethod.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `details`                                                                                                                          | [operations.TransactionsCreateMethodDetailsDetails](../../models/operations/transactionscreatemethoddetailsdetails.md)             | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |