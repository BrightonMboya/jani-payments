# CustomersListResponseBody

## Example Usage

```typescript
import { CustomersListResponseBody } from "jani-payments/models/operations";

let value: CustomersListResponseBody = {
  id: "<id>",
  email: "Mandy28@gmail.com",
  name: "<value>",
  status: "active",
  customData: {},
  createdAt: "1717819411316",
  updatedAt: "1737970442010",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `email`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `status`                                                                                 | [operations.CustomersListStatus](../../models/operations/customersliststatus.md)         | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `description`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `customData`                                                                             | [operations.CustomersListCustomData](../../models/operations/customerslistcustomdata.md) | :heavy_check_mark:                                                                       | Any valid JSON value                                                                     |
| `createdAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updatedAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |