# TransactionsUpdateRequest

## Example Usage

```typescript
import { TransactionsUpdateRequest } from "jani-payments/models/operations";

let value: TransactionsUpdateRequest = {
  transactionId: "<id>",
  requestBody: {
    status: "cancelled",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `transactionId`                                                                                      | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `requestBody`                                                                                        | [operations.TransactionsUpdateRequestBody](../../models/operations/transactionsupdaterequestbody.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |