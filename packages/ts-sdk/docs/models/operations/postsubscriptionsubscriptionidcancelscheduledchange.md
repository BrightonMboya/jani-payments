# PostSubscriptionSubscriptionIdCancelScheduledChange

## Example Usage

```typescript
import { PostSubscriptionSubscriptionIdCancelScheduledChange } from "jani-payments/models/operations";

let value: PostSubscriptionSubscriptionIdCancelScheduledChange = {
  id: "<id>",
  subscriptionId: "<id>",
  action: "pause",
  effectiveAt: "<value>",
  status: "completed",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                           | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `subscriptionId`                                                                                                               | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `action`                                                                                                                       | [operations.PostSubscriptionSubscriptionIdCancelAction](../../models/operations/postsubscriptionsubscriptionidcancelaction.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `effectiveAt`                                                                                                                  | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `resumesAt`                                                                                                                    | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `status`                                                                                                                       | [operations.PostSubscriptionSubscriptionIdCancelStatus](../../models/operations/postsubscriptionsubscriptionidcancelstatus.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |