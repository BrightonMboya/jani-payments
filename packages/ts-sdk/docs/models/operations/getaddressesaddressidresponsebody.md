# GetAddressesAddressIdResponseBody

Get an Address

## Example Usage

```typescript
import { GetAddressesAddressIdResponseBody } from "jani-payments/models/operations";

let value: GetAddressesAddressIdResponseBody = {
  id: "<id>",
  customData: {},
  createdAt: "1710583671254",
  updatedAt: "1737945126297",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `description`                                                                                            | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `firstLine`                                                                                              | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `customData`                                                                                             | [operations.GetAddressesAddressIdCustomData](../../models/operations/getaddressesaddressidcustomdata.md) | :heavy_check_mark:                                                                                       | Any valid JSON value                                                                                     |
| `city`                                                                                                   | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `status`                                                                                                 | [operations.GetAddressesAddressIdStatus](../../models/operations/getaddressesaddressidstatus.md)         | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `createdAt`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `updatedAt`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `customerId`                                                                                             | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |