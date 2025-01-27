# PatchTransactionTransactionIdPayments

## Example Usage

```typescript
import { PatchTransactionTransactionIdPayments } from "jani-payments/models/operations";

let value: PatchTransactionTransactionIdPayments = {
  id: "<id>",
  status: "PENDING",
  paymentMethod: "CARD",
  provider: "ORANGE",
  createdAt: "1715558689344",
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

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                     | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `status`                                                                                                                                                 | [operations.PatchTransactionTransactionIdTransactionsResponseStatus](../../models/operations/patchtransactiontransactionidtransactionsresponsestatus.md) | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `paymentMethod`                                                                                                                                          | [operations.PatchTransactionTransactionIdPaymentMethod](../../models/operations/patchtransactiontransactionidpaymentmethod.md)                           | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `provider`                                                                                                                                               | [operations.PatchTransactionTransactionIdProvider](../../models/operations/patchtransactiontransactionidprovider.md)                                     | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `createdAt`                                                                                                                                              | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `updatedAt`                                                                                                                                              | *string*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                       | N/A                                                                                                                                                      |
| `providerReference`                                                                                                                                      | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `providerMetadata`                                                                                                                                       | [operations.PatchTransactionTransactionIdProviderMetadata](../../models/operations/patchtransactiontransactionidprovidermetadata.md)                     | :heavy_check_mark:                                                                                                                                       | Any valid JSON value                                                                                                                                     |
| `methodDetails`                                                                                                                                          | *operations.PatchTransactionTransactionIdMethodDetails*                                                                                                  | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |