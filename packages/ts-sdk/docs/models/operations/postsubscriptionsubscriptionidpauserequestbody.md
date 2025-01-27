# PostSubscriptionSubscriptionIdPauseRequestBody

## Example Usage

```typescript
import { PostSubscriptionSubscriptionIdPauseRequestBody } from "jani-payments/models/operations";

let value: PostSubscriptionSubscriptionIdPauseRequestBody = {
  onResume: "continue_existing_billing_period",
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `effectiveFrom`                                                                                                                            | [operations.PostSubscriptionSubscriptionIdPauseEffectiveFrom](../../models/operations/postsubscriptionsubscriptionidpauseeffectivefrom.md) | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `resumeAt`                                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                              | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `onResume`                                                                                                                                 | [operations.OnResume](../../models/operations/onresume.md)                                                                                 | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |