/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Any valid JSON value
 */
export type PatchCustomersCustomerIdAddressesAddressIdCustomData = {};

export const PatchCustomersCustomerIdAddressesAddressIdStatus = {
  Active: "active",
  Archived: "archived",
} as const;
export type PatchCustomersCustomerIdAddressesAddressIdStatus = ClosedEnum<
  typeof PatchCustomersCustomerIdAddressesAddressIdStatus
>;

export type PatchCustomersCustomerIdAddressesAddressIdRequestBody = {
  description?: string | null | undefined;
  firstLine?: string | null | undefined;
  /**
   * Any valid JSON value
   */
  customData?: PatchCustomersCustomerIdAddressesAddressIdCustomData | undefined;
  city?: string | null | undefined;
  status?: PatchCustomersCustomerIdAddressesAddressIdStatus | null | undefined;
  customerId?: string | null | undefined;
};

export type PatchCustomersCustomerIdAddressesAddressIdRequest = {
  customerId: string;
  addressId: string;
  requestBody?:
    | PatchCustomersCustomerIdAddressesAddressIdRequestBody
    | undefined;
};

/**
 * Any valid JSON value
 */
export type PatchCustomersCustomerIdAddressesAddressIdAddressesCustomData = {};

export const PatchCustomersCustomerIdAddressesAddressIdAddressesStatus = {
  Active: "active",
  Archived: "archived",
} as const;
export type PatchCustomersCustomerIdAddressesAddressIdAddressesStatus =
  ClosedEnum<typeof PatchCustomersCustomerIdAddressesAddressIdAddressesStatus>;

/**
 * Update an Address
 */
export type PatchCustomersCustomerIdAddressesAddressIdResponseBody = {
  id: string;
  description?: string | null | undefined;
  firstLine?: string | null | undefined;
  /**
   * Any valid JSON value
   */
  customData: PatchCustomersCustomerIdAddressesAddressIdAddressesCustomData;
  city?: string | null | undefined;
  status?:
    | PatchCustomersCustomerIdAddressesAddressIdAddressesStatus
    | null
    | undefined;
  createdAt: string;
  updatedAt: string;
  customerId?: string | null | undefined;
};

/** @internal */
export const PatchCustomersCustomerIdAddressesAddressIdCustomData$inboundSchema:
  z.ZodType<
    PatchCustomersCustomerIdAddressesAddressIdCustomData,
    z.ZodTypeDef,
    unknown
  > = z.object({});

/** @internal */
export type PatchCustomersCustomerIdAddressesAddressIdCustomData$Outbound = {};

/** @internal */
export const PatchCustomersCustomerIdAddressesAddressIdCustomData$outboundSchema:
  z.ZodType<
    PatchCustomersCustomerIdAddressesAddressIdCustomData$Outbound,
    z.ZodTypeDef,
    PatchCustomersCustomerIdAddressesAddressIdCustomData
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchCustomersCustomerIdAddressesAddressIdCustomData$ {
  /** @deprecated use `PatchCustomersCustomerIdAddressesAddressIdCustomData$inboundSchema` instead. */
  export const inboundSchema =
    PatchCustomersCustomerIdAddressesAddressIdCustomData$inboundSchema;
  /** @deprecated use `PatchCustomersCustomerIdAddressesAddressIdCustomData$outboundSchema` instead. */
  export const outboundSchema =
    PatchCustomersCustomerIdAddressesAddressIdCustomData$outboundSchema;
  /** @deprecated use `PatchCustomersCustomerIdAddressesAddressIdCustomData$Outbound` instead. */
  export type Outbound =
    PatchCustomersCustomerIdAddressesAddressIdCustomData$Outbound;
}

export function patchCustomersCustomerIdAddressesAddressIdCustomDataToJSON(
  patchCustomersCustomerIdAddressesAddressIdCustomData:
    PatchCustomersCustomerIdAddressesAddressIdCustomData,
): string {
  return JSON.stringify(
    PatchCustomersCustomerIdAddressesAddressIdCustomData$outboundSchema.parse(
      patchCustomersCustomerIdAddressesAddressIdCustomData,
    ),
  );
}

export function patchCustomersCustomerIdAddressesAddressIdCustomDataFromJSON(
  jsonString: string,
): SafeParseResult<
  PatchCustomersCustomerIdAddressesAddressIdCustomData,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PatchCustomersCustomerIdAddressesAddressIdCustomData$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PatchCustomersCustomerIdAddressesAddressIdCustomData' from JSON`,
  );
}

/** @internal */
export const PatchCustomersCustomerIdAddressesAddressIdStatus$inboundSchema:
  z.ZodNativeEnum<typeof PatchCustomersCustomerIdAddressesAddressIdStatus> = z
    .nativeEnum(PatchCustomersCustomerIdAddressesAddressIdStatus);

/** @internal */
export const PatchCustomersCustomerIdAddressesAddressIdStatus$outboundSchema:
  z.ZodNativeEnum<typeof PatchCustomersCustomerIdAddressesAddressIdStatus> =
    PatchCustomersCustomerIdAddressesAddressIdStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchCustomersCustomerIdAddressesAddressIdStatus$ {
  /** @deprecated use `PatchCustomersCustomerIdAddressesAddressIdStatus$inboundSchema` instead. */
  export const inboundSchema =
    PatchCustomersCustomerIdAddressesAddressIdStatus$inboundSchema;
  /** @deprecated use `PatchCustomersCustomerIdAddressesAddressIdStatus$outboundSchema` instead. */
  export const outboundSchema =
    PatchCustomersCustomerIdAddressesAddressIdStatus$outboundSchema;
}

/** @internal */
export const PatchCustomersCustomerIdAddressesAddressIdRequestBody$inboundSchema:
  z.ZodType<
    PatchCustomersCustomerIdAddressesAddressIdRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    description: z.nullable(z.string()).optional(),
    first_line: z.nullable(z.string()).optional(),
    custom_data: z.lazy(() =>
      PatchCustomersCustomerIdAddressesAddressIdCustomData$inboundSchema
    ).optional(),
    city: z.nullable(z.string()).optional(),
    status: z.nullable(
      PatchCustomersCustomerIdAddressesAddressIdStatus$inboundSchema,
    ).optional(),
    customer_id: z.nullable(z.string()).optional(),
  }).transform((v) => {
    return remap$(v, {
      "first_line": "firstLine",
      "custom_data": "customData",
      "customer_id": "customerId",
    });
  });

/** @internal */
export type PatchCustomersCustomerIdAddressesAddressIdRequestBody$Outbound = {
  description?: string | null | undefined;
  first_line?: string | null | undefined;
  custom_data?:
    | PatchCustomersCustomerIdAddressesAddressIdCustomData$Outbound
    | undefined;
  city?: string | null | undefined;
  status?: string | null | undefined;
  customer_id?: string | null | undefined;
};

/** @internal */
export const PatchCustomersCustomerIdAddressesAddressIdRequestBody$outboundSchema:
  z.ZodType<
    PatchCustomersCustomerIdAddressesAddressIdRequestBody$Outbound,
    z.ZodTypeDef,
    PatchCustomersCustomerIdAddressesAddressIdRequestBody
  > = z.object({
    description: z.nullable(z.string()).optional(),
    firstLine: z.nullable(z.string()).optional(),
    customData: z.lazy(() =>
      PatchCustomersCustomerIdAddressesAddressIdCustomData$outboundSchema
    ).optional(),
    city: z.nullable(z.string()).optional(),
    status: z.nullable(
      PatchCustomersCustomerIdAddressesAddressIdStatus$outboundSchema,
    ).optional(),
    customerId: z.nullable(z.string()).optional(),
  }).transform((v) => {
    return remap$(v, {
      firstLine: "first_line",
      customData: "custom_data",
      customerId: "customer_id",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchCustomersCustomerIdAddressesAddressIdRequestBody$ {
  /** @deprecated use `PatchCustomersCustomerIdAddressesAddressIdRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PatchCustomersCustomerIdAddressesAddressIdRequestBody$inboundSchema;
  /** @deprecated use `PatchCustomersCustomerIdAddressesAddressIdRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PatchCustomersCustomerIdAddressesAddressIdRequestBody$outboundSchema;
  /** @deprecated use `PatchCustomersCustomerIdAddressesAddressIdRequestBody$Outbound` instead. */
  export type Outbound =
    PatchCustomersCustomerIdAddressesAddressIdRequestBody$Outbound;
}

export function patchCustomersCustomerIdAddressesAddressIdRequestBodyToJSON(
  patchCustomersCustomerIdAddressesAddressIdRequestBody:
    PatchCustomersCustomerIdAddressesAddressIdRequestBody,
): string {
  return JSON.stringify(
    PatchCustomersCustomerIdAddressesAddressIdRequestBody$outboundSchema.parse(
      patchCustomersCustomerIdAddressesAddressIdRequestBody,
    ),
  );
}

export function patchCustomersCustomerIdAddressesAddressIdRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PatchCustomersCustomerIdAddressesAddressIdRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PatchCustomersCustomerIdAddressesAddressIdRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PatchCustomersCustomerIdAddressesAddressIdRequestBody' from JSON`,
  );
}

/** @internal */
export const PatchCustomersCustomerIdAddressesAddressIdRequest$inboundSchema:
  z.ZodType<
    PatchCustomersCustomerIdAddressesAddressIdRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    customer_id: z.string(),
    address_id: z.string(),
    RequestBody: z.lazy(() =>
      PatchCustomersCustomerIdAddressesAddressIdRequestBody$inboundSchema
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      "customer_id": "customerId",
      "address_id": "addressId",
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type PatchCustomersCustomerIdAddressesAddressIdRequest$Outbound = {
  customer_id: string;
  address_id: string;
  RequestBody?:
    | PatchCustomersCustomerIdAddressesAddressIdRequestBody$Outbound
    | undefined;
};

/** @internal */
export const PatchCustomersCustomerIdAddressesAddressIdRequest$outboundSchema:
  z.ZodType<
    PatchCustomersCustomerIdAddressesAddressIdRequest$Outbound,
    z.ZodTypeDef,
    PatchCustomersCustomerIdAddressesAddressIdRequest
  > = z.object({
    customerId: z.string(),
    addressId: z.string(),
    requestBody: z.lazy(() =>
      PatchCustomersCustomerIdAddressesAddressIdRequestBody$outboundSchema
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      customerId: "customer_id",
      addressId: "address_id",
      requestBody: "RequestBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchCustomersCustomerIdAddressesAddressIdRequest$ {
  /** @deprecated use `PatchCustomersCustomerIdAddressesAddressIdRequest$inboundSchema` instead. */
  export const inboundSchema =
    PatchCustomersCustomerIdAddressesAddressIdRequest$inboundSchema;
  /** @deprecated use `PatchCustomersCustomerIdAddressesAddressIdRequest$outboundSchema` instead. */
  export const outboundSchema =
    PatchCustomersCustomerIdAddressesAddressIdRequest$outboundSchema;
  /** @deprecated use `PatchCustomersCustomerIdAddressesAddressIdRequest$Outbound` instead. */
  export type Outbound =
    PatchCustomersCustomerIdAddressesAddressIdRequest$Outbound;
}

export function patchCustomersCustomerIdAddressesAddressIdRequestToJSON(
  patchCustomersCustomerIdAddressesAddressIdRequest:
    PatchCustomersCustomerIdAddressesAddressIdRequest,
): string {
  return JSON.stringify(
    PatchCustomersCustomerIdAddressesAddressIdRequest$outboundSchema.parse(
      patchCustomersCustomerIdAddressesAddressIdRequest,
    ),
  );
}

export function patchCustomersCustomerIdAddressesAddressIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PatchCustomersCustomerIdAddressesAddressIdRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PatchCustomersCustomerIdAddressesAddressIdRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PatchCustomersCustomerIdAddressesAddressIdRequest' from JSON`,
  );
}

/** @internal */
export const PatchCustomersCustomerIdAddressesAddressIdAddressesCustomData$inboundSchema:
  z.ZodType<
    PatchCustomersCustomerIdAddressesAddressIdAddressesCustomData,
    z.ZodTypeDef,
    unknown
  > = z.object({});

/** @internal */
export type PatchCustomersCustomerIdAddressesAddressIdAddressesCustomData$Outbound =
  {};

/** @internal */
export const PatchCustomersCustomerIdAddressesAddressIdAddressesCustomData$outboundSchema:
  z.ZodType<
    PatchCustomersCustomerIdAddressesAddressIdAddressesCustomData$Outbound,
    z.ZodTypeDef,
    PatchCustomersCustomerIdAddressesAddressIdAddressesCustomData
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchCustomersCustomerIdAddressesAddressIdAddressesCustomData$ {
  /** @deprecated use `PatchCustomersCustomerIdAddressesAddressIdAddressesCustomData$inboundSchema` instead. */
  export const inboundSchema =
    PatchCustomersCustomerIdAddressesAddressIdAddressesCustomData$inboundSchema;
  /** @deprecated use `PatchCustomersCustomerIdAddressesAddressIdAddressesCustomData$outboundSchema` instead. */
  export const outboundSchema =
    PatchCustomersCustomerIdAddressesAddressIdAddressesCustomData$outboundSchema;
  /** @deprecated use `PatchCustomersCustomerIdAddressesAddressIdAddressesCustomData$Outbound` instead. */
  export type Outbound =
    PatchCustomersCustomerIdAddressesAddressIdAddressesCustomData$Outbound;
}

export function patchCustomersCustomerIdAddressesAddressIdAddressesCustomDataToJSON(
  patchCustomersCustomerIdAddressesAddressIdAddressesCustomData:
    PatchCustomersCustomerIdAddressesAddressIdAddressesCustomData,
): string {
  return JSON.stringify(
    PatchCustomersCustomerIdAddressesAddressIdAddressesCustomData$outboundSchema
      .parse(patchCustomersCustomerIdAddressesAddressIdAddressesCustomData),
  );
}

export function patchCustomersCustomerIdAddressesAddressIdAddressesCustomDataFromJSON(
  jsonString: string,
): SafeParseResult<
  PatchCustomersCustomerIdAddressesAddressIdAddressesCustomData,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PatchCustomersCustomerIdAddressesAddressIdAddressesCustomData$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PatchCustomersCustomerIdAddressesAddressIdAddressesCustomData' from JSON`,
  );
}

/** @internal */
export const PatchCustomersCustomerIdAddressesAddressIdAddressesStatus$inboundSchema:
  z.ZodNativeEnum<
    typeof PatchCustomersCustomerIdAddressesAddressIdAddressesStatus
  > = z.nativeEnum(PatchCustomersCustomerIdAddressesAddressIdAddressesStatus);

/** @internal */
export const PatchCustomersCustomerIdAddressesAddressIdAddressesStatus$outboundSchema:
  z.ZodNativeEnum<
    typeof PatchCustomersCustomerIdAddressesAddressIdAddressesStatus
  > = PatchCustomersCustomerIdAddressesAddressIdAddressesStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchCustomersCustomerIdAddressesAddressIdAddressesStatus$ {
  /** @deprecated use `PatchCustomersCustomerIdAddressesAddressIdAddressesStatus$inboundSchema` instead. */
  export const inboundSchema =
    PatchCustomersCustomerIdAddressesAddressIdAddressesStatus$inboundSchema;
  /** @deprecated use `PatchCustomersCustomerIdAddressesAddressIdAddressesStatus$outboundSchema` instead. */
  export const outboundSchema =
    PatchCustomersCustomerIdAddressesAddressIdAddressesStatus$outboundSchema;
}

/** @internal */
export const PatchCustomersCustomerIdAddressesAddressIdResponseBody$inboundSchema:
  z.ZodType<
    PatchCustomersCustomerIdAddressesAddressIdResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    id: z.string(),
    description: z.nullable(z.string()).optional(),
    first_line: z.nullable(z.string()).optional(),
    custom_data: z.lazy(() =>
      PatchCustomersCustomerIdAddressesAddressIdAddressesCustomData$inboundSchema
    ),
    city: z.nullable(z.string()).optional(),
    status: z.nullable(
      PatchCustomersCustomerIdAddressesAddressIdAddressesStatus$inboundSchema,
    ).optional(),
    created_at: z.string(),
    updated_at: z.string(),
    customer_id: z.nullable(z.string()).optional(),
  }).transform((v) => {
    return remap$(v, {
      "first_line": "firstLine",
      "custom_data": "customData",
      "created_at": "createdAt",
      "updated_at": "updatedAt",
      "customer_id": "customerId",
    });
  });

/** @internal */
export type PatchCustomersCustomerIdAddressesAddressIdResponseBody$Outbound = {
  id: string;
  description?: string | null | undefined;
  first_line?: string | null | undefined;
  custom_data:
    PatchCustomersCustomerIdAddressesAddressIdAddressesCustomData$Outbound;
  city?: string | null | undefined;
  status?: string | null | undefined;
  created_at: string;
  updated_at: string;
  customer_id?: string | null | undefined;
};

/** @internal */
export const PatchCustomersCustomerIdAddressesAddressIdResponseBody$outboundSchema:
  z.ZodType<
    PatchCustomersCustomerIdAddressesAddressIdResponseBody$Outbound,
    z.ZodTypeDef,
    PatchCustomersCustomerIdAddressesAddressIdResponseBody
  > = z.object({
    id: z.string(),
    description: z.nullable(z.string()).optional(),
    firstLine: z.nullable(z.string()).optional(),
    customData: z.lazy(() =>
      PatchCustomersCustomerIdAddressesAddressIdAddressesCustomData$outboundSchema
    ),
    city: z.nullable(z.string()).optional(),
    status: z.nullable(
      PatchCustomersCustomerIdAddressesAddressIdAddressesStatus$outboundSchema,
    ).optional(),
    createdAt: z.string(),
    updatedAt: z.string(),
    customerId: z.nullable(z.string()).optional(),
  }).transform((v) => {
    return remap$(v, {
      firstLine: "first_line",
      customData: "custom_data",
      createdAt: "created_at",
      updatedAt: "updated_at",
      customerId: "customer_id",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchCustomersCustomerIdAddressesAddressIdResponseBody$ {
  /** @deprecated use `PatchCustomersCustomerIdAddressesAddressIdResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    PatchCustomersCustomerIdAddressesAddressIdResponseBody$inboundSchema;
  /** @deprecated use `PatchCustomersCustomerIdAddressesAddressIdResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    PatchCustomersCustomerIdAddressesAddressIdResponseBody$outboundSchema;
  /** @deprecated use `PatchCustomersCustomerIdAddressesAddressIdResponseBody$Outbound` instead. */
  export type Outbound =
    PatchCustomersCustomerIdAddressesAddressIdResponseBody$Outbound;
}

export function patchCustomersCustomerIdAddressesAddressIdResponseBodyToJSON(
  patchCustomersCustomerIdAddressesAddressIdResponseBody:
    PatchCustomersCustomerIdAddressesAddressIdResponseBody,
): string {
  return JSON.stringify(
    PatchCustomersCustomerIdAddressesAddressIdResponseBody$outboundSchema.parse(
      patchCustomersCustomerIdAddressesAddressIdResponseBody,
    ),
  );
}

export function patchCustomersCustomerIdAddressesAddressIdResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PatchCustomersCustomerIdAddressesAddressIdResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PatchCustomersCustomerIdAddressesAddressIdResponseBody$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PatchCustomersCustomerIdAddressesAddressIdResponseBody' from JSON`,
  );
}
