# GetSubscriptionScheduledChange

## Example Usage

```typescript
import { GetSubscriptionScheduledChange } from "jani-payments/models/operations";

let value: GetSubscriptionScheduledChange = {
  id: "<id>",
  subscriptionId: "<id>",
  action: "cancel",
  effectiveAt: "<value>",
  status: "scheduled",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `subscriptionId`                                                                     | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `action`                                                                             | [operations.GetSubscriptionAction](../../models/operations/getsubscriptionaction.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `effectiveAt`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `resumesAt`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `status`                                                                             | [operations.GetSubscriptionStatus](../../models/operations/getsubscriptionstatus.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |