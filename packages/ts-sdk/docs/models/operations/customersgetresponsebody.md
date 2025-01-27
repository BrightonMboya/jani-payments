# CustomersGetResponseBody

Get a Customer

## Example Usage

```typescript
import { CustomersGetResponseBody } from "jani-payments/models/operations";

let value: CustomersGetResponseBody = {
  id: "<id>",
  email: "Andre.Tillman@hotmail.com",
  name: "<value>",
  customData: {},
  createdAt: "1730061510397",
  updatedAt: "1737917870964",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `email`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `status`                                                                               | [operations.CustomersGetStatus](../../models/operations/customersgetstatus.md)         | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `description`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `customData`                                                                           | [operations.CustomersGetCustomData](../../models/operations/customersgetcustomdata.md) | :heavy_check_mark:                                                                     | Any valid JSON value                                                                   |
| `createdAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `updatedAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |