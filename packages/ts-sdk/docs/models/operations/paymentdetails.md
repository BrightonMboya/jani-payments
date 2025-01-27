# PaymentDetails


## Supported Types

### `operations.One`

```typescript
const value: operations.One = {
  paymentMethod: "MOBILE_MONEY",
  paymentProvider: "PAYSTACK",
  amount: 1274.99,
  currencyCode: "TND",
  mobileNetwork: "<value>",
  phoneSuffix: "<value>",
};
```

### `operations.Two`

```typescript
const value: operations.Two = {
  paymentMethod: "CARD",
  paymentProvider: "MPESA",
  amount: 3502.71,
  currencyCode: "VND",
  cardLast4: "<value>",
  cardBrand: "<value>",
  cardExpMonth: 960767,
  cardExpYear: 640565,
  cardHolderName: "<value>",
};
```

### `operations.Three`

```typescript
const value: operations.Three = {
  paymentMethod: "BANK_TRANSFER",
  paymentProvider: "TIGO",
  amount: 424.54,
  currencyCode: "LYD",
  bankReference: "<value>",
  bankName: "<value>",
};
```

