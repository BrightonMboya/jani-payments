# SubscriptionCreateScheduledChange

## Example Usage

```typescript
import { SubscriptionCreateScheduledChange } from "jani-payments/models/operations";

let value: SubscriptionCreateScheduledChange = {
  id: "<id>",
  subscriptionId: "<id>",
  action: "cancel",
  effectiveAt: "<value>",
  status: "scheduled",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `subscriptionId`                                                                                                   | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `action`                                                                                                           | [operations.SubscriptionCreateAction](../../models/operations/subscriptioncreateaction.md)                         | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `effectiveAt`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `resumesAt`                                                                                                        | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `status`                                                                                                           | [operations.SubscriptionCreateSubscriptionStatus](../../models/operations/subscriptioncreatesubscriptionstatus.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |