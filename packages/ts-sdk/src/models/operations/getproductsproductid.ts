/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetProductsProductIdRequest = {
  productId: string;
};

export const GetProductsProductIdStatus = {
  Active: "active",
  Archived: "archived",
} as const;
export type GetProductsProductIdStatus = ClosedEnum<
  typeof GetProductsProductIdStatus
>;

/**
 * Any valid JSON value
 */
export type GetProductsProductIdCustomData = {};

/**
 * Returns a Product using its id
 */
export type GetProductsProductIdResponseBody = {
  id: string;
  name: string;
  description: string;
  status: GetProductsProductIdStatus;
  createdAt: string;
  updatedAt: string;
  /**
   * Any valid JSON value
   */
  customData: GetProductsProductIdCustomData;
};

/** @internal */
export const GetProductsProductIdRequest$inboundSchema: z.ZodType<
  GetProductsProductIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  product_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "product_id": "productId",
  });
});

/** @internal */
export type GetProductsProductIdRequest$Outbound = {
  product_id: string;
};

/** @internal */
export const GetProductsProductIdRequest$outboundSchema: z.ZodType<
  GetProductsProductIdRequest$Outbound,
  z.ZodTypeDef,
  GetProductsProductIdRequest
> = z.object({
  productId: z.string(),
}).transform((v) => {
  return remap$(v, {
    productId: "product_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetProductsProductIdRequest$ {
  /** @deprecated use `GetProductsProductIdRequest$inboundSchema` instead. */
  export const inboundSchema = GetProductsProductIdRequest$inboundSchema;
  /** @deprecated use `GetProductsProductIdRequest$outboundSchema` instead. */
  export const outboundSchema = GetProductsProductIdRequest$outboundSchema;
  /** @deprecated use `GetProductsProductIdRequest$Outbound` instead. */
  export type Outbound = GetProductsProductIdRequest$Outbound;
}

export function getProductsProductIdRequestToJSON(
  getProductsProductIdRequest: GetProductsProductIdRequest,
): string {
  return JSON.stringify(
    GetProductsProductIdRequest$outboundSchema.parse(
      getProductsProductIdRequest,
    ),
  );
}

export function getProductsProductIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetProductsProductIdRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetProductsProductIdRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetProductsProductIdRequest' from JSON`,
  );
}

/** @internal */
export const GetProductsProductIdStatus$inboundSchema: z.ZodNativeEnum<
  typeof GetProductsProductIdStatus
> = z.nativeEnum(GetProductsProductIdStatus);

/** @internal */
export const GetProductsProductIdStatus$outboundSchema: z.ZodNativeEnum<
  typeof GetProductsProductIdStatus
> = GetProductsProductIdStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetProductsProductIdStatus$ {
  /** @deprecated use `GetProductsProductIdStatus$inboundSchema` instead. */
  export const inboundSchema = GetProductsProductIdStatus$inboundSchema;
  /** @deprecated use `GetProductsProductIdStatus$outboundSchema` instead. */
  export const outboundSchema = GetProductsProductIdStatus$outboundSchema;
}

/** @internal */
export const GetProductsProductIdCustomData$inboundSchema: z.ZodType<
  GetProductsProductIdCustomData,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type GetProductsProductIdCustomData$Outbound = {};

/** @internal */
export const GetProductsProductIdCustomData$outboundSchema: z.ZodType<
  GetProductsProductIdCustomData$Outbound,
  z.ZodTypeDef,
  GetProductsProductIdCustomData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetProductsProductIdCustomData$ {
  /** @deprecated use `GetProductsProductIdCustomData$inboundSchema` instead. */
  export const inboundSchema = GetProductsProductIdCustomData$inboundSchema;
  /** @deprecated use `GetProductsProductIdCustomData$outboundSchema` instead. */
  export const outboundSchema = GetProductsProductIdCustomData$outboundSchema;
  /** @deprecated use `GetProductsProductIdCustomData$Outbound` instead. */
  export type Outbound = GetProductsProductIdCustomData$Outbound;
}

export function getProductsProductIdCustomDataToJSON(
  getProductsProductIdCustomData: GetProductsProductIdCustomData,
): string {
  return JSON.stringify(
    GetProductsProductIdCustomData$outboundSchema.parse(
      getProductsProductIdCustomData,
    ),
  );
}

export function getProductsProductIdCustomDataFromJSON(
  jsonString: string,
): SafeParseResult<GetProductsProductIdCustomData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetProductsProductIdCustomData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetProductsProductIdCustomData' from JSON`,
  );
}

/** @internal */
export const GetProductsProductIdResponseBody$inboundSchema: z.ZodType<
  GetProductsProductIdResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  status: GetProductsProductIdStatus$inboundSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
  custom_data: z.lazy(() => GetProductsProductIdCustomData$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "custom_data": "customData",
  });
});

/** @internal */
export type GetProductsProductIdResponseBody$Outbound = {
  id: string;
  name: string;
  description: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  custom_data: GetProductsProductIdCustomData$Outbound;
};

/** @internal */
export const GetProductsProductIdResponseBody$outboundSchema: z.ZodType<
  GetProductsProductIdResponseBody$Outbound,
  z.ZodTypeDef,
  GetProductsProductIdResponseBody
> = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  status: GetProductsProductIdStatus$outboundSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
  customData: z.lazy(() => GetProductsProductIdCustomData$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    customData: "custom_data",
  });
});

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

export function getProductsProductIdResponseBodyToJSON(
  getProductsProductIdResponseBody: GetProductsProductIdResponseBody,
): string {
  return JSON.stringify(
    GetProductsProductIdResponseBody$outboundSchema.parse(
      getProductsProductIdResponseBody,
    ),
  );
}

export function getProductsProductIdResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetProductsProductIdResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetProductsProductIdResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetProductsProductIdResponseBody' from JSON`,
  );
}
