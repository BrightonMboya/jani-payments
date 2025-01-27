# TransactionsCreateResponseBody

Creates a Transaction and returns an Id

## Example Usage

```typescript
import { TransactionsCreateResponseBody } from "jani-payments/models/operations";

let value: TransactionsCreateResponseBody = {
  status: "billed",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "ERN",
  details: {
    total: {
      subtotal: 8846.22,
      discount: 2064.51,
      grandTotal: 7975.27,
    },
  },
  items: [
    {
      price: {
        productId: "<id>",
        type: "custom",
        name: "<value>",
        billingCycle: {
          interval: "year",
          frequency: 1155.61,
        },
        trialPeriod: {
          interval: "day",
          frequency: 7428.99,
        },
        unitPrice: {
          amount: 1960,
          currencyCode: "GBP",
        },
        status: "active",
        id: "<id>",
        createdAt: "1711895410333",
        updatedAt: "1737940453539",
      },
      quantity: 1096.83,
      product: {
        id: "<id>",
        name: "<value>",
        description: "uh-huh the unless scorpion ha",
        status: "archived",
        createdAt: "1724319731532",
        updatedAt: "1737940042974",
        customData: {},
      },
    },
  ],
  payments: {
    id: "<id>",
    status: "FAILED",
    paymentMethod: "CARD",
    provider: "PAYSTACK",
    createdAt: "1730399270184",
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
  createdAt: "1711847329352",
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
    status: "active",
    createdAt: "1716564353773",
    updatedAt: "1737905252098",
  },
  invoiceId: "<id>",
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                       | [operations.TransactionsCreateTransactionsStatus](../../models/operations/transactionscreatetransactionsstatus.md)                             | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `customerId`                                                                                                                                   | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `addressId`                                                                                                                                    | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `currencyCode`                                                                                                                                 | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `subscriptionId`                                                                                                                               | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |
| `discountId`                                                                                                                                   | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |
| `collectionMode`                                                                                                                               | [operations.TransactionsCreateTransactionsCollectionMode](../../models/operations/transactionscreatetransactionscollectionmode.md)             | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |
| `customData`                                                                                                                                   | [operations.TransactionsCreateTransactionsCustomData](../../models/operations/transactionscreatetransactionscustomdata.md)                     | :heavy_minus_sign:                                                                                                                             | Any valid JSON value                                                                                                                           |
| `currentBillingPeriod`                                                                                                                         | [operations.TransactionsCreateTransactionsCurrentBillingPeriod](../../models/operations/transactionscreatetransactionscurrentbillingperiod.md) | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |
| `details`                                                                                                                                      | [operations.Details](../../models/operations/details.md)                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `items`                                                                                                                                        | [operations.TransactionsCreateTransactionsItems](../../models/operations/transactionscreatetransactionsitems.md)[]                             | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `payments`                                                                                                                                     | [operations.Payments](../../models/operations/payments.md)                                                                                     | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `createdAt`                                                                                                                                    | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `updatedAt`                                                                                                                                    | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |
| `customer`                                                                                                                                     | [operations.Customer](../../models/operations/customer.md)                                                                                     | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `address`                                                                                                                                      | [operations.Address](../../models/operations/address.md)                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `discount`                                                                                                                                     | [operations.TransactionsCreateDiscount](../../models/operations/transactionscreatediscount.md)                                                 | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |
| `invoiceId`                                                                                                                                    | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |