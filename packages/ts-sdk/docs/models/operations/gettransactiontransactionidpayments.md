# GetTransactionTransactionIdPayments

## Example Usage

```typescript
import { GetTransactionTransactionIdPayments } from "jani-payments/models/operations";

let value: GetTransactionTransactionIdPayments = {
  id: "<id>",
  status: "COMPLETED",
  paymentMethod: "CARD",
  provider: "FLUTTERWAVE",
  createdAt: "1728669368574",
  providerReference: "<value>",
  providerMetadata: {},
  methodDetails: {
    paymentMethod: "BANK_TRANSFER",
    details: {
      bankName: "<value>",
      bankReference: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                 | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `status`                                                                                                                             | [operations.GetTransactionTransactionIdTransactionsStatus](../../models/operations/gettransactiontransactionidtransactionsstatus.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `paymentMethod`                                                                                                                      | [operations.GetTransactionTransactionIdPaymentMethod](../../models/operations/gettransactiontransactionidpaymentmethod.md)           | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `provider`                                                                                                                           | [operations.GetTransactionTransactionIdProvider](../../models/operations/gettransactiontransactionidprovider.md)                     | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `createdAt`                                                                                                                          | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `updatedAt`                                                                                                                          | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `providerReference`                                                                                                                  | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `providerMetadata`                                                                                                                   | [operations.GetTransactionTransactionIdProviderMetadata](../../models/operations/gettransactiontransactionidprovidermetadata.md)     | :heavy_check_mark:                                                                                                                   | Any valid JSON value                                                                                                                 |
| `methodDetails`                                                                                                                      | *operations.GetTransactionTransactionIdMethodDetails*                                                                                | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |