# GetTransactionTransactionIdItems

## Example Usage

```typescript
import { GetTransactionTransactionIdItems } from "jani-payments/models/operations";

let value: GetTransactionTransactionIdItems = {
  price: {
    productId: "<id>",
    type: "custom",
    name: "<value>",
    billingCycle: {
      interval: "year",
      frequency: 7047.32,
    },
    trialPeriod: {
      interval: "month",
      frequency: 9559.62,
    },
    unitPrice: {
      amount: 9582.8,
      currencyCode: "THB",
    },
    status: "archived",
    id: "<id>",
    createdAt: "1721829868226",
    updatedAt: "1737898476063",
  },
  quantity: 6062.62,
  product: {
    id: "<id>",
    name: "<value>",
    description:
      "sushi straw ha nudge er after well-off license cheerfully repeatedly",
    status: "archived",
    createdAt: "1725595773628",
    updatedAt: "1737980051621",
    customData: {},
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `price`                                                                                                        | [operations.GetTransactionTransactionIdPrice](../../models/operations/gettransactiontransactionidprice.md)     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `quantity`                                                                                                     | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `product`                                                                                                      | [operations.GetTransactionTransactionIdProduct](../../models/operations/gettransactiontransactionidproduct.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |