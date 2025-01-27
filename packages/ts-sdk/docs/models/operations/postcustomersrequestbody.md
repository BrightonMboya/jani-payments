# PostCustomersRequestBody

## Example Usage

```typescript
import { PostCustomersRequestBody } from "jani-payments/models/operations";

let value: PostCustomersRequestBody = {
  email: "Mekhi_Hessel92@gmail.com",
  name: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `email`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `status`                                                                                 | [operations.PostCustomersStatus](../../models/operations/postcustomersstatus.md)         | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `description`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `customData`                                                                             | [operations.PostCustomersCustomData](../../models/operations/postcustomerscustomdata.md) | :heavy_minus_sign:                                                                       | Any valid JSON value                                                                     |