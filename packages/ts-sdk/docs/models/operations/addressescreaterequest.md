# AddressesCreateRequest

## Example Usage

```typescript
import { AddressesCreateRequest } from "jani-payments/models/operations";

let value: AddressesCreateRequest = {
  customerId: "<id>",
  requestBody: {
    status: "active",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `customerId`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `requestBody`                                                                                  | [operations.AddressesCreateRequestBody](../../models/operations/addressescreaterequestbody.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |