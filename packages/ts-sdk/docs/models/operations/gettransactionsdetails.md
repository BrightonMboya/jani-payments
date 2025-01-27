# GetTransactionsDetails

## Example Usage

```typescript
import { GetTransactionsDetails } from "jani-payments/models/operations";

let value: GetTransactionsDetails = {
  total: {
    subtotal: 8268.06,
    discount: 1039.9,
    grandTotal: 6339.82,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `total`                                                                            | [operations.GetTransactionsTotal](../../models/operations/gettransactionstotal.md) | :heavy_check_mark:                                                                 | N/A                                                                                |