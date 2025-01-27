# AddressesUpdateRequest

## Example Usage

```typescript
import { AddressesUpdateRequest } from "jani-payments/models/operations";

let value: AddressesUpdateRequest = {
  customerId: "<id>",
  addressId: "<id>",
  requestBody: {},
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `customerId`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `addressId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `requestBody`                                                                                  | [operations.AddressesUpdateRequestBody](../../models/operations/addressesupdaterequestbody.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |