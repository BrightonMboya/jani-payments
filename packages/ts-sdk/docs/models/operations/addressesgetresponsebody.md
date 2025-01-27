# AddressesGetResponseBody

Get an Address

## Example Usage

```typescript
import { AddressesGetResponseBody } from "jani-payments/models/operations";

let value: AddressesGetResponseBody = {
  id: "<id>",
  customData: {},
  status: "archived",
  createdAt: "1716237416364",
  updatedAt: "1737931076785",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `description`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `firstLine`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `customData`                                                                           | [operations.AddressesGetCustomData](../../models/operations/addressesgetcustomdata.md) | :heavy_check_mark:                                                                     | Any valid JSON value                                                                   |
| `city`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `status`                                                                               | [operations.AddressesGetStatus](../../models/operations/addressesgetstatus.md)         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `createdAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `updatedAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `customerId`                                                                           | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |