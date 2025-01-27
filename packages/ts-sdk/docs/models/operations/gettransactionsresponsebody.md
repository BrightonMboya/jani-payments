# GetTransactionsResponseBody

Returns the list of all Transactions

## Example Usage

```typescript
import { GetTransactionsResponseBody } from "jani-payments/models/operations";

let value: GetTransactionsResponseBody = {
  data: [
    {
      status: "cancelled",
      customerId: "<id>",
      addressId: "<id>",
      currencyCode: "MGA",
      details: {
        total: {
          subtotal: 2001.9,
          discount: 6736.53,
          grandTotal: 6442.23,
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
              frequency: 600.78,
            },
            trialPeriod: {
              interval: "day",
              frequency: 1323.05,
            },
            unitPrice: {
              amount: 1932.36,
              currencyCode: "PLN",
            },
            status: "active",
            id: "<id>",
            createdAt: "1709655418834",
            updatedAt: "1737904524259",
          },
          quantity: 3165.41,
          product: {
            id: "<id>",
            name: "<value>",
            description: "capsize unfinished boo upside-down fruitful",
            status: "archived",
            createdAt: "1734892940880",
            updatedAt: "1737932564991",
            customData: {},
          },
        },
      ],
      payments: {
        id: "<id>",
        status: "REFUNDED",
        paymentMethod: "BANK_TRANSFER",
        provider: "TIGO",
        createdAt: "1716529613008",
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
      createdAt: "1727620628567",
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
        createdAt: "1733027336826",
        updatedAt: "1737894336017",
      },
      invoiceId: "<id>",
    },
  ],
  meta: {
    total: 6428.04,
    perPage: 4428.73,
    nextCursor: "<value>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `data`                                                                             | [operations.GetTransactionsData](../../models/operations/gettransactionsdata.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |
| `meta`                                                                             | [operations.Meta](../../models/operations/meta.md)                                 | :heavy_check_mark:                                                                 | N/A                                                                                |