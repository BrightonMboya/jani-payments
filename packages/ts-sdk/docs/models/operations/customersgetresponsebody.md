# CustomersGetResponseBody

Get a Customer

## Example Usage

```typescript
import { CustomersGetResponseBody } from "jani-payments/models/operations";

let value: CustomersGetResponseBody = {
  id: "<id>",
  email: "Celestino_Haag@gmail.com",
  name: "<value>",
  status: "archived",
  customData: {},
  createdAt: "1726442997670",
  updatedAt: "1737973779846",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `email`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `status`                                                                               | [operations.CustomersGetStatus](../../models/operations/customersgetstatus.md)         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `description`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `customData`                                                                           | [operations.CustomersGetCustomData](../../models/operations/customersgetcustomdata.md) | :heavy_check_mark:                                                                     | Any valid JSON value                                                                   |
| `createdAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `updatedAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |