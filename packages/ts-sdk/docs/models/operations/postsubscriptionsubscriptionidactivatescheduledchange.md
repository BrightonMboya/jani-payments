# PostSubscriptionSubscriptionIdActivateScheduledChange

## Example Usage

```typescript
import { PostSubscriptionSubscriptionIdActivateScheduledChange } from "jani-payments/models/operations";

let value: PostSubscriptionSubscriptionIdActivateScheduledChange = {
  id: "<id>",
  subscriptionId: "<id>",
  action: "cancel",
  effectiveAt: "<value>",
  status: "scheduled",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `subscriptionId`                                                                                                                   | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `action`                                                                                                                           | [operations.PostSubscriptionSubscriptionIdActivateAction](../../models/operations/postsubscriptionsubscriptionidactivateaction.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `effectiveAt`                                                                                                                      | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `resumesAt`                                                                                                                        | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `status`                                                                                                                           | [operations.PostSubscriptionSubscriptionIdActivateStatus](../../models/operations/postsubscriptionsubscriptionidactivatestatus.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |