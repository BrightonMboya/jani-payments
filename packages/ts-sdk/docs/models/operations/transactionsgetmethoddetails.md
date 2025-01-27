# TransactionsGetMethodDetails


## Supported Types

### `operations.TransactionsGetMethodDetails1`

```typescript
const value: operations.TransactionsGetMethodDetails1 = {
  paymentMethod: "MOBILE_MONEY",
  details: {
    network: "<value>",
    phoneSuffix: "<value>",
  },
};
```

### `operations.TransactionsGetMethodDetails2`

```typescript
const value: operations.TransactionsGetMethodDetails2 = {
  paymentMethod: "CARD",
  details: {
    last4: "<value>",
    brand: "<value>",
    expMonth: 8429.21,
    expYear: 9832.03,
    cardholderName: "<value>",
  },
};
```

### `operations.TransactionsGetMethodDetails3`

```typescript
const value: operations.TransactionsGetMethodDetails3 = {
  paymentMethod: "BANK_TRANSFER",
  details: {
    bankName: "<value>",
    bankReference: "<value>",
  },
};
```

