# TransactionsListMethodDetails


## Supported Types

### `operations.TransactionsListMethodDetails1`

```typescript
const value: operations.TransactionsListMethodDetails1 = {
  paymentMethod: "MOBILE_MONEY",
  details: {
    network: "<value>",
    phoneSuffix: "<value>",
  },
};
```

### `operations.TransactionsListMethodDetails2`

```typescript
const value: operations.TransactionsListMethodDetails2 = {
  paymentMethod: "CARD",
  details: {
    last4: "<value>",
    brand: "<value>",
    expMonth: 3421.04,
    expYear: 8234.72,
    cardholderName: "<value>",
  },
};
```

### `operations.TransactionsListMethodDetails3`

```typescript
const value: operations.TransactionsListMethodDetails3 = {
  paymentMethod: "BANK_TRANSFER",
  details: {
    bankName: "<value>",
    bankReference: "<value>",
  },
};
```

