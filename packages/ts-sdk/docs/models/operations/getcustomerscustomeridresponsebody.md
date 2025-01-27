# GetCustomersCustomerIdResponseBody

Get a Customer

## Example Usage

```typescript
import { GetCustomersCustomerIdResponseBody } from "jani-payments/models/operations";

let value: GetCustomersCustomerIdResponseBody = {
  id: "<id>",
  email: "Andre.Tillman@hotmail.com",
  name: "<value>",
  customData: {},
  createdAt: "1730057116829",
  updatedAt: "1737913477396",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `email`                                                                                                    | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `status`                                                                                                   | [operations.GetCustomersCustomerIdStatus](../../models/operations/getcustomerscustomeridstatus.md)         | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `description`                                                                                              | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `customData`                                                                                               | [operations.GetCustomersCustomerIdCustomData](../../models/operations/getcustomerscustomeridcustomdata.md) | :heavy_check_mark:                                                                                         | Any valid JSON value                                                                                       |
| `createdAt`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `updatedAt`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |