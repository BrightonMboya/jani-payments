# CustomersListResponseBody

## Example Usage

```typescript
import { CustomersListResponseBody } from "jani-payments/models/operations";

let value: CustomersListResponseBody = {
  id: "<id>",
  email: "Otis_Flatley@gmail.com",
  name: "<value>",
  customData: {},
  createdAt: "1722761565522",
  updatedAt: "1737933965506",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `email`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `status`                                                                                 | [operations.CustomersListStatus](../../models/operations/customersliststatus.md)         | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `description`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `customData`                                                                             | [operations.CustomersListCustomData](../../models/operations/customerslistcustomdata.md) | :heavy_check_mark:                                                                       | Any valid JSON value                                                                     |
| `createdAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updatedAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |