# TransactionsGetDetails

## Example Usage

```typescript
import { TransactionsGetDetails } from "jani-payments/models/operations";

let value: TransactionsGetDetails = {
  total: {
    subtotal: 3685.99,
    discount: 2192.79,
    grandTotal: 7890.38,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `total`                                                                            | [operations.TransactionsGetTotal](../../models/operations/transactionsgettotal.md) | :heavy_check_mark:                                                                 | N/A                                                                                |