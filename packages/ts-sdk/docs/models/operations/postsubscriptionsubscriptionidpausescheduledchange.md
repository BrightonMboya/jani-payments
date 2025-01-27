# PostSubscriptionSubscriptionIdPauseScheduledChange

## Example Usage

```typescript
import { PostSubscriptionSubscriptionIdPauseScheduledChange } from "jani-payments/models/operations";

let value: PostSubscriptionSubscriptionIdPauseScheduledChange = {
  id: "<id>",
  subscriptionId: "<id>",
  action: "pause",
  effectiveAt: "<value>",
  status: "completed",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `subscriptionId`                                                                                                             | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `action`                                                                                                                     | [operations.PostSubscriptionSubscriptionIdPauseAction](../../models/operations/postsubscriptionsubscriptionidpauseaction.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `effectiveAt`                                                                                                                | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `resumesAt`                                                                                                                  | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `status`                                                                                                                     | [operations.PostSubscriptionSubscriptionIdPauseStatus](../../models/operations/postsubscriptionsubscriptionidpausestatus.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |