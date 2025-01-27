# TransactionsListPayments

## Example Usage

```typescript
import { TransactionsListPayments } from "jani-payments/models/operations";

let value: TransactionsListPayments = {
  id: "<id>",
  status: "REFUNDED",
  paymentMethod: "BANK_TRANSFER",
  provider: "MPESA",
  createdAt: "1707854842110",
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

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `status`                                                                                                       | [operations.TransactionsListTransactionsStatus](../../models/operations/transactionslisttransactionsstatus.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `paymentMethod`                                                                                                | [operations.TransactionsListPaymentMethod](../../models/operations/transactionslistpaymentmethod.md)           | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `provider`                                                                                                     | [operations.TransactionsListProvider](../../models/operations/transactionslistprovider.md)                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `createdAt`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `updatedAt`                                                                                                    | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `providerReference`                                                                                            | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `providerMetadata`                                                                                             | [operations.TransactionsListProviderMetadata](../../models/operations/transactionslistprovidermetadata.md)     | :heavy_check_mark:                                                                                             | Any valid JSON value                                                                                           |
| `methodDetails`                                                                                                | *operations.TransactionsListMethodDetails*                                                                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |