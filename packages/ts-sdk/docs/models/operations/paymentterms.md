# PaymentTerms

## Example Usage

```typescript
import { PaymentTerms } from "jani-payments/models/operations";

let value: PaymentTerms = {
  paymentInterval: "day",
  paymentFrequency: 6611.18,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `paymentInterval`                                                        | [operations.PaymentInterval](../../models/operations/paymentinterval.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `paymentFrequency`                                                       | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |