# GetTransactionsPayments

## Example Usage

```typescript
import { GetTransactionsPayments } from "jani-payments/models/operations";

let value: GetTransactionsPayments = {
  id: "<id>",
  status: "FAILED",
  paymentMethod: "BANK_TRANSFER",
  provider: "TIGO",
  createdAt: "1731079028505",
  providerReference: "<value>",
  providerMetadata: {},
  methodDetails: {
    paymentMethod: "MOBILE_MONEY",
    details: {
      network: "<value>",
      phoneSuffix: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `status`                                                                                                     | [operations.GetTransactionsTransactionsStatus](../../models/operations/gettransactionstransactionsstatus.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `paymentMethod`                                                                                              | [operations.GetTransactionsPaymentMethod](../../models/operations/gettransactionspaymentmethod.md)           | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `provider`                                                                                                   | [operations.GetTransactionsProvider](../../models/operations/gettransactionsprovider.md)                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `createdAt`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `updatedAt`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `providerReference`                                                                                          | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `providerMetadata`                                                                                           | [operations.GetTransactionsProviderMetadata](../../models/operations/gettransactionsprovidermetadata.md)     | :heavy_check_mark:                                                                                           | Any valid JSON value                                                                                         |
| `methodDetails`                                                                                              | *operations.GetTransactionsMethodDetails*                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |