# CustomersUpdateResponseBody

Update a Customer

## Example Usage

```typescript
import { CustomersUpdateResponseBody } from "jani-payments/models/operations";

let value: CustomersUpdateResponseBody = {
  id: "<id>",
  email: "Viviane.Klein-Bernier@hotmail.com",
  name: "<value>",
  status: "active",
  customData: {},
  createdAt: "1725500705384",
  updatedAt: "1737931921153",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `email`                                                                                                        | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `name`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `status`                                                                                                       | [operations.CustomersUpdateCustomersStatus](../../models/operations/customersupdatecustomersstatus.md)         | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `description`                                                                                                  | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `customData`                                                                                                   | [operations.CustomersUpdateCustomersCustomData](../../models/operations/customersupdatecustomerscustomdata.md) | :heavy_check_mark:                                                                                             | Any valid JSON value                                                                                           |
| `createdAt`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `updatedAt`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |