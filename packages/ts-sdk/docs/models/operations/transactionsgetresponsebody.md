# TransactionsGetResponseBody

Returns a transaction given its id

## Example Usage

```typescript
import { TransactionsGetResponseBody } from "jani-payments/models/operations";

let value: TransactionsGetResponseBody = {
  status: "billed",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "AFN",
  details: {
    total: {
      subtotal: 5320.92,
      discount: 9427.8,
      grandTotal: 6442.99,
    },
  },
  items: [
    {
      price: {
        productId: "<id>",
        type: "custom",
        name: "<value>",
        billingCycle: {
          interval: "week",
          frequency: 5818.89,
        },
        trialPeriod: {
          interval: "day",
          frequency: 8768.21,
        },
        unitPrice: {
          amount: 7607.93,
          currencyCode: "ZWL",
        },
        status: "active",
        id: "<id>",
        createdAt: "1713608480184",
        updatedAt: "1737909661802",
      },
      quantity: 9642.1,
      product: {
        id: "<id>",
        name: "<value>",
        description:
          "exasperation cap seemingly deep from supposing drowse intent foodstuffs",
        status: "active",
        createdAt: "1708400984729",
        updatedAt: "1737969807762",
        customData: {},
      },
    },
  ],
  payments: {
    id: "<id>",
    status: "PROCESSING",
    paymentMethod: "CARD",
    provider: "SELCOM",
    createdAt: "1706499534339",
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
  createdAt: "1731019291492",
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
    createdAt: "1730708224341",
    updatedAt: "1737945244131",
  },
  invoiceId: "<id>",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                         | [operations.TransactionsGetStatus](../../models/operations/transactionsgetstatus.md)                             | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `customerId`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `addressId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `currencyCode`                                                                                                   | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `subscriptionId`                                                                                                 | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `discountId`                                                                                                     | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `collectionMode`                                                                                                 | [operations.TransactionsGetCollectionMode](../../models/operations/transactionsgetcollectionmode.md)             | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `customData`                                                                                                     | [operations.TransactionsGetCustomData](../../models/operations/transactionsgetcustomdata.md)                     | :heavy_minus_sign:                                                                                               | Any valid JSON value                                                                                             |
| `currentBillingPeriod`                                                                                           | [operations.TransactionsGetCurrentBillingPeriod](../../models/operations/transactionsgetcurrentbillingperiod.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `details`                                                                                                        | [operations.TransactionsGetDetails](../../models/operations/transactionsgetdetails.md)                           | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `items`                                                                                                          | [operations.TransactionsGetItems](../../models/operations/transactionsgetitems.md)[]                             | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `payments`                                                                                                       | [operations.TransactionsGetPayments](../../models/operations/transactionsgetpayments.md)                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `createdAt`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `updatedAt`                                                                                                      | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `customer`                                                                                                       | [operations.TransactionsGetCustomer](../../models/operations/transactionsgetcustomer.md)                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `address`                                                                                                        | [operations.TransactionsGetAddress](../../models/operations/transactionsgetaddress.md)                           | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `discount`                                                                                                       | [operations.TransactionsGetDiscount](../../models/operations/transactionsgetdiscount.md)                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `invoiceId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |