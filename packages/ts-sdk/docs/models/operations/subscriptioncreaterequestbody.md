# SubscriptionCreateRequestBody

## Example Usage

```typescript
import { SubscriptionCreateRequestBody } from "jani-payments/models/operations";

let value: SubscriptionCreateRequestBody = {
  status: "paused",
  currencyCode: "EGP",
  customerId: "<id>",
  addressId: "<id>",
  items: [
    {
      priceId: "<id>",
      quantity: "<value>",
    },
  ],
  billingDetails: {
    paymentTerms: {
      paymentInterval: "day",
      paymentFrequency: 599.44,
    },
    enableCheckout: false,
    additionalInformation: "<value>",
    purchaseOrderNumber: "<value>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `status`                                                                                   | [operations.SubscriptionCreateStatus](../../models/operations/subscriptioncreatestatus.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `currencyCode`                                                                             | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `customerId`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `addressId`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `discountId`                                                                               | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `items`                                                                                    | [operations.Items](../../models/operations/items.md)[]                                     | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `billingDetails`                                                                           | [operations.BillingDetails](../../models/operations/billingdetails.md)                     | :heavy_check_mark:                                                                         | N/A                                                                                        |