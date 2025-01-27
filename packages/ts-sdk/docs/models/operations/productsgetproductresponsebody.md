# ProductsGetProductResponseBody

Returns a Product using its id

## Example Usage

```typescript
import { ProductsGetProductResponseBody } from "jani-payments/models/operations";

let value: ProductsGetProductResponseBody = {
  id: "<id>",
  name: "<value>",
  description: "overcharge general astride boohoo",
  status: "active",
  createdAt: "1708570031028",
  updatedAt: "1737957545574",
  customData: {},
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `name`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `description`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `status`                                                                                           | [operations.ProductsGetProductStatus](../../models/operations/productsgetproductstatus.md)         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `createdAt`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `updatedAt`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `customData`                                                                                       | [operations.ProductsGetProductCustomData](../../models/operations/productsgetproductcustomdata.md) | :heavy_check_mark:                                                                                 | Any valid JSON value                                                                               |