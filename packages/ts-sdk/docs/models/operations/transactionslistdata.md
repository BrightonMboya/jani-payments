# TransactionsListData

## Example Usage

```typescript
import { TransactionsListData } from "jani-payments/models/operations";

let value: TransactionsListData = {
  status: "cancelled",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "XOF",
  details: {
    total: {
      subtotal: 6940.88,
      discount: 7811.93,
      grandTotal: 1689.26,
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
          frequency: 6863.8,
        },
        trialPeriod: {
          interval: "week",
          frequency: 3032.92,
        },
        unitPrice: {
          amount: 3558.89,
          currencyCode: "SYP",
        },
        status: "archived",
        id: "<id>",
        createdAt: "1708823191853",
        updatedAt: "1737905608016",
      },
      quantity: 3712.87,
      product: {
        id: "<id>",
        name: "<value>",
        description:
          "showy wealthy how onto vamoose genuine aboard barring alongside",
        status: "active",
        createdAt: "1716431688109",
        updatedAt: "1737924659363",
        customData: {},
      },
    },
  ],
  payments: {
    id: "<id>",
    status: "PROCESSING",
    paymentMethod: "BANK_TRANSFER",
    provider: "SELCOM",
    createdAt: "1723288774902",
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
  createdAt: "1718956743735",
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
    createdAt: "1719340338714",
    updatedAt: "1737924432780",
  },
  invoiceId: "<id>",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `status`                                                                                                           | [operations.TransactionsListStatus](../../models/operations/transactionsliststatus.md)                             | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `customerId`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `addressId`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `currencyCode`                                                                                                     | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `subscriptionId`                                                                                                   | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `discountId`                                                                                                       | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `collectionMode`                                                                                                   | [operations.TransactionsListCollectionMode](../../models/operations/transactionslistcollectionmode.md)             | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `customData`                                                                                                       | [operations.TransactionsListCustomData](../../models/operations/transactionslistcustomdata.md)                     | :heavy_minus_sign:                                                                                                 | Any valid JSON value                                                                                               |
| `currentBillingPeriod`                                                                                             | [operations.TransactionsListCurrentBillingPeriod](../../models/operations/transactionslistcurrentbillingperiod.md) | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `details`                                                                                                          | [operations.TransactionsListDetails](../../models/operations/transactionslistdetails.md)                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `items`                                                                                                            | [operations.TransactionsListItems](../../models/operations/transactionslistitems.md)[]                             | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `payments`                                                                                                         | [operations.TransactionsListPayments](../../models/operations/transactionslistpayments.md)                         | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `createdAt`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `updatedAt`                                                                                                        | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `customer`                                                                                                         | [operations.TransactionsListCustomer](../../models/operations/transactionslistcustomer.md)                         | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `address`                                                                                                          | [operations.TransactionsListAddress](../../models/operations/transactionslistaddress.md)                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `discount`                                                                                                         | [operations.TransactionsListDiscount](../../models/operations/transactionslistdiscount.md)                         | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `invoiceId`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |