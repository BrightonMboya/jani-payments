# Three

## Example Usage

```typescript
import { Three } from "jani-payments/models/operations";

let value: Three = {
  paymentMethod: "BANK_TRANSFER",
  paymentProvider: "PAYSTACK",
  amount: 7017.86,
  currencyCode: "BWP",
  bankReference: "<value>",
  bankName: "<value>",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethod`                                                                                                                          | [operations.TransactionsCreatePaymentDetailsPaymentMethod](../../models/operations/transactionscreatepaymentdetailspaymentmethod.md)     | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `paymentProvider`                                                                                                                        | [operations.TransactionsCreatePaymentDetailsPaymentProvider](../../models/operations/transactionscreatepaymentdetailspaymentprovider.md) | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `amount`                                                                                                                                 | *number*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `currencyCode`                                                                                                                           | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `bankReference`                                                                                                                          | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `bankName`                                                                                                                               | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |