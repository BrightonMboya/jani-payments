# GetTransactionTransactionIdMethodDetails


## Supported Types

### `operations.GetTransactionTransactionIdMethodDetails1`

```typescript
const value: operations.GetTransactionTransactionIdMethodDetails1 = {
  paymentMethod: "MOBILE_MONEY",
  details: {
    network: "<value>",
    phoneSuffix: "<value>",
  },
};
```

### `operations.GetTransactionTransactionIdMethodDetails2`

```typescript
const value: operations.GetTransactionTransactionIdMethodDetails2 = {
  paymentMethod: "CARD",
  details: {
    last4: "<value>",
    brand: "<value>",
    expMonth: 8256.81,
    expYear: 7468.34,
    cardholderName: "<value>",
  },
};
```

### `operations.GetTransactionTransactionIdMethodDetails3`

```typescript
const value: operations.GetTransactionTransactionIdMethodDetails3 = {
  paymentMethod: "BANK_TRANSFER",
  details: {
    bankName: "<value>",
    bankReference: "<value>",
  },
};
```

