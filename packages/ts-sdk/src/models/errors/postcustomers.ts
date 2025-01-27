/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Failed to create customer
 */
export type PostCustomersResponseBodyData = {
  message: string;
  error: string;
};

/**
 * Failed to create customer
 */
export class PostCustomersResponseBody extends Error {
  error: string;

  /** The original data that was passed to this error instance. */
  data$: PostCustomersResponseBodyData;

  constructor(err: PostCustomersResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "PostCustomersResponseBody";
  }
}

/** @internal */
export const PostCustomersResponseBody$inboundSchema: z.ZodType<
  PostCustomersResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
  error: z.string(),
})
  .transform((v) => {
    return new PostCustomersResponseBody(v);
  });

/** @internal */
export type PostCustomersResponseBody$Outbound = {
  message: string;
  error: string;
};

/** @internal */
export const PostCustomersResponseBody$outboundSchema: z.ZodType<
  PostCustomersResponseBody$Outbound,
  z.ZodTypeDef,
  PostCustomersResponseBody
> = z.instanceof(PostCustomersResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.string(),
    error: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostCustomersResponseBody$ {
  /** @deprecated use `PostCustomersResponseBody$inboundSchema` instead. */
  export const inboundSchema = PostCustomersResponseBody$inboundSchema;
  /** @deprecated use `PostCustomersResponseBody$outboundSchema` instead. */
  export const outboundSchema = PostCustomersResponseBody$outboundSchema;
  /** @deprecated use `PostCustomersResponseBody$Outbound` instead. */
  export type Outbound = PostCustomersResponseBody$Outbound;
}
