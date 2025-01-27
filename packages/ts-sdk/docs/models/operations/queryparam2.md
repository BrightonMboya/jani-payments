# QueryParam2

## Example Usage

```typescript
import { QueryParam2 } from "jani-payments/models/operations";

let value: QueryParam2 = {
  operator: "GTE",
  value: new Date("2023-12-29T03:54:31.758Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `operator`                                                                                    | [operations.QueryParamOperator](../../models/operations/queryparamoperator.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `value`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |