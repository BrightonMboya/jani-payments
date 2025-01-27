# SubscriptionUpdateSubscriptionRequest

## Example Usage

```typescript
import { SubscriptionUpdateSubscriptionRequest } from "jani-payments/models/operations";

let value: SubscriptionUpdateSubscriptionRequest = {
  subscriptionId: "<id>",
  requestBody: {
    billingDetails: {},
    items: [
      {
        priceId: "<id>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `subscriptionId`                                                                                                             | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `requestBody`                                                                                                                | [operations.SubscriptionUpdateSubscriptionRequestBody](../../models/operations/subscriptionupdatesubscriptionrequestbody.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |