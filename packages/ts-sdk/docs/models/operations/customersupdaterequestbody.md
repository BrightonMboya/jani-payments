# CustomersUpdateRequestBody

## Example Usage

```typescript
import { CustomersUpdateRequestBody } from "jani-payments/models/operations";

let value: CustomersUpdateRequestBody = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `email`                                                                                      | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `name`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `status`                                                                                     | [operations.CustomersUpdateStatus](../../models/operations/customersupdatestatus.md)         | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `customData`                                                                                 | [operations.CustomersUpdateCustomData](../../models/operations/customersupdatecustomdata.md) | :heavy_minus_sign:                                                                           | Any valid JSON value                                                                         |