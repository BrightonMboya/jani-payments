# PostTransactionsResponseBody

Creates a Transaction and returns an Id

## Example Usage

```typescript
import { PostTransactionsResponseBody } from "jani-payments/models/operations";

let value: PostTransactionsResponseBody = {
  status: "cancelled",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "AOA",
  details: {
    total: {
      subtotal: 2441.57,
      discount: 3390.94,
      grandTotal: 1887.32,
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
          frequency: 5168.33,
        },
        trialPeriod: {
          interval: "year",
          frequency: 1440.58,
        },
        unitPrice: {
          amount: 8996.52,
          currencyCode: "BND",
        },
        status: "active",
        id: "<id>",
        createdAt: "1728403693518",
        updatedAt: "1737906792226",
      },
      quantity: 5658.45,
      product: {
        id: "<id>",
        name: "<value>",
        description: "needily academics ack generously aboard promptly",
        status: "archived",
        createdAt: "1713952427392",
        updatedAt: "1737963155205",
        customData: {},
      },
    },
  ],
  payments: {
    id: "<id>",
    status: "REFUNDED",
    paymentMethod: "BANK_TRANSFER",
    provider: "AIRTEL",
    createdAt: "1706733441652",
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
  createdAt: "1714977498670",
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
    createdAt: "1725879671694",
    updatedAt: "1737930526336",
  },
  invoiceId: "<id>",
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `status`                                                                                                                                   | [operations.PostTransactionsTransactionsStatus](../../models/operations/posttransactionstransactionsstatus.md)                             | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `customerId`                                                                                                                               | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `addressId`                                                                                                                                | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `currencyCode`                                                                                                                             | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `subscriptionId`                                                                                                                           | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `discountId`                                                                                                                               | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `collectionMode`                                                                                                                           | [operations.PostTransactionsTransactionsCollectionMode](../../models/operations/posttransactionstransactionscollectionmode.md)             | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `customData`                                                                                                                               | [operations.PostTransactionsTransactionsCustomData](../../models/operations/posttransactionstransactionscustomdata.md)                     | :heavy_minus_sign:                                                                                                                         | Any valid JSON value                                                                                                                       |
| `currentBillingPeriod`                                                                                                                     | [operations.PostTransactionsTransactionsCurrentBillingPeriod](../../models/operations/posttransactionstransactionscurrentbillingperiod.md) | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `details`                                                                                                                                  | [operations.Details](../../models/operations/details.md)                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `items`                                                                                                                                    | [operations.PostTransactionsTransactionsItems](../../models/operations/posttransactionstransactionsitems.md)[]                             | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `payments`                                                                                                                                 | [operations.Payments](../../models/operations/payments.md)                                                                                 | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `createdAt`                                                                                                                                | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `updatedAt`                                                                                                                                | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `customer`                                                                                                                                 | [operations.Customer](../../models/operations/customer.md)                                                                                 | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `address`                                                                                                                                  | [operations.Address](../../models/operations/address.md)                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `discount`                                                                                                                                 | [operations.PostTransactionsDiscount](../../models/operations/posttransactionsdiscount.md)                                                 | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `invoiceId`                                                                                                                                | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |