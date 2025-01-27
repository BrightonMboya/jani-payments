# Payments

## Example Usage

```typescript
import { Payments } from "jani-payments/models/operations";

let value: Payments = {
  id: "<id>",
  status: "FAILED",
  paymentMethod: "MOBILE_MONEY",
  provider: "AIRTEL",
  createdAt: "1733286726047",
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

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                           | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `status`                                                                                                                       | [operations.PostTransactionsTransactionsResponseStatus](../../models/operations/posttransactionstransactionsresponsestatus.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `paymentMethod`                                                                                                                | [operations.PostTransactionsPaymentMethod](../../models/operations/posttransactionspaymentmethod.md)                           | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `provider`                                                                                                                     | [operations.Provider](../../models/operations/provider.md)                                                                     | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `createdAt`                                                                                                                    | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `updatedAt`                                                                                                                    | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `providerReference`                                                                                                            | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `providerMetadata`                                                                                                             | [operations.ProviderMetadata](../../models/operations/providermetadata.md)                                                     | :heavy_check_mark:                                                                                                             | Any valid JSON value                                                                                                           |
| `methodDetails`                                                                                                                | *operations.MethodDetails*                                                                                                     | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |