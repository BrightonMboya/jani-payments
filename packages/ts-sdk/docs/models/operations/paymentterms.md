# PaymentTerms

## Example Usage

```typescript
import { PaymentTerms } from "jani-payments/models/operations";

let value: PaymentTerms = {
  paymentInterval: "week",
  paymentFrequency: 9795.27,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `paymentInterval`                                                        | [operations.PaymentInterval](../../models/operations/paymentinterval.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `paymentFrequency`                                                       | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |