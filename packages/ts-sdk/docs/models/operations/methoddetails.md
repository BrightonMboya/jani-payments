# MethodDetails


## Supported Types

### `operations.MethodDetails1`

```typescript
const value: operations.MethodDetails1 = {
  paymentMethod: "MOBILE_MONEY",
  details: {
    network: "<value>",
    phoneSuffix: "<value>",
  },
};
```

### `operations.MethodDetails2`

```typescript
const value: operations.MethodDetails2 = {
  paymentMethod: "CARD",
  details: {
    last4: "<value>",
    brand: "<value>",
    expMonth: 1095.69,
    expYear: 5658.45,
    cardholderName: "<value>",
  },
};
```

### `operations.MethodDetails3`

```typescript
const value: operations.MethodDetails3 = {
  paymentMethod: "BANK_TRANSFER",
  details: {
    bankName: "<value>",
    bankReference: "<value>",
  },
};
```

