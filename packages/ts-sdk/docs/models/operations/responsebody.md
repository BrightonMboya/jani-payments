# ResponseBody

## Example Usage

```typescript
import { ResponseBody } from "jani-payments/models/operations";

let value: ResponseBody = {
  id: "<id>",
  name: "<value>",
  description: "whole busily jive hawk gee basic minus hence",
  status: "active",
  createdAt: "1714151536109",
  updatedAt: "1737906665697",
  customData: {},
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `description`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `status`                                                                             | [operations.GetProductsStatus](../../models/operations/getproductsstatus.md)         | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `createdAt`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `updatedAt`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `customData`                                                                         | [operations.GetProductsCustomData](../../models/operations/getproductscustomdata.md) | :heavy_check_mark:                                                                   | Any valid JSON value                                                                 |