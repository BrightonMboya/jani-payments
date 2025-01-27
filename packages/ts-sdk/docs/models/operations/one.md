# One

## Example Usage

```typescript
import { One } from "jani-payments/models/operations";

let value: One = {
  paymentMethod: "MOBILE_MONEY",
  paymentProvider: "DPO",
  amount: 9983.55,
  currencyCode: "TOP",
  mobileNetwork: "<value>",
  phoneSuffix: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `paymentMethod`                                                          | [operations.PaymentMethod](../../models/operations/paymentmethod.md)     | :heavy_check_mark:                                                       | N/A                                                                      |
| `paymentProvider`                                                        | [operations.PaymentProvider](../../models/operations/paymentprovider.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `amount`                                                                 | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `currencyCode`                                                           | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `mobileNetwork`                                                          | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `phoneSuffix`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |