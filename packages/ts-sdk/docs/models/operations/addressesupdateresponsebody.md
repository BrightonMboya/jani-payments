# AddressesUpdateResponseBody

Update an Address

## Example Usage

```typescript
import { AddressesUpdateResponseBody } from "jani-payments/models/operations";

let value: AddressesUpdateResponseBody = {
  id: "<id>",
  customData: {},
  status: "active",
  createdAt: "1735593516897",
  updatedAt: "1737973350417",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `description`                                                                                                  | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `firstLine`                                                                                                    | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `customData`                                                                                                   | [operations.AddressesUpdateAddressesCustomData](../../models/operations/addressesupdateaddressescustomdata.md) | :heavy_check_mark:                                                                                             | Any valid JSON value                                                                                           |
| `city`                                                                                                         | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `status`                                                                                                       | [operations.AddressesUpdateAddressesStatus](../../models/operations/addressesupdateaddressesstatus.md)         | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `createdAt`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `updatedAt`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `customerId`                                                                                                   | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |