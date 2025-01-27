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
    createdAt: "1720164473019",
    updatedAt: "1737975799554",
  },
  quantity: 4090.21,
  product: {
    id: "<id>",
    name: "<value>",
    description: "up sin astride acidic range",
    status: "archived",
    createdAt: "1731330763311",
    updatedAt: "1737969053824",
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