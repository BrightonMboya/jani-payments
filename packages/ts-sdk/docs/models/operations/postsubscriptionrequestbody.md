# PostSubscriptionRequestBody

## Example Usage

```typescript
import { PostSubscriptionRequestBody } from "jani-payments/models/operations";

let value: PostSubscriptionRequestBody = {
  status: "past_due",
  currencyCode: "IRR",
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
      paymentFrequency: 5058.66,
    },
    enableCheckout: false,
    additionalInformation: "<value>",
    purchaseOrderNumber: "<value>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `status`                                                                               | [operations.PostSubscriptionStatus](../../models/operations/postsubscriptionstatus.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `currencyCode`                                                                         | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `customerId`                                                                           | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `addressId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `discountId`                                                                           | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `items`                                                                                | [operations.Items](../../models/operations/items.md)[]                                 | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `billingDetails`                                                                       | [operations.BillingDetails](../../models/operations/billingdetails.md)                 | :heavy_check_mark:                                                                     | N/A                                                                                    |