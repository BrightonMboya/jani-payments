# TransactionsGetItems

## Example Usage

```typescript
import { TransactionsGetItems } from "jani-payments/models/operations";

let value: TransactionsGetItems = {
  price: {
    productId: "<id>",
    type: "custom",
    name: "<value>",
    billingCycle: {
      interval: "month",
      frequency: 3490.87,
    },
    trialPeriod: {
      interval: "day",
      frequency: 4131.35,
    },
    unitPrice: {
      amount: 5228.24,
      currencyCode: "ARS",
    },
    status: "active",
    id: "<id>",
    createdAt: "1725376663252",
    updatedAt: "1737918287770",
  },
  quantity: 8373.27,
  product: {
    id: "<id>",
    name: "<value>",
    description: "hence optimistically militate rusty so",
    status: "archived",
    createdAt: "1714924528261",
    updatedAt: "1737910059219",
    customData: {},
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `price`                                                                                | [operations.TransactionsGetPrice](../../models/operations/transactionsgetprice.md)     | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `quantity`                                                                             | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `product`                                                                              | [operations.TransactionsGetProduct](../../models/operations/transactionsgetproduct.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |