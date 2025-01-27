# TransactionsUpdateDetails

## Example Usage

```typescript
import { TransactionsUpdateDetails } from "jani-payments/models/operations";

let value: TransactionsUpdateDetails = {
  total: {
    subtotal: 7689.99,
    discount: 831.64,
    grandTotal: 9747.75,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `total`                                                                                  | [operations.TransactionsUpdateTotal](../../models/operations/transactionsupdatetotal.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |