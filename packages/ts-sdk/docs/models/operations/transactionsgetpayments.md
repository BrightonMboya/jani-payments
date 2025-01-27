# TransactionsGetPayments

## Example Usage

```typescript
import { TransactionsGetPayments } from "jani-payments/models/operations";

let value: TransactionsGetPayments = {
  id: "<id>",
  status: "COMPLETED",
  paymentMethod: "MOBILE_MONEY",
  provider: "AIRTEL",
  createdAt: "1718485080100",
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

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `status`                                                                                                     | [operations.TransactionsGetTransactionsStatus](../../models/operations/transactionsgettransactionsstatus.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `paymentMethod`                                                                                              | [operations.TransactionsGetPaymentMethod](../../models/operations/transactionsgetpaymentmethod.md)           | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `provider`                                                                                                   | [operations.TransactionsGetProvider](../../models/operations/transactionsgetprovider.md)                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `createdAt`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `updatedAt`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `providerReference`                                                                                          | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `providerMetadata`                                                                                           | [operations.TransactionsGetProviderMetadata](../../models/operations/transactionsgetprovidermetadata.md)     | :heavy_check_mark:                                                                                           | Any valid JSON value                                                                                         |
| `methodDetails`                                                                                              | *operations.TransactionsGetMethodDetails*                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |