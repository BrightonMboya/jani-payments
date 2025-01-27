# PatchSubscriptionSubscriptionIdScheduledChange

## Example Usage

```typescript
import { PatchSubscriptionSubscriptionIdScheduledChange } from "jani-payments/models/operations";

let value: PatchSubscriptionSubscriptionIdScheduledChange = {
  id: "<id>",
  subscriptionId: "<id>",
  action: "pause",
  effectiveAt: "<value>",
  status: "scheduled",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `subscriptionId`                                                                                                     | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `action`                                                                                                             | [operations.PatchSubscriptionSubscriptionIdAction](../../models/operations/patchsubscriptionsubscriptionidaction.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `effectiveAt`                                                                                                        | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `resumesAt`                                                                                                          | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `status`                                                                                                             | [operations.PatchSubscriptionSubscriptionIdStatus](../../models/operations/patchsubscriptionsubscriptionidstatus.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |