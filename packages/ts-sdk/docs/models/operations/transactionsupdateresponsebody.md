# TransactionsUpdateResponseBody

Returns an updated Transaction

## Example Usage

```typescript
import { TransactionsUpdateResponseBody } from "jani-payments/models/operations";

let value: TransactionsUpdateResponseBody = {
  status: "billed",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "EUR",
  details: {
    total: {
      subtotal: 7914.54,
      discount: 6238.67,
      grandTotal: 4397.45,
    },
  },
  items: [
    {
      price: {
        productId: "<id>",
        type: "standard",
        name: "<value>",
        billingCycle: {
          interval: "year",
          frequency: 9620.24,
        },
        trialPeriod: {
          interval: "day",
          frequency: 413.46,
        },
        unitPrice: {
          amount: 5301.99,
          currencyCode: "XOF",
        },
        status: "archived",
        id: "<id>",
        createdAt: "1724887175556",
        updatedAt: "1737925074382",
      },
      quantity: 3299.61,
      product: {
        id: "<id>",
        name: "<value>",
        description:
          "testify vulgarise yum near emphasize overload stiff unto excepting insidious",
        status: "active",
        createdAt: "1724747953669",
        updatedAt: "1737976385410",
        customData: {},
      },
    },
  ],
  payments: {
    id: "<id>",
    status: "COMPLETED",
    paymentMethod: "BANK_TRANSFER",
    provider: "FLUTTERWAVE",
    createdAt: "1726028106960",
    providerReference: "<value>",
    providerMetadata: {},
    methodDetails: {
      paymentMethod: "BANK_TRANSFER",
      details: {
        bankName: "<value>",
        bankReference: "<value>",
      },
    },
  },
  createdAt: "1724254381953",
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
    createdAt: "1737385413472",
    updatedAt: "1737920089203",
  },
  invoiceId: "<id>",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                               | [operations.TransactionsUpdateTransactionsStatus](../../models/operations/transactionsupdatetransactionsstatus.md)     | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `customerId`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `addressId`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `currencyCode`                                                                                                         | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `subscriptionId`                                                                                                       | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `discountId`                                                                                                           | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `collectionMode`                                                                                                       | [operations.TransactionsUpdateCollectionMode](../../models/operations/transactionsupdatecollectionmode.md)             | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `customData`                                                                                                           | [operations.TransactionsUpdateCustomData](../../models/operations/transactionsupdatecustomdata.md)                     | :heavy_minus_sign:                                                                                                     | Any valid JSON value                                                                                                   |
| `currentBillingPeriod`                                                                                                 | [operations.TransactionsUpdateCurrentBillingPeriod](../../models/operations/transactionsupdatecurrentbillingperiod.md) | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `details`                                                                                                              | [operations.TransactionsUpdateDetails](../../models/operations/transactionsupdatedetails.md)                           | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `items`                                                                                                                | [operations.TransactionsUpdateItems](../../models/operations/transactionsupdateitems.md)[]                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `payments`                                                                                                             | [operations.TransactionsUpdatePayments](../../models/operations/transactionsupdatepayments.md)                         | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `createdAt`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `updatedAt`                                                                                                            | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `customer`                                                                                                             | [operations.TransactionsUpdateCustomer](../../models/operations/transactionsupdatecustomer.md)                         | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `address`                                                                                                              | [operations.TransactionsUpdateAddress](../../models/operations/transactionsupdateaddress.md)                           | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `discount`                                                                                                             | [operations.TransactionsUpdateDiscount](../../models/operations/transactionsupdatediscount.md)                         | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `invoiceId`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |