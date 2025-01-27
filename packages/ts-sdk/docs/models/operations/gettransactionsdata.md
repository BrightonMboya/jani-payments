# GetTransactionsData

## Example Usage

```typescript
import { GetTransactionsData } from "jani-payments/models/operations";

let value: GetTransactionsData = {
  status: "billed",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "SHP",
  details: {
    total: {
      subtotal: 6886.84,
      discount: 7079.83,
      grandTotal: 7672.1,
    },
  },
  items: [
    {
      price: {
        productId: "<id>",
        type: "standard",
        name: "<value>",
        billingCycle: {
          interval: "month",
          frequency: 5433.53,
        },
        trialPeriod: {
          interval: "month",
          frequency: 9568.71,
        },
        unitPrice: {
          amount: 2779.9,
          currencyCode: "SSP",
        },
        status: "archived",
        id: "<id>",
        createdAt: "1724746106168",
        updatedAt: "1737964274091",
      },
      quantity: 9440.33,
      product: {
        id: "<id>",
        name: "<value>",
        description: "reel foot oof",
        status: "archived",
        createdAt: "1725921118470",
        updatedAt: "1737982460977",
        customData: {},
      },
    },
  ],
  payments: {
    id: "<id>",
    status: "REFUNDED",
    paymentMethod: "BANK_TRANSFER",
    provider: "STRIPE",
    createdAt: "1717975363679",
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
  createdAt: "1721810428098",
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
    createdAt: "1737679985979",
    updatedAt: "1737976134186",
  },
  invoiceId: "<id>",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                         | [operations.GetTransactionsStatus](../../models/operations/gettransactionsstatus.md)                             | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `customerId`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `addressId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `currencyCode`                                                                                                   | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `subscriptionId`                                                                                                 | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `discountId`                                                                                                     | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `collectionMode`                                                                                                 | [operations.GetTransactionsCollectionMode](../../models/operations/gettransactionscollectionmode.md)             | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `customData`                                                                                                     | [operations.GetTransactionsCustomData](../../models/operations/gettransactionscustomdata.md)                     | :heavy_minus_sign:                                                                                               | Any valid JSON value                                                                                             |
| `currentBillingPeriod`                                                                                           | [operations.GetTransactionsCurrentBillingPeriod](../../models/operations/gettransactionscurrentbillingperiod.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `details`                                                                                                        | [operations.GetTransactionsDetails](../../models/operations/gettransactionsdetails.md)                           | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `items`                                                                                                          | [operations.GetTransactionsItems](../../models/operations/gettransactionsitems.md)[]                             | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `payments`                                                                                                       | [operations.GetTransactionsPayments](../../models/operations/gettransactionspayments.md)                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `createdAt`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `updatedAt`                                                                                                      | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `customer`                                                                                                       | [operations.GetTransactionsCustomer](../../models/operations/gettransactionscustomer.md)                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `address`                                                                                                        | [operations.GetTransactionsAddress](../../models/operations/gettransactionsaddress.md)                           | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `discount`                                                                                                       | [operations.GetTransactionsDiscount](../../models/operations/gettransactionsdiscount.md)                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `invoiceId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |