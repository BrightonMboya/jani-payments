# Prices
(*prices*)

## Overview

### Available Operations

* [getPrices](#getprices)
* [postPrices](#postprices)
* [getPricesPriceId](#getpricespriceid)
* [patchPricesPriceId](#patchpricespriceid)

## getPrices

### Example Usage

```typescript
import { JaniPayments } from "jani-payments";

const janiPayments = new JaniPayments({
  security: {
    bearer: process.env["JANIPAYMENTS_BEARER"] ?? "",
    organizationId: process.env["JANIPAYMENTS_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const result = await janiPayments.prices.getPrices();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { JaniPaymentsCore } from "jani-payments/core.js";
import { pricesGetPrices } from "jani-payments/funcs/pricesGetPrices.js";

// Use `JaniPaymentsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const janiPayments = new JaniPaymentsCore({
  security: {
    bearer: process.env["JANIPAYMENTS_BEARER"] ?? "",
    organizationId: process.env["JANIPAYMENTS_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const res = await pricesGetPrices(janiPayments);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetPricesResponseBody[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## postPrices

### Example Usage

```typescript
import { JaniPayments } from "jani-payments";

const janiPayments = new JaniPayments({
  security: {
    bearer: process.env["JANIPAYMENTS_BEARER"] ?? "",
    organizationId: process.env["JANIPAYMENTS_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const result = await janiPayments.prices.postPrices();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { JaniPaymentsCore } from "jani-payments/core.js";
import { pricesPostPrices } from "jani-payments/funcs/pricesPostPrices.js";

// Use `JaniPaymentsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const janiPayments = new JaniPaymentsCore({
  security: {
    bearer: process.env["JANIPAYMENTS_BEARER"] ?? "",
    organizationId: process.env["JANIPAYMENTS_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const res = await pricesPostPrices(janiPayments);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostPricesRequestBody](../../models/operations/postpricesrequestbody.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostPricesResponseBody](../../models/operations/postpricesresponsebody.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.PostPricesResponseBody | 400                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## getPricesPriceId

### Example Usage

```typescript
import { JaniPayments } from "jani-payments";

const janiPayments = new JaniPayments({
  security: {
    bearer: process.env["JANIPAYMENTS_BEARER"] ?? "",
    organizationId: process.env["JANIPAYMENTS_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const result = await janiPayments.prices.getPricesPriceId({
    priceId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { JaniPaymentsCore } from "jani-payments/core.js";
import { pricesGetPricesPriceId } from "jani-payments/funcs/pricesGetPricesPriceId.js";

// Use `JaniPaymentsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const janiPayments = new JaniPaymentsCore({
  security: {
    bearer: process.env["JANIPAYMENTS_BEARER"] ?? "",
    organizationId: process.env["JANIPAYMENTS_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const res = await pricesGetPricesPriceId(janiPayments, {
    priceId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPricesPriceIdRequest](../../models/operations/getpricespriceidrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetPricesPriceIdResponseBody](../../models/operations/getpricespriceidresponsebody.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.GetPricesPriceIdResponseBody | 404                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## patchPricesPriceId

### Example Usage

```typescript
import { JaniPayments } from "jani-payments";

const janiPayments = new JaniPayments({
  security: {
    bearer: process.env["JANIPAYMENTS_BEARER"] ?? "",
    organizationId: process.env["JANIPAYMENTS_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const result = await janiPayments.prices.patchPricesPriceId({
    priceId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { JaniPaymentsCore } from "jani-payments/core.js";
import { pricesPatchPricesPriceId } from "jani-payments/funcs/pricesPatchPricesPriceId.js";

// Use `JaniPaymentsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const janiPayments = new JaniPaymentsCore({
  security: {
    bearer: process.env["JANIPAYMENTS_BEARER"] ?? "",
    organizationId: process.env["JANIPAYMENTS_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const res = await pricesPatchPricesPriceId(janiPayments, {
    priceId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchPricesPriceIdRequest](../../models/operations/patchpricespriceidrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PatchPricesPriceIdResponseBody](../../models/operations/patchpricespriceidresponsebody.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.PatchPricesPriceIdResponseBody | 400                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |