# SubscriptionActivateSubscriptionScheduledChange

## Example Usage

```typescript
import { SubscriptionActivateSubscriptionScheduledChange } from "jani-payments/models/operations";

let value: SubscriptionActivateSubscriptionScheduledChange = {
  id: "<id>",
  subscriptionId: "<id>",
  action: "pause",
  effectiveAt: "<value>",
  status: "scheduled",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `subscriptionId`                                                                                                       | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `action`                                                                                                               | [operations.SubscriptionActivateSubscriptionAction](../../models/operations/subscriptionactivatesubscriptionaction.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `effectiveAt`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `resumesAt`                                                                                                            | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `status`                                                                                                               | [operations.SubscriptionActivateSubscriptionStatus](../../models/operations/subscriptionactivatesubscriptionstatus.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |