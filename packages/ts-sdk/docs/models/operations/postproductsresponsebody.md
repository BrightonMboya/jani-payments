# PostProductsResponseBody

Creating Product endpoint

## Example Usage

```typescript
import { PostProductsResponseBody } from "jani-payments/models/operations";

let value: PostProductsResponseBody = {
  id: "<id>",
  name: "<value>",
  description: "regularly mouser inject worth uh-huh substitution psst",
  status: "active",
  createdAt: "1712750421105",
  updatedAt: "1737894531160",
  customData: {},
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `description`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `status`                                                                               | [operations.PostProductsStatus](../../models/operations/postproductsstatus.md)         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `createdAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `updatedAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `customData`                                                                           | [operations.PostProductsCustomData](../../models/operations/postproductscustomdata.md) | :heavy_check_mark:                                                                     | Any valid JSON value                                                                   |