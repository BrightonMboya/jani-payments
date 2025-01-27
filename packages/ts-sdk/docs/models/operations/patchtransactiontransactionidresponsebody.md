# PatchTransactionTransactionIdResponseBody

Returns an updated Transaction

## Example Usage

```typescript
import { PatchTransactionTransactionIdResponseBody } from "jani-payments/models/operations";

let value: PatchTransactionTransactionIdResponseBody = {
  status: "cancelled",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "XPF",
  details: {
    total: {
      subtotal: 5850.51,
      discount: 9674.01,
      grandTotal: 9616.07,
    },
  },
  items: [
    {
      price: {
        productId: "<id>",
        type: "custom",
        name: "<value>",
        billingCycle: {
          interval: "month",
          frequency: 4660.22,
        },
        trialPeriod: {
          interval: "year",
          frequency: 282.56,
        },
        unitPrice: {
          amount: 1138.08,
          currencyCode: "BIF",
        },
        status: "archived",
        id: "<id>",
        createdAt: "1717154566455",
        updatedAt: "1737948051951",
      },
      quantity: 6037.83,
      product: {
        id: "<id>",
        name: "<value>",
        description: "via serve awkwardly uselessly testify vulgarise",
        status: "active",
        createdAt: "1728098788202",
        updatedAt: "1737978890638",
        customData: {},
      },
    },
  ],
  payments: {
    id: "<id>",
    status: "FAILED",
    paymentMethod: "CARD",
    provider: "MPESA",
    createdAt: "1716636246370",
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
  createdAt: "1712782240778",
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
    createdAt: "1733046796837",
    updatedAt: "1737953093780",
  },
  invoiceId: "<id>",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                     | [operations.PatchTransactionTransactionIdTransactionsStatus](../../models/operations/patchtransactiontransactionidtransactionsstatus.md)     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `customerId`                                                                                                                                 | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `addressId`                                                                                                                                  | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `currencyCode`                                                                                                                               | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `subscriptionId`                                                                                                                             | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `discountId`                                                                                                                                 | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `collectionMode`                                                                                                                             | [operations.PatchTransactionTransactionIdCollectionMode](../../models/operations/patchtransactiontransactionidcollectionmode.md)             | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `customData`                                                                                                                                 | [operations.PatchTransactionTransactionIdCustomData](../../models/operations/patchtransactiontransactionidcustomdata.md)                     | :heavy_minus_sign:                                                                                                                           | Any valid JSON value                                                                                                                         |
| `currentBillingPeriod`                                                                                                                       | [operations.PatchTransactionTransactionIdCurrentBillingPeriod](../../models/operations/patchtransactiontransactionidcurrentbillingperiod.md) | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `details`                                                                                                                                    | [operations.PatchTransactionTransactionIdDetails](../../models/operations/patchtransactiontransactioniddetails.md)                           | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `items`                                                                                                                                      | [operations.PatchTransactionTransactionIdItems](../../models/operations/patchtransactiontransactioniditems.md)[]                             | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `payments`                                                                                                                                   | [operations.PatchTransactionTransactionIdPayments](../../models/operations/patchtransactiontransactionidpayments.md)                         | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `createdAt`                                                                                                                                  | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `updatedAt`                                                                                                                                  | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `customer`                                                                                                                                   | [operations.PatchTransactionTransactionIdCustomer](../../models/operations/patchtransactiontransactionidcustomer.md)                         | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `address`                                                                                                                                    | [operations.PatchTransactionTransactionIdAddress](../../models/operations/patchtransactiontransactionidaddress.md)                           | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `discount`                                                                                                                                   | [operations.PatchTransactionTransactionIdDiscount](../../models/operations/patchtransactiontransactioniddiscount.md)                         | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `invoiceId`                                                                                                                                  | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |