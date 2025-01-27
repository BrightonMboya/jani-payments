# PostSubscriptionBillingDetails

## Example Usage

```typescript
import { PostSubscriptionBillingDetails } from "jani-payments/models/operations";

let value: PostSubscriptionBillingDetails = {
  paymentTerms: {},
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `paymentTerms`                                                                                     | [operations.PostSubscriptionPaymentTerms](../../models/operations/postsubscriptionpaymentterms.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `enableCheckout`                                                                                   | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `additionalInformation`                                                                            | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `purchaseOrderNumber`                                                                              | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |