# Payments

## Example Usage

```typescript
import { Payments } from "jani-payments/models/operations";

let value: Payments = {
  id: "<id>",
  status: "COMPLETED",
  paymentMethod: "BANK_TRANSFER",
  provider: "SELCOM",
  createdAt: "1730727915094",
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

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `status`                                                                                                                           | [operations.TransactionsCreateTransactionsResponseStatus](../../models/operations/transactionscreatetransactionsresponsestatus.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `paymentMethod`                                                                                                                    | [operations.TransactionsCreatePaymentMethod](../../models/operations/transactionscreatepaymentmethod.md)                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `provider`                                                                                                                         | [operations.Provider](../../models/operations/provider.md)                                                                         | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `createdAt`                                                                                                                        | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `updatedAt`                                                                                                                        | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `providerReference`                                                                                                                | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `providerMetadata`                                                                                                                 | [operations.ProviderMetadata](../../models/operations/providermetadata.md)                                                         | :heavy_check_mark:                                                                                                                 | Any valid JSON value                                                                                                               |
| `methodDetails`                                                                                                                    | *operations.MethodDetails*                                                                                                         | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |