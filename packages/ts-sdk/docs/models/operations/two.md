# Two

## Example Usage

```typescript
import { Two } from "jani-payments/models/operations";

let value: Two = {
  paymentMethod: "CARD",
  paymentProvider: "PAYSTACK",
  amount: 2982.46,
  currencyCode: "TTD",
  cardLast4: "<value>",
  cardBrand: "<value>",
  cardExpMonth: 586277,
  cardExpYear: 348665,
  cardHolderName: "<value>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `paymentMethod`                                                                                      | [operations.PaymentDetailsPaymentMethod](../../models/operations/paymentdetailspaymentmethod.md)     | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `paymentProvider`                                                                                    | [operations.PaymentDetailsPaymentProvider](../../models/operations/paymentdetailspaymentprovider.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `amount`                                                                                             | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `currencyCode`                                                                                       | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `cardLast4`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `cardBrand`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `cardExpMonth`                                                                                       | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `cardExpYear`                                                                                        | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `cardHolderName`                                                                                     | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |