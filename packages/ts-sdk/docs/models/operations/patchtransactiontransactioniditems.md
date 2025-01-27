# PatchTransactionTransactionIdItems

## Example Usage

```typescript
import { PatchTransactionTransactionIdItems } from "jani-payments/models/operations";

let value: PatchTransactionTransactionIdItems = {
  price: {
    productId: "<id>",
    type: "custom",
    name: "<value>",
    billingCycle: {
      interval: "month",
      frequency: 8204.62,
    },
    trialPeriod: {
      interval: "day",
      frequency: 3259.24,
    },
    unitPrice: {
      amount: 7083.6,
      currencyCode: "IQD",
    },
    status: "active",
    id: "<id>",
    createdAt: "1720160079403",
    updatedAt: "1737971405938",
  },
  quantity: 4090.21,
  product: {
    id: "<id>",
    name: "<value>",
    description: "up sin astride acidic range",
    status: "archived",
    createdAt: "1731326369695",
    updatedAt: "1737964660208",
    customData: {},
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `price`                                                                                                            | [operations.PatchTransactionTransactionIdPrice](../../models/operations/patchtransactiontransactionidprice.md)     | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `quantity`                                                                                                         | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `product`                                                                                                          | [operations.PatchTransactionTransactionIdProduct](../../models/operations/patchtransactiontransactionidproduct.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |