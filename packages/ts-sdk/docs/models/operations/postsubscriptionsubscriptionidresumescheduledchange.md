# PostSubscriptionSubscriptionIdResumeScheduledChange

## Example Usage

```typescript
import { PostSubscriptionSubscriptionIdResumeScheduledChange } from "jani-payments/models/operations";

let value: PostSubscriptionSubscriptionIdResumeScheduledChange = {
  id: "<id>",
  subscriptionId: "<id>",
  action: "cancel",
  effectiveAt: "<value>",
  status: "scheduled",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                           | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `subscriptionId`                                                                                                               | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `action`                                                                                                                       | [operations.PostSubscriptionSubscriptionIdResumeAction](../../models/operations/postsubscriptionsubscriptionidresumeaction.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `effectiveAt`                                                                                                                  | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `resumesAt`                                                                                                                    | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `status`                                                                                                                       | [operations.PostSubscriptionSubscriptionIdResumeStatus](../../models/operations/postsubscriptionsubscriptionidresumestatus.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |