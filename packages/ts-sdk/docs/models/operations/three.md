# Three

## Example Usage

```typescript
import { Three } from "jani-payments/models/operations";

let value: Three = {
  paymentMethod: "BANK_TRANSFER",
  paymentProvider: "FLUTTERWAVE",
  amount: 1404.39,
  currencyCode: "RSD",
  bankReference: "<value>",
  bankName: "<value>",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `paymentMethod`                                                                                                                      | [operations.PostTransactionsPaymentDetailsPaymentMethod](../../models/operations/posttransactionspaymentdetailspaymentmethod.md)     | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `paymentProvider`                                                                                                                    | [operations.PostTransactionsPaymentDetailsPaymentProvider](../../models/operations/posttransactionspaymentdetailspaymentprovider.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `amount`                                                                                                                             | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `currencyCode`                                                                                                                       | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `bankReference`                                                                                                                      | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `bankName`                                                                                                                           | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |