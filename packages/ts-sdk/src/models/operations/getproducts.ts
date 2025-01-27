/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const GetProductsStatus = {
  Active: "active",
  Archived: "archived",
} as const;
export type GetProductsStatus = ClosedEnum<typeof GetProductsStatus>;

/**
 * Any valid JSON value
 */
export type GetProductsCustomData = {};

export type ResponseBody = {
  id: string;
  name: string;
  description: string;
  status: GetProductsStatus;
  createdAt: string;
  updatedAt: string;
  /**
   * Any valid JSON value
   */
  customData: GetProductsCustomData;
};

/** @internal */
export const GetProductsStatus$inboundSchema: z.ZodNativeEnum<
  typeof GetProductsStatus
> = z.nativeEnum(GetProductsStatus);

/** @internal */
export const GetProductsStatus$outboundSchema: z.ZodNativeEnum<
  typeof GetProductsStatus
> = GetProductsStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetProductsStatus$ {
  /** @deprecated use `GetProductsStatus$inboundSchema` instead. */
  export const inboundSchema = GetProductsStatus$inboundSchema;
  /** @deprecated use `GetProductsStatus$outboundSchema` instead. */
  export const outboundSchema = GetProductsStatus$outboundSchema;
}

/** @internal */
export const GetProductsCustomData$inboundSchema: z.ZodType<
  GetProductsCustomData,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type GetProductsCustomData$Outbound = {};

/** @internal */
export const GetProductsCustomData$outboundSchema: z.ZodType<
  GetProductsCustomData$Outbound,
  z.ZodTypeDef,
  GetProductsCustomData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetProductsCustomData$ {
  /** @deprecated use `GetProductsCustomData$inboundSchema` instead. */
  export const inboundSchema = GetProductsCustomData$inboundSchema;
  /** @deprecated use `GetProductsCustomData$outboundSchema` instead. */
  export const outboundSchema = GetProductsCustomData$outboundSchema;
  /** @deprecated use `GetProductsCustomData$Outbound` instead. */
  export type Outbound = GetProductsCustomData$Outbound;
}

export function getProductsCustomDataToJSON(
  getProductsCustomData: GetProductsCustomData,
): string {
  return JSON.stringify(
    GetProductsCustomData$outboundSchema.parse(getProductsCustomData),
  );
}

export function getProductsCustomDataFromJSON(
  jsonString: string,
): SafeParseResult<GetProductsCustomData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetProductsCustomData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetProductsCustomData' from JSON`,
  );
}

/** @internal */
export const ResponseBody$inboundSchema: z.ZodType<
  ResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  status: GetProductsStatus$inboundSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
  custom_data: z.lazy(() => GetProductsCustomData$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "custom_data": "customData",
  });
});

/** @internal */
export type ResponseBody$Outbound = {
  id: string;
  name: string;
  description: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  custom_data: GetProductsCustomData$Outbound;
};

/** @internal */
export const ResponseBody$outboundSchema: z.ZodType<
  ResponseBody$Outbound,
  z.ZodTypeDef,
  ResponseBody
> = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  status: GetProductsStatus$outboundSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
  customData: z.lazy(() => GetProductsCustomData$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    customData: "custom_data",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResponseBody$ {
  /** @deprecated use `ResponseBody$inboundSchema` instead. */
  export const inboundSchema = ResponseBody$inboundSchema;
  /** @deprecated use `ResponseBody$outboundSchema` instead. */
  export const outboundSchema = ResponseBody$outboundSchema;
  /** @deprecated use `ResponseBody$Outbound` instead. */
  export type Outbound = ResponseBody$Outbound;
}

export function responseBodyToJSON(responseBody: ResponseBody): string {
  return JSON.stringify(ResponseBody$outboundSchema.parse(responseBody));
}

export function responseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ResponseBody' from JSON`,
  );
}
