# AddressesListResponseBody

## Example Usage

```typescript
import { AddressesListResponseBody } from "jani-payments/models/operations";

let value: AddressesListResponseBody = {
  id: "<id>",
  customData: {},
  createdAt: "1736973485813",
  updatedAt: "1737983239906",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `description`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `firstLine`                                                                              | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `customData`                                                                             | [operations.AddressesListCustomData](../../models/operations/addresseslistcustomdata.md) | :heavy_check_mark:                                                                       | Any valid JSON value                                                                     |
| `city`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `status`                                                                                 | [operations.AddressesListStatus](../../models/operations/addressesliststatus.md)         | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `createdAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updatedAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `customerId`                                                                             | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |