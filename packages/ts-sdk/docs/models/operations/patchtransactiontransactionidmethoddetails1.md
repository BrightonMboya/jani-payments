# PatchTransactionTransactionIdMethodDetails1

## Example Usage

```typescript
import { PatchTransactionTransactionIdMethodDetails1 } from "jani-payments/models/operations";

let value: PatchTransactionTransactionIdMethodDetails1 = {
  paymentMethod: "MOBILE_MONEY",
  details: {
    network: "<value>",
    phoneSuffix: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethod`                                                                                                                                          | [operations.PatchTransactionTransactionIdMethodDetailsPaymentMethod](../../models/operations/patchtransactiontransactionidmethoddetailspaymentmethod.md) | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `details`                                                                                                                                                | [operations.PatchTransactionTransactionIdMethodDetailsDetails](../../models/operations/patchtransactiontransactionidmethoddetailsdetails.md)             | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |