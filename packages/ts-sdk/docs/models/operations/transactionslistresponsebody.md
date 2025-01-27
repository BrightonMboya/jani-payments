# TransactionsListResponseBody

Returns the list of all Transactions

## Example Usage

```typescript
import { TransactionsListResponseBody } from "jani-payments/models/operations";

let value: TransactionsListResponseBody = {
  data: [
    {
      status: "billed",
      customerId: "<id>",
      addressId: "<id>",
      currencyCode: "XAF",
      details: {
        total: {
          subtotal: 8847.65,
          discount: 7019.78,
          grandTotal: 4896.85,
        },
      },
      items: [
        {
          price: {
            productId: "<id>",
            type: "standard",
            name: "<value>",
            billingCycle: {
              interval: "week",
              frequency: 7044.02,
            },
            trialPeriod: {
              interval: "week",
              frequency: 1039.88,
            },
            unitPrice: {
              amount: 9078.99,
              currencyCode: "RSD",
            },
            status: "archived",
            id: "<id>",
            createdAt: "1731441492345",
            updatedAt: "1737971046632",
          },
          quantity: 4834.59,
          product: {
            id: "<id>",
            name: "<value>",
            description:
              "fruitful gleaming while phooey the worthless times worldly hover nimble",
            status: "archived",
            createdAt: "1730749124410",
            updatedAt: "1737977319405",
            customData: {},
          },
        },
      ],
      payments: {
        id: "<id>",
        status: "PENDING",
        paymentMethod: "CARD",
        provider: "PAYSTACK",
        createdAt: "1735561989622",
        providerReference: "<value>",
        providerMetadata: {},
        methodDetails: {
          paymentMethod: "MOBILE_MONEY",
          details: {
            network: "<value>",
            phoneSuffix: "<value>",
          },
        },
      },
      createdAt: "1737435696825",
      customer: {
        id: "cus_2e229e50-1b92-4479-b3e3-829a3da6fc00",
        email: "brighton@gmail.com",
        name: "Brighton Mboya",
        status: "active",
        description: "First Customer to test out our MVP",
        customData: {},
        createdAt: "2024-12-30T11:04:30.475Z",
        updatedAt: "2024-12-30T11:05:42.118Z",
      },
      address: {
        id: "<id>",
        customData: {},
        status: "archived",
        createdAt: "1708777433195",
        updatedAt: "1737941266659",
      },
      invoiceId: "<id>",
    },
  ],
  meta: {
    total: 7175.6,
    perPage: 7381.52,
    nextCursor: "<value>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `data`                                                                               | [operations.TransactionsListData](../../models/operations/transactionslistdata.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `meta`                                                                               | [operations.Meta](../../models/operations/meta.md)                                   | :heavy_check_mark:                                                                   | N/A                                                                                  |