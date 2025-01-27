# TransactionsCreateRequestBody

## Example Usage

```typescript
import { TransactionsCreateRequestBody } from "jani-payments/models/operations";

let value: TransactionsCreateRequestBody = {
  items: [
    {
      priceId: "<id>",
      quantity: 2289.07,
    },
  ],
  status: "billed",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "KGS",
  paymentDetails: {
    paymentMethod: "CARD",
    paymentProvider: "ORANGE",
    amount: 3176.32,
    currencyCode: "GTQ",
    cardLast4: "<value>",
    cardBrand: "<value>",
    cardExpMonth: 19691,
    cardExpYear: 40874,
    cardHolderName: "<value>",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                                | [operations.TransactionsCreateItems](../../models/operations/transactionscreateitems.md)[]                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `status`                                                                                                               | [operations.TransactionsCreateStatus](../../models/operations/transactionscreatestatus.md)                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `customerId`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `addressId`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `currencyCode`                                                                                                         | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `paymentDetails`                                                                                                       | *operations.PaymentDetails*                                                                                            | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `subscriptionId`                                                                                                       | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `discountId`                                                                                                           | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `collectionMode`                                                                                                       | [operations.TransactionsCreateCollectionMode](../../models/operations/transactionscreatecollectionmode.md)             | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `customData`                                                                                                           | [operations.TransactionsCreateCustomData](../../models/operations/transactionscreatecustomdata.md)                     | :heavy_minus_sign:                                                                                                     | Any valid JSON value                                                                                                   |
| `currentBillingPeriod`                                                                                                 | [operations.TransactionsCreateCurrentBillingPeriod](../../models/operations/transactionscreatecurrentbillingperiod.md) | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |