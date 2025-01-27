# GetProductsProductIdResponseBody

Returns a Product using its id

## Example Usage

```typescript
import { GetProductsProductIdResponseBody } from "jani-payments/models/operations";

let value: GetProductsProductIdResponseBody = {
  id: "<id>",
  name: "<value>",
  description: "overcharge general astride boohoo",
  status: "active",
  createdAt: "1708564115213",
  updatedAt: "1737951629759",
  customData: {},
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `description`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `status`                                                                                               | [operations.GetProductsProductIdStatus](../../models/operations/getproductsproductidstatus.md)         | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `createdAt`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `updatedAt`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `customData`                                                                                           | [operations.GetProductsProductIdCustomData](../../models/operations/getproductsproductidcustomdata.md) | :heavy_check_mark:                                                                                     | Any valid JSON value                                                                                   |