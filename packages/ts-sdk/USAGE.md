<!-- Start SDK Example Usage [usage] -->
```typescript
import { JaniPayments } from "jani-payments";

const janiPayments = new JaniPayments({
  security: {
    bearer: process.env["JANIPAYMENTS_BEARER"] ?? "",
    organizationId: process.env["JANIPAYMENTS_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const result = await janiPayments.products.list();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->