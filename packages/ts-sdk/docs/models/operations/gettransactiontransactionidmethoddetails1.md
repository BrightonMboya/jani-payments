# GetTransactionTransactionIdMethodDetails1

## Example Usage

```typescript
import { GetTransactionTransactionIdMethodDetails1 } from "jani-payments/models/operations";

let value: GetTransactionTransactionIdMethodDetails1 = {
  paymentMethod: "MOBILE_MONEY",
  details: {
    network: "<value>",
    phoneSuffix: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethod`                                                                                                                                      | [operations.GetTransactionTransactionIdMethodDetailsPaymentMethod](../../models/operations/gettransactiontransactionidmethoddetailspaymentmethod.md) | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `details`                                                                                                                                            | [operations.GetTransactionTransactionIdMethodDetailsDetails](../../models/operations/gettransactiontransactionidmethoddetailsdetails.md)             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |