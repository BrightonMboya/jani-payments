# PatchCustomersCustomerIdResponseBody

Update a Customer

## Example Usage

```typescript
import { PatchCustomersCustomerIdResponseBody } from "jani-payments/models/operations";

let value: PatchCustomersCustomerIdResponseBody = {
  id: "<id>",
  email: "Roger63@gmail.com",
  name: "<value>",
  customData: {},
  createdAt: "1736093782923",
  updatedAt: "1737957796433",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                             | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `email`                                                                                                                          | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `name`                                                                                                                           | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `status`                                                                                                                         | [operations.PatchCustomersCustomerIdCustomersStatus](../../models/operations/patchcustomerscustomeridcustomersstatus.md)         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `description`                                                                                                                    | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `customData`                                                                                                                     | [operations.PatchCustomersCustomerIdCustomersCustomData](../../models/operations/patchcustomerscustomeridcustomerscustomdata.md) | :heavy_check_mark:                                                                                                               | Any valid JSON value                                                                                                             |
| `createdAt`                                                                                                                      | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `updatedAt`                                                                                                                      | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |