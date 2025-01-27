# jani-payments

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *jani-payments* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=jani-payments&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/jani-payments/billing). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary


<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [jani-payments](#jani-payments)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

> [!TIP]
> To finish publishing your SDK to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).


The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET> zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

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

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name             | Type   | Scheme      | Environment Variable           |
| ---------------- | ------ | ----------- | ------------------------------ |
| `bearer`         | http   | HTTP Bearer | `JANIPAYMENTS_BEARER`          |
| `organizationId` | apiKey | API key     | `JANIPAYMENTS_ORGANIZATION_ID` |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
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
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [addresses](docs/sdks/addresses/README.md)

* [list](docs/sdks/addresses/README.md#list)
* [create](docs/sdks/addresses/README.md#create)
* [get](docs/sdks/addresses/README.md#get)
* [update](docs/sdks/addresses/README.md#update)

### [customers](docs/sdks/customers/README.md)

* [list](docs/sdks/customers/README.md#list)
* [create](docs/sdks/customers/README.md#create)
* [get](docs/sdks/customers/README.md#get)
* [update](docs/sdks/customers/README.md#update)

### [developerTools](docs/sdks/developertools/README.md)

* [postApiKeys](docs/sdks/developertools/README.md#postapikeys)

### [discounts](docs/sdks/discounts/README.md)

* [list](docs/sdks/discounts/README.md#list)
* [create](docs/sdks/discounts/README.md#create)
* [get](docs/sdks/discounts/README.md#get)
* [update](docs/sdks/discounts/README.md#update)


### [prices](docs/sdks/prices/README.md)

* [list](docs/sdks/prices/README.md#list)
* [create](docs/sdks/prices/README.md#create)
* [get](docs/sdks/prices/README.md#get)
* [update](docs/sdks/prices/README.md#update)

### [products](docs/sdks/products/README.md)

* [list](docs/sdks/products/README.md#list)
* [create](docs/sdks/products/README.md#create)
* [get](docs/sdks/products/README.md#get)
* [update](docs/sdks/products/README.md#update)

### [subscription](docs/sdks/subscription/README.md)

* [list](docs/sdks/subscription/README.md#list)
* [create](docs/sdks/subscription/README.md#create)
* [cancelSubscription](docs/sdks/subscription/README.md#cancelsubscription)
* [pauseSubscription](docs/sdks/subscription/README.md#pausesubscription)
* [resumeSubscription](docs/sdks/subscription/README.md#resumesubscription)
* [activateSubscription](docs/sdks/subscription/README.md#activatesubscription)
* [updateSubscription](docs/sdks/subscription/README.md#updatesubscription)

### [transactions](docs/sdks/transactions/README.md)

* [getTransactions](docs/sdks/transactions/README.md#gettransactions)
* [postTransactions](docs/sdks/transactions/README.md#posttransactions)
* [getTransactionTransactionId](docs/sdks/transactions/README.md#gettransactiontransactionid)
* [patchTransactionTransactionId](docs/sdks/transactions/README.md#patchtransactiontransactionid)

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`addressesCreate`](docs/sdks/addresses/README.md#create)
- [`addressesGet`](docs/sdks/addresses/README.md#get)
- [`addressesList`](docs/sdks/addresses/README.md#list)
- [`addressesUpdate`](docs/sdks/addresses/README.md#update)
- [`customersCreate`](docs/sdks/customers/README.md#create)
- [`customersGet`](docs/sdks/customers/README.md#get)
- [`customersList`](docs/sdks/customers/README.md#list)
- [`customersUpdate`](docs/sdks/customers/README.md#update)
- [`developerToolsPostApiKeys`](docs/sdks/developertools/README.md#postapikeys)
- [`discountsCreate`](docs/sdks/discounts/README.md#create)
- [`discountsGet`](docs/sdks/discounts/README.md#get)
- [`discountsList`](docs/sdks/discounts/README.md#list)
- [`discountsUpdate`](docs/sdks/discounts/README.md#update)
- [`pricesCreate`](docs/sdks/prices/README.md#create)
- [`pricesGet`](docs/sdks/prices/README.md#get)
- [`pricesList`](docs/sdks/prices/README.md#list)
- [`pricesUpdate`](docs/sdks/prices/README.md#update)
- [`productsCreate`](docs/sdks/products/README.md#create)
- [`productsGet`](docs/sdks/products/README.md#get)
- [`productsList`](docs/sdks/products/README.md#list)
- [`productsUpdate`](docs/sdks/products/README.md#update)
- [`subscriptionActivateSubscription`](docs/sdks/subscription/README.md#activatesubscription)
- [`subscriptionCancelSubscription`](docs/sdks/subscription/README.md#cancelsubscription)
- [`subscriptionCreate`](docs/sdks/subscription/README.md#create)
- [`subscriptionList`](docs/sdks/subscription/README.md#list)
- [`subscriptionPauseSubscription`](docs/sdks/subscription/README.md#pausesubscription)
- [`subscriptionResumeSubscription`](docs/sdks/subscription/README.md#resumesubscription)
- [`subscriptionUpdateSubscription`](docs/sdks/subscription/README.md#updatesubscription)
- [`transactionsGetTransactions`](docs/sdks/transactions/README.md#gettransactions)
- [`transactionsGetTransactionTransactionId`](docs/sdks/transactions/README.md#gettransactiontransactionid)
- [`transactionsPatchTransactionTransactionId`](docs/sdks/transactions/README.md#patchtransactiontransactionid)
- [`transactionsPostTransactions`](docs/sdks/transactions/README.md#posttransactions)

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { JaniPayments } from "jani-payments";

const janiPayments = new JaniPayments({
  security: {
    bearer: process.env["JANIPAYMENTS_BEARER"] ?? "",
    organizationId: process.env["JANIPAYMENTS_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const result = await janiPayments.products.list({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { JaniPayments } from "jani-payments";

const janiPayments = new JaniPayments({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
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
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `get` method may throw the following errors:

| Error Type                            | Status Code | Content Type     |
| ------------------------------------- | ----------- | ---------------- |
| errors.ProductsGetProductResponseBody | 404         | application/json |
| errors.APIError                       | 4XX, 5XX    | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `APIError`.

```typescript
import { JaniPayments } from "jani-payments";
import {
  ProductsGetProductResponseBody,
  SDKValidationError,
} from "jani-payments/models/errors";

const janiPayments = new JaniPayments({
  security: {
    bearer: process.env["JANIPAYMENTS_BEARER"] ?? "",
    organizationId: process.env["JANIPAYMENTS_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  let result;
  try {
    result = await janiPayments.products.get({
      productId: "<id>",
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof ProductsGetProductResponseBody): {
        // Handle err.data$: ProductsGetProductResponseBodyData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { JaniPayments } from "jani-payments";

const janiPayments = new JaniPayments({
  serverURL:
    "https://p5kv4b3h7rzao6bxlzmisxykfe0dragb.lambda-url.us-east-1.on.aws",
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
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { JaniPayments } from "jani-payments";
import { HTTPClient } from "jani-payments/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new JaniPayments({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { JaniPayments } from "jani-payments";

const sdk = new JaniPayments({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `JANIPAYMENTS_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=jani-payments&utm_campaign=typescript)
