/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * No Subscription found with that Id
 */
export type SubscriptionResumeSubscriptionSubscriptionResponseBodyData = {
  message: string;
  error: string;
};

/**
 * No Subscription found with that Id
 */
export class SubscriptionResumeSubscriptionSubscriptionResponseBody
  extends Error
{
  error: string;

  /** The original data that was passed to this error instance. */
  data$: SubscriptionResumeSubscriptionSubscriptionResponseBodyData;

  constructor(err: SubscriptionResumeSubscriptionSubscriptionResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "SubscriptionResumeSubscriptionSubscriptionResponseBody";
  }
}

/**
 * Bad Request
 */
export type SubscriptionResumeSubscriptionResponseBodyData = {
  message: string;
  error: string;
};

/**
 * Bad Request
 */
export class SubscriptionResumeSubscriptionResponseBody extends Error {
  error: string;

  /** The original data that was passed to this error instance. */
  data$: SubscriptionResumeSubscriptionResponseBodyData;

  constructor(err: SubscriptionResumeSubscriptionResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "SubscriptionResumeSubscriptionResponseBody";
  }
}

/** @internal */
export const SubscriptionResumeSubscriptionSubscriptionResponseBody$inboundSchema:
  z.ZodType<
    SubscriptionResumeSubscriptionSubscriptionResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
    error: z.string(),
  })
    .transform((v) => {
      return new SubscriptionResumeSubscriptionSubscriptionResponseBody(v);
    });

/** @internal */
export type SubscriptionResumeSubscriptionSubscriptionResponseBody$Outbound = {
  message: string;
  error: string;
};

/** @internal */
export const SubscriptionResumeSubscriptionSubscriptionResponseBody$outboundSchema:
  z.ZodType<
    SubscriptionResumeSubscriptionSubscriptionResponseBody$Outbound,
    z.ZodTypeDef,
    SubscriptionResumeSubscriptionSubscriptionResponseBody
  > = z.instanceof(SubscriptionResumeSubscriptionSubscriptionResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      message: z.string(),
      error: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscriptionResumeSubscriptionSubscriptionResponseBody$ {
  /** @deprecated use `SubscriptionResumeSubscriptionSubscriptionResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    SubscriptionResumeSubscriptionSubscriptionResponseBody$inboundSchema;
  /** @deprecated use `SubscriptionResumeSubscriptionSubscriptionResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    SubscriptionResumeSubscriptionSubscriptionResponseBody$outboundSchema;
  /** @deprecated use `SubscriptionResumeSubscriptionSubscriptionResponseBody$Outbound` instead. */
  export type Outbound =
    SubscriptionResumeSubscriptionSubscriptionResponseBody$Outbound;
}

/** @internal */
export const SubscriptionResumeSubscriptionResponseBody$inboundSchema:
  z.ZodType<SubscriptionResumeSubscriptionResponseBody, z.ZodTypeDef, unknown> =
    z.object({
      message: z.string(),
      error: z.string(),
    })
      .transform((v) => {
        return new SubscriptionResumeSubscriptionResponseBody(v);
      });

/** @internal */
export type SubscriptionResumeSubscriptionResponseBody$Outbound = {
  message: string;
  error: string;
};

/** @internal */
export const SubscriptionResumeSubscriptionResponseBody$outboundSchema:
  z.ZodType<
    SubscriptionResumeSubscriptionResponseBody$Outbound,
    z.ZodTypeDef,
    SubscriptionResumeSubscriptionResponseBody
  > = z.instanceof(SubscriptionResumeSubscriptionResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      message: z.string(),
      error: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscriptionResumeSubscriptionResponseBody$ {
  /** @deprecated use `SubscriptionResumeSubscriptionResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    SubscriptionResumeSubscriptionResponseBody$inboundSchema;
  /** @deprecated use `SubscriptionResumeSubscriptionResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    SubscriptionResumeSubscriptionResponseBody$outboundSchema;
  /** @deprecated use `SubscriptionResumeSubscriptionResponseBody$Outbound` instead. */
  export type Outbound = SubscriptionResumeSubscriptionResponseBody$Outbound;
}
