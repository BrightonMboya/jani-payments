# Details

## Example Usage

```typescript
import { Details } from "jani-payments/models/operations";

let value: Details = {
  total: {
    subtotal: 7898.7,
    discount: 3172.6,
    grandTotal: 9792.71,
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `total`                                              | [operations.Total](../../models/operations/total.md) | :heavy_check_mark:                                   | N/A                                                  |