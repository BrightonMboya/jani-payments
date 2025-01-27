# GetTransactionsMethodDetails


## Supported Types

### `operations.GetTransactionsMethodDetails1`

```typescript
const value: operations.GetTransactionsMethodDetails1 = {
  paymentMethod: "MOBILE_MONEY",
  details: {
    network: "<value>",
    phoneSuffix: "<value>",
  },
};
```

### `operations.GetTransactionsMethodDetails2`

```typescript
const value: operations.GetTransactionsMethodDetails2 = {
  paymentMethod: "CARD",
  details: {
    last4: "<value>",
    brand: "<value>",
    expMonth: 2580.59,
    expYear: 5323.2,
    cardholderName: "<value>",
  },
};
```

### `operations.GetTransactionsMethodDetails3`

```typescript
const value: operations.GetTransactionsMethodDetails3 = {
  paymentMethod: "BANK_TRANSFER",
  details: {
    bankName: "<value>",
    bankReference: "<value>",
  },
};
```

