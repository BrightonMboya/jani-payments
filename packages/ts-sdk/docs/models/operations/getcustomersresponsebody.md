# GetCustomersResponseBody

## Example Usage

```typescript
import { GetCustomersResponseBody } from "jani-payments/models/operations";

let value: GetCustomersResponseBody = {
  id: "<id>",
  email: "Otis_Flatley@gmail.com",
  name: "<value>",
  customData: {},
  createdAt: "1722757171954",
  updatedAt: "1737929571937",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `email`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `status`                                                                               | [operations.GetCustomersStatus](../../models/operations/getcustomersstatus.md)         | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `description`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `customData`                                                                           | [operations.GetCustomersCustomData](../../models/operations/getcustomerscustomdata.md) | :heavy_check_mark:                                                                     | Any valid JSON value                                                                   |
| `createdAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `updatedAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |