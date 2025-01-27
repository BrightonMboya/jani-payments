# SubscriptionPauseSubscriptionRequest

## Example Usage

```typescript
import { SubscriptionPauseSubscriptionRequest } from "jani-payments/models/operations";

let value: SubscriptionPauseSubscriptionRequest = {
  subscriptionId: "<id>",
  requestBody: {
    onResume: "continue_existing_billing_period",
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `subscriptionId`                                                                                                           | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `requestBody`                                                                                                              | [operations.SubscriptionPauseSubscriptionRequestBody](../../models/operations/subscriptionpausesubscriptionrequestbody.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |