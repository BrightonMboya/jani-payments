# PaymentDetails


## Supported Types

### `operations.One`

```typescript
const value: operations.One = {
  paymentMethod: "MOBILE_MONEY",
  paymentProvider: "STRIPE",
  amount: 3782.68,
  currencyCode: "PEN",
  mobileNetwork: "<value>",
  phoneSuffix: "<value>",
};
```

### `operations.Two`

```typescript
const value: operations.Two = {
  paymentMethod: "CARD",
  paymentProvider: "STRIPE",
  amount: 9003.68,
  currencyCode: "NAD",
  cardLast4: "<value>",
  cardBrand: "<value>",
  cardExpMonth: 30426,
  cardExpYear: 193623,
  cardHolderName: "<value>",
};
```

### `operations.Three`

```typescript
const value: operations.Three = {
  paymentMethod: "BANK_TRANSFER",
  paymentProvider: "AIRTEL",
  amount: 423.64,
  currencyCode: "DKK",
  bankReference: "<value>",
  bankName: "<value>",
};
```

