# ProductsCreateResponseBody

Creating Product endpoint

## Example Usage

```typescript
import { ProductsCreateResponseBody } from "jani-payments/models/operations";

let value: ProductsCreateResponseBody = {
  id: "<id>",
  name: "<value>",
  description: "regularly mouser inject worth uh-huh substitution psst",
  status: "active",
  createdAt: "1712756336919",
  updatedAt: "1737900446974",
  customData: {},
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `name`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `description`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `status`                                                                                   | [operations.ProductsCreateStatus](../../models/operations/productscreatestatus.md)         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `createdAt`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `updatedAt`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `customData`                                                                               | [operations.ProductsCreateCustomData](../../models/operations/productscreatecustomdata.md) | :heavy_check_mark:                                                                         | Any valid JSON value                                                                       |