# GetSubscriptionBillingDetails

## Example Usage

```typescript
import { GetSubscriptionBillingDetails } from "jani-payments/models/operations";

let value: GetSubscriptionBillingDetails = {
  paymentTerms: {},
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `paymentTerms`                                                                                   | [operations.GetSubscriptionPaymentTerms](../../models/operations/getsubscriptionpaymentterms.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `enableCheckout`                                                                                 | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `additionalInformation`                                                                          | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `purchaseOrderNumber`                                                                            | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |