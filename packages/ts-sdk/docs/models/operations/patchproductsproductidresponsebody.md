# PatchProductsProductIdResponseBody

Returns the updated Product

## Example Usage

```typescript
import { PatchProductsProductIdResponseBody } from "jani-payments/models/operations";

let value: PatchProductsProductIdResponseBody = {
  id: "<id>",
  name: "<value>",
  description:
    "inasmuch sympathetically disappointment nor until twist oof ack flame turbulent",
  status: "active",
  createdAt: "1733215614036",
  updatedAt: "1737946314852",
  customData: {},
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                       | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `name`                                                                                                                     | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `description`                                                                                                              | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `status`                                                                                                                   | [operations.PatchProductsProductIdProductsStatus](../../models/operations/patchproductsproductidproductsstatus.md)         | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `createdAt`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `updatedAt`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `customData`                                                                                                               | [operations.PatchProductsProductIdProductsCustomData](../../models/operations/patchproductsproductidproductscustomdata.md) | :heavy_check_mark:                                                                                                         | Any valid JSON value                                                                                                       |