# BillingDetails

## Example Usage

```typescript
import { BillingDetails } from "jani-payments/models/operations";

let value: BillingDetails = {
  paymentTerms: {
    paymentInterval: "month",
    paymentFrequency: 2716.53,
  },
  enableCheckout: false,
  additionalInformation: "<value>",
  purchaseOrderNumber: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `paymentTerms`                                                     | [operations.PaymentTerms](../../models/operations/paymentterms.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `enableCheckout`                                                   | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `additionalInformation`                                            | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `purchaseOrderNumber`                                              | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |