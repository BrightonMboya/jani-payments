# PatchTransactionTransactionIdMethodDetails


## Supported Types

### `operations.PatchTransactionTransactionIdMethodDetails1`

```typescript
const value: operations.PatchTransactionTransactionIdMethodDetails1 = {
  paymentMethod: "MOBILE_MONEY",
  details: {
    network: "<value>",
    phoneSuffix: "<value>",
  },
};
```

### `operations.PatchTransactionTransactionIdMethodDetails2`

```typescript
const value: operations.PatchTransactionTransactionIdMethodDetails2 = {
  paymentMethod: "CARD",
  details: {
    last4: "<value>",
    brand: "<value>",
    expMonth: 3560.07,
    expYear: 9874.35,
    cardholderName: "<value>",
  },
};
```

### `operations.PatchTransactionTransactionIdMethodDetails3`

```typescript
const value: operations.PatchTransactionTransactionIdMethodDetails3 = {
  paymentMethod: "BANK_TRANSFER",
  details: {
    bankName: "<value>",
    bankReference: "<value>",
  },
};
```

