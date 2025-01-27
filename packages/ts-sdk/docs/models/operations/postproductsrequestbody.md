# PostProductsRequestBody

## Example Usage

```typescript
import { PostProductsRequestBody } from "jani-payments/models/operations";

let value: PostProductsRequestBody = {
  name: "<value>",
  description:
    "because furiously unless factorise although dishearten unaccountably unconscious",
  status: "archived",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `description`                                                  | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `status`                                                       | [operations.Status](../../models/operations/status.md)         | :heavy_check_mark:                                             | N/A                                                            |
| `customData`                                                   | [operations.CustomData](../../models/operations/customdata.md) | :heavy_minus_sign:                                             | Any valid JSON value                                           |