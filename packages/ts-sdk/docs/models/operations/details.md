# Details

## Example Usage

```typescript
import { Details } from "jani-payments/models/operations";

let value: Details = {
  total: {
    subtotal: 9790.11,
    discount: 8988.26,
    grandTotal: 5867.17,
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `total`                                              | [operations.Total](../../models/operations/total.md) | :heavy_check_mark:                                   | N/A                                                  |