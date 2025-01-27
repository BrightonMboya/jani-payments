/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Product not found
 */
export type GetProductsProductIdResponseBodyData = {
  message: string;
  error: string;
};

/**
 * Product not found
 */
export class GetProductsProductIdResponseBody extends Error {
  error: string;

  /** The original data that was passed to this error instance. */
  data$: GetProductsProductIdResponseBodyData;

  constructor(err: GetProductsProductIdResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "GetProductsProductIdResponseBody";
  }
}

/** @internal */
export const GetProductsProductIdResponseBody$inboundSchema: z.ZodType<
  GetProductsProductIdResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
  error: z.string(),
})
  .transform((v) => {
    return new GetProductsProductIdResponseBody(v);
  });

/** @internal */
export type GetProductsProductIdResponseBody$Outbound = {
  message: string;
  error: string;
};

/** @internal */
export const GetProductsProductIdResponseBody$outboundSchema: z.ZodType<
  GetProductsProductIdResponseBody$Outbound,
  z.ZodTypeDef,
  GetProductsProductIdResponseBody
> = z.instanceof(GetProductsProductIdResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.string(),
    error: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetProductsProductIdResponseBody$ {
  /** @deprecated use `GetProductsProductIdResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetProductsProductIdResponseBody$inboundSchema;
  /** @deprecated use `GetProductsProductIdResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetProductsProductIdResponseBody$outboundSchema;
  /** @deprecated use `GetProductsProductIdResponseBody$Outbound` instead. */
  export type Outbound = GetProductsProductIdResponseBody$Outbound;
}
