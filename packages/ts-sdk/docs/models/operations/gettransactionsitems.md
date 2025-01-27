# GetTransactionsItems

## Example Usage

```typescript
import { GetTransactionsItems } from "jani-payments/models/operations";

let value: GetTransactionsItems = {
  price: {
    productId: "<id>",
    type: "standard",
    name: "<value>",
    billingCycle: {
      interval: "week",
      frequency: 7815.82,
    },
    trialPeriod: {
      interval: "month",
      frequency: 9163.41,
    },
    unitPrice: {
      amount: 2593.77,
      currencyCode: "SEK",
    },
    status: "active",
    id: "<id>",
    createdAt: "1724532688142",
    updatedAt: "1737975446814",
  },
  quantity: 9792.87,
  product: {
    id: "<id>",
    name: "<value>",
    description: "materialise lined brr airmail if while unless after vainly",
    status: "active",
    createdAt: "1724040021844",
    updatedAt: "1737977813992",
    customData: {},
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `price`                                                                                | [operations.GetTransactionsPrice](../../models/operations/gettransactionsprice.md)     | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `quantity`                                                                             | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `product`                                                                              | [operations.GetTransactionsProduct](../../models/operations/gettransactionsproduct.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |