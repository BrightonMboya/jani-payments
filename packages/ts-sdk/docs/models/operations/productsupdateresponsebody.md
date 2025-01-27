# ProductsUpdateResponseBody

Returns the updated Product

## Example Usage

```typescript
import { ProductsUpdateResponseBody } from "jani-payments/models/operations";

let value: ProductsUpdateResponseBody = {
  id: "<id>",
  name: "<value>",
  description:
    "inasmuch sympathetically disappointment nor until twist oof ack flame turbulent",
  status: "active",
  createdAt: "1733220007613",
  updatedAt: "1737950708429",
  customData: {},
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `description`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `status`                                                                                                   | [operations.ProductsUpdateProductsStatus](../../models/operations/productsupdateproductsstatus.md)         | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `createdAt`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `updatedAt`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `customData`                                                                                               | [operations.ProductsUpdateProductsCustomData](../../models/operations/productsupdateproductscustomdata.md) | :heavy_check_mark:                                                                                         | Any valid JSON value                                                                                       |