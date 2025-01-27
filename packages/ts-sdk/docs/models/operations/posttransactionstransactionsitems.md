# PostTransactionsTransactionsItems

## Example Usage

```typescript
import { PostTransactionsTransactionsItems } from "jani-payments/models/operations";

let value: PostTransactionsTransactionsItems = {
  price: {
    productId: "<id>",
    type: "standard",
    name: "<value>",
    billingCycle: {
      interval: "week",
      frequency: 9430.63,
    },
    trialPeriod: {
      interval: "year",
      frequency: 1988.92,
    },
    unitPrice: {
      amount: 6568.39,
      currencyCode: "BMD",
    },
    status: "archived",
    id: "<id>",
    createdAt: "1732533480993",
    updatedAt: "1737952071859",
  },
  quantity: 4173.33,
  product: {
    id: "<id>",
    name: "<value>",
    description: "cleverly wrong abnegate convection bogus till",
    status: "active",
    createdAt: "1736708292584",
    updatedAt: "1737913692887",
    customData: {},
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `price`                                                  | [operations.Price](../../models/operations/price.md)     | :heavy_check_mark:                                       | N/A                                                      |
| `quantity`                                               | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `product`                                                | [operations.Product](../../models/operations/product.md) | :heavy_check_mark:                                       | N/A                                                      |