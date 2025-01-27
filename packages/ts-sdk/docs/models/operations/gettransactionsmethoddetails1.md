# GetTransactionsMethodDetails1

## Example Usage

```typescript
import { GetTransactionsMethodDetails1 } from "jani-payments/models/operations";

let value: GetTransactionsMethodDetails1 = {
  paymentMethod: "MOBILE_MONEY",
  details: {
    network: "<value>",
    phoneSuffix: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethod`                                                                                                                                                      | [operations.GetTransactionsMethodDetailsTransactionsResponsePaymentMethod](../../models/operations/gettransactionsmethoddetailstransactionsresponsepaymentmethod.md) | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `details`                                                                                                                                                            | [operations.GetTransactionsMethodDetailsTransactionsResponseDetails](../../models/operations/gettransactionsmethoddetailstransactionsresponsedetails.md)             | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |