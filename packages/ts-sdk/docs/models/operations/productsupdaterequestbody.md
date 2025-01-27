# ProductsUpdateRequestBody

## Example Usage

```typescript
import { ProductsUpdateRequestBody } from "jani-payments/models/operations";

let value: ProductsUpdateRequestBody = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `name`                                                                                     | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `description`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `status`                                                                                   | [operations.ProductsUpdateStatus](../../models/operations/productsupdatestatus.md)         | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `customData`                                                                               | [operations.ProductsUpdateCustomData](../../models/operations/productsupdatecustomdata.md) | :heavy_minus_sign:                                                                         | Any valid JSON value                                                                       |