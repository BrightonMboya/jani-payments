# GetTransactionTransactionIdResponseBody

Returns a transaction given its id

## Example Usage

```typescript
import { GetTransactionTransactionIdResponseBody } from "jani-payments/models/operations";

let value: GetTransactionTransactionIdResponseBody = {
  status: "cancelled",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "EUR",
  details: {
    total: {
      subtotal: 1297.62,
      discount: 588.08,
      grandTotal: 5757.53,
    },
  },
  items: [
    {
      price: {
        productId: "<id>",
        type: "standard",
        name: "<value>",
        billingCycle: {
          interval: "day",
          frequency: 9277.54,
        },
        trialPeriod: {
          interval: "month",
          frequency: 924.48,
        },
        unitPrice: {
          amount: 8429.21,
          currencyCode: "NAD",
        },
        status: "active",
        id: "<id>",
        createdAt: "1707787677858",
        updatedAt: "1737907481467",
      },
      quantity: 3816.54,
      product: {
        id: "<id>",
        name: "<value>",
        description:
          "than acidly colorless oof oof ugh beneath unruly pupil extroverted",
        status: "archived",
        createdAt: "1716000131361",
        updatedAt: "1737947202380",
        customData: {},
      },
    },
  ],
  payments: {
    id: "<id>",
    status: "PENDING",
    paymentMethod: "MOBILE_MONEY",
    provider: "PAYSTACK",
    createdAt: "1719907905420",
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
  createdAt: "1710597763760",
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
    createdAt: "1707684269144",
    updatedAt: "1737899505623",
  },
  invoiceId: "<id>",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                 | [operations.GetTransactionTransactionIdStatus](../../models/operations/gettransactiontransactionidstatus.md)                             | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `customerId`                                                                                                                             | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `addressId`                                                                                                                              | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `currencyCode`                                                                                                                           | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `subscriptionId`                                                                                                                         | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `discountId`                                                                                                                             | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `collectionMode`                                                                                                                         | [operations.GetTransactionTransactionIdCollectionMode](../../models/operations/gettransactiontransactionidcollectionmode.md)             | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `customData`                                                                                                                             | [operations.GetTransactionTransactionIdCustomData](../../models/operations/gettransactiontransactionidcustomdata.md)                     | :heavy_minus_sign:                                                                                                                       | Any valid JSON value                                                                                                                     |
| `currentBillingPeriod`                                                                                                                   | [operations.GetTransactionTransactionIdCurrentBillingPeriod](../../models/operations/gettransactiontransactionidcurrentbillingperiod.md) | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `details`                                                                                                                                | [operations.GetTransactionTransactionIdDetails](../../models/operations/gettransactiontransactioniddetails.md)                           | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `items`                                                                                                                                  | [operations.GetTransactionTransactionIdItems](../../models/operations/gettransactiontransactioniditems.md)[]                             | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `payments`                                                                                                                               | [operations.GetTransactionTransactionIdPayments](../../models/operations/gettransactiontransactionidpayments.md)                         | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `createdAt`                                                                                                                              | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `updatedAt`                                                                                                                              | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `customer`                                                                                                                               | [operations.GetTransactionTransactionIdCustomer](../../models/operations/gettransactiontransactionidcustomer.md)                         | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `address`                                                                                                                                | [operations.GetTransactionTransactionIdAddress](../../models/operations/gettransactiontransactionidaddress.md)                           | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `discount`                                                                                                                               | [operations.GetTransactionTransactionIdDiscount](../../models/operations/gettransactiontransactioniddiscount.md)                         | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `invoiceId`                                                                                                                              | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |