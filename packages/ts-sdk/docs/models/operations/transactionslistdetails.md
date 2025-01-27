# TransactionsListDetails

## Example Usage

```typescript
import { TransactionsListDetails } from "jani-payments/models/operations";

let value: TransactionsListDetails = {
  total: {
    subtotal: 6646.66,
    discount: 4230.54,
    grandTotal: 1989.91,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `total`                                                                              | [operations.TransactionsListTotal](../../models/operations/transactionslisttotal.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |