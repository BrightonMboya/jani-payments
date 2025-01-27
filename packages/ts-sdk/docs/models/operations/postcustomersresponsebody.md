# PostCustomersResponseBody

Creates a new Customer

## Example Usage

```typescript
import { PostCustomersResponseBody } from "jani-payments/models/operations";

let value: PostCustomersResponseBody = {
  id: "<id>",
  email: "Rasheed.Wisozk-Ullrich99@yahoo.com",
  name: "<value>",
  customData: {},
  createdAt: "1709783187476",
  updatedAt: "1737975092437",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `email`                                                                                                    | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `status`                                                                                                   | [operations.PostCustomersCustomersStatus](../../models/operations/postcustomerscustomersstatus.md)         | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `description`                                                                                              | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `customData`                                                                                               | [operations.PostCustomersCustomersCustomData](../../models/operations/postcustomerscustomerscustomdata.md) | :heavy_check_mark:                                                                                         | Any valid JSON value                                                                                       |
| `createdAt`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `updatedAt`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |