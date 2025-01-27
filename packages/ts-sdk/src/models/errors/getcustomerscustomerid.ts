/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Customer not found
 */
export type GetCustomersCustomerIdResponseBodyData = {
  message: string;
  error: string;
};

/**
 * Customer not found
 */
export class GetCustomersCustomerIdResponseBody extends Error {
  error: string;

  /** The original data that was passed to this error instance. */
  data$: GetCustomersCustomerIdResponseBodyData;

  constructor(err: GetCustomersCustomerIdResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "GetCustomersCustomerIdResponseBody";
  }
}

/** @internal */
export const GetCustomersCustomerIdResponseBody$inboundSchema: z.ZodType<
  GetCustomersCustomerIdResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
  error: z.string(),
})
  .transform((v) => {
    return new GetCustomersCustomerIdResponseBody(v);
  });

/** @internal */
export type GetCustomersCustomerIdResponseBody$Outbound = {
  message: string;
  error: string;
};

/** @internal */
export const GetCustomersCustomerIdResponseBody$outboundSchema: z.ZodType<
  GetCustomersCustomerIdResponseBody$Outbound,
  z.ZodTypeDef,
  GetCustomersCustomerIdResponseBody
> = z.instanceof(GetCustomersCustomerIdResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.string(),
    error: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCustomersCustomerIdResponseBody$ {
  /** @deprecated use `GetCustomersCustomerIdResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetCustomersCustomerIdResponseBody$inboundSchema;
  /** @deprecated use `GetCustomersCustomerIdResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    GetCustomersCustomerIdResponseBody$outboundSchema;
  /** @deprecated use `GetCustomersCustomerIdResponseBody$Outbound` instead. */
  export type Outbound = GetCustomersCustomerIdResponseBody$Outbound;
}
