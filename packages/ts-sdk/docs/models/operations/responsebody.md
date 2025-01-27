# ResponseBody

## Example Usage

```typescript
import { ResponseBody } from "jani-payments/models/operations";

let value: ResponseBody = {
  id: "<id>",
  name: "<value>",
  description: "whole busily jive hawk gee basic minus hence",
  status: "active",
  createdAt: "1714157451922",
  updatedAt: "1737912581510",
  customData: {},
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `description`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `status`                                                                               | [operations.ProductsListStatus](../../models/operations/productsliststatus.md)         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `createdAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `updatedAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `customData`                                                                           | [operations.ProductsListCustomData](../../models/operations/productslistcustomdata.md) | :heavy_check_mark:                                                                     | Any valid JSON value                                                                   |