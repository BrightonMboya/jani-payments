# GetTransactionsTotal

## Example Usage

```typescript
import { GetTransactionsTotal } from "jani-payments/models/operations";

let value: GetTransactionsTotal = {
  subtotal: 8002.56,
  discount: 9555.69,
  grandTotal: 3165.5,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `subtotal`         | *number*           | :heavy_check_mark: | N/A                |
| `discount`         | *number*           | :heavy_check_mark: | N/A                |
| `grandTotal`       | *number*           | :heavy_check_mark: | N/A                |