# OrderBy

## Example Usage

```typescript
import { OrderBy } from "jani-payments/models/operations";

let value: OrderBy = {
  field: "created_at",
  direction: "DESC",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `field`                                                      | [operations.Field](../../models/operations/field.md)         | :heavy_check_mark:                                           | N/A                                                          |
| `direction`                                                  | [operations.Direction](../../models/operations/direction.md) | :heavy_check_mark:                                           | N/A                                                          |