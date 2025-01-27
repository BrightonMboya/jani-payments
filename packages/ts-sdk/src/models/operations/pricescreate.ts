/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const Type = {
  Standard: "standard",
  Custom: "custom",
} as const;
export type Type = ClosedEnum<typeof Type>;

export const Interval = {
  Day: "day",
  Week: "week",
  Month: "month",
  Year: "year",
} as const;
export type Interval = ClosedEnum<typeof Interval>;

export type BillingCycle = {
  interval: Interval;
  frequency: number;
};

export const PricesCreateInterval = {
  Day: "day",
  Week: "week",
  Month: "month",
  Year: "year",
} as const;
export type PricesCreateInterval = ClosedEnum<typeof PricesCreateInterval>;

export type TrialPeriod = {
  interval: PricesCreateInterval;
  frequency: number;
};

export type UnitPrice = {
  amount: number;
  currencyCode: string;
};

export const PricesCreateStatus = {
  Active: "active",
  Archived: "archived",
} as const;
export type PricesCreateStatus = ClosedEnum<typeof PricesCreateStatus>;

/**
 * Any valid JSON value
 */
export type PricesCreateCustomData = {};

export type PricesCreateRequestBody = {
  productId: string;
  description?: string | null | undefined;
  type: Type;
  name: string;
  billingCycle: BillingCycle;
  trialPeriod: TrialPeriod;
  unitPrice: UnitPrice;
  status: PricesCreateStatus;
  /**
   * Any valid JSON value
   */
  customData?: PricesCreateCustomData | undefined;
};

export const PricesCreateType = {
  Standard: "standard",
  Custom: "custom",
} as const;
export type PricesCreateType = ClosedEnum<typeof PricesCreateType>;

export const PricesCreatePricesInterval = {
  Day: "day",
  Week: "week",
  Month: "month",
  Year: "year",
} as const;
export type PricesCreatePricesInterval = ClosedEnum<
  typeof PricesCreatePricesInterval
>;

export type PricesCreateBillingCycle = {
  interval: PricesCreatePricesInterval;
  frequency: number;
};

export const PricesCreatePricesResponseInterval = {
  Day: "day",
  Week: "week",
  Month: "month",
  Year: "year",
} as const;
export type PricesCreatePricesResponseInterval = ClosedEnum<
  typeof PricesCreatePricesResponseInterval
>;

export type PricesCreateTrialPeriod = {
  interval: PricesCreatePricesResponseInterval;
  frequency: number;
};

export type PricesCreateUnitPrice = {
  amount: number;
  currencyCode: string;
};

export const PricesCreatePricesStatus = {
  Active: "active",
  Archived: "archived",
} as const;
export type PricesCreatePricesStatus = ClosedEnum<
  typeof PricesCreatePricesStatus
>;

/**
 * Any valid JSON value
 */
export type PricesCreatePricesCustomData = {};

/**
 * Creates a new Price
 */
export type PricesCreateResponseBody = {
  productId: string;
  description?: string | null | undefined;
  type: PricesCreateType;
  name: string;
  billingCycle: PricesCreateBillingCycle;
  trialPeriod: PricesCreateTrialPeriod;
  unitPrice: PricesCreateUnitPrice;
  status: PricesCreatePricesStatus;
  /**
   * Any valid JSON value
   */
  customData?: PricesCreatePricesCustomData | undefined;
  id: string;
  createdAt: string;
  updatedAt: string;
};

/** @internal */
export const Type$inboundSchema: z.ZodNativeEnum<typeof Type> = z.nativeEnum(
  Type,
);

/** @internal */
export const Type$outboundSchema: z.ZodNativeEnum<typeof Type> =
  Type$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Type$ {
  /** @deprecated use `Type$inboundSchema` instead. */
  export const inboundSchema = Type$inboundSchema;
  /** @deprecated use `Type$outboundSchema` instead. */
  export const outboundSchema = Type$outboundSchema;
}

/** @internal */
export const Interval$inboundSchema: z.ZodNativeEnum<typeof Interval> = z
  .nativeEnum(Interval);

/** @internal */
export const Interval$outboundSchema: z.ZodNativeEnum<typeof Interval> =
  Interval$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Interval$ {
  /** @deprecated use `Interval$inboundSchema` instead. */
  export const inboundSchema = Interval$inboundSchema;
  /** @deprecated use `Interval$outboundSchema` instead. */
  export const outboundSchema = Interval$outboundSchema;
}

/** @internal */
export const BillingCycle$inboundSchema: z.ZodType<
  BillingCycle,
  z.ZodTypeDef,
  unknown
> = z.object({
  interval: Interval$inboundSchema,
  frequency: z.number(),
});

/** @internal */
export type BillingCycle$Outbound = {
  interval: string;
  frequency: number;
};

/** @internal */
export const BillingCycle$outboundSchema: z.ZodType<
  BillingCycle$Outbound,
  z.ZodTypeDef,
  BillingCycle
> = z.object({
  interval: Interval$outboundSchema,
  frequency: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BillingCycle$ {
  /** @deprecated use `BillingCycle$inboundSchema` instead. */
  export const inboundSchema = BillingCycle$inboundSchema;
  /** @deprecated use `BillingCycle$outboundSchema` instead. */
  export const outboundSchema = BillingCycle$outboundSchema;
  /** @deprecated use `BillingCycle$Outbound` instead. */
  export type Outbound = BillingCycle$Outbound;
}

export function billingCycleToJSON(billingCycle: BillingCycle): string {
  return JSON.stringify(BillingCycle$outboundSchema.parse(billingCycle));
}

export function billingCycleFromJSON(
  jsonString: string,
): SafeParseResult<BillingCycle, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BillingCycle$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BillingCycle' from JSON`,
  );
}

/** @internal */
export const PricesCreateInterval$inboundSchema: z.ZodNativeEnum<
  typeof PricesCreateInterval
> = z.nativeEnum(PricesCreateInterval);

/** @internal */
export const PricesCreateInterval$outboundSchema: z.ZodNativeEnum<
  typeof PricesCreateInterval
> = PricesCreateInterval$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricesCreateInterval$ {
  /** @deprecated use `PricesCreateInterval$inboundSchema` instead. */
  export const inboundSchema = PricesCreateInterval$inboundSchema;
  /** @deprecated use `PricesCreateInterval$outboundSchema` instead. */
  export const outboundSchema = PricesCreateInterval$outboundSchema;
}

/** @internal */
export const TrialPeriod$inboundSchema: z.ZodType<
  TrialPeriod,
  z.ZodTypeDef,
  unknown
> = z.object({
  interval: PricesCreateInterval$inboundSchema,
  frequency: z.number(),
});

/** @internal */
export type TrialPeriod$Outbound = {
  interval: string;
  frequency: number;
};

/** @internal */
export const TrialPeriod$outboundSchema: z.ZodType<
  TrialPeriod$Outbound,
  z.ZodTypeDef,
  TrialPeriod
> = z.object({
  interval: PricesCreateInterval$outboundSchema,
  frequency: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TrialPeriod$ {
  /** @deprecated use `TrialPeriod$inboundSchema` instead. */
  export const inboundSchema = TrialPeriod$inboundSchema;
  /** @deprecated use `TrialPeriod$outboundSchema` instead. */
  export const outboundSchema = TrialPeriod$outboundSchema;
  /** @deprecated use `TrialPeriod$Outbound` instead. */
  export type Outbound = TrialPeriod$Outbound;
}

export function trialPeriodToJSON(trialPeriod: TrialPeriod): string {
  return JSON.stringify(TrialPeriod$outboundSchema.parse(trialPeriod));
}

export function trialPeriodFromJSON(
  jsonString: string,
): SafeParseResult<TrialPeriod, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TrialPeriod$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TrialPeriod' from JSON`,
  );
}

/** @internal */
export const UnitPrice$inboundSchema: z.ZodType<
  UnitPrice,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: z.number(),
  currency_code: z.string(),
}).transform((v) => {
  return remap$(v, {
    "currency_code": "currencyCode",
  });
});

/** @internal */
export type UnitPrice$Outbound = {
  amount: number;
  currency_code: string;
};

/** @internal */
export const UnitPrice$outboundSchema: z.ZodType<
  UnitPrice$Outbound,
  z.ZodTypeDef,
  UnitPrice
> = z.object({
  amount: z.number(),
  currencyCode: z.string(),
}).transform((v) => {
  return remap$(v, {
    currencyCode: "currency_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnitPrice$ {
  /** @deprecated use `UnitPrice$inboundSchema` instead. */
  export const inboundSchema = UnitPrice$inboundSchema;
  /** @deprecated use `UnitPrice$outboundSchema` instead. */
  export const outboundSchema = UnitPrice$outboundSchema;
  /** @deprecated use `UnitPrice$Outbound` instead. */
  export type Outbound = UnitPrice$Outbound;
}

export function unitPriceToJSON(unitPrice: UnitPrice): string {
  return JSON.stringify(UnitPrice$outboundSchema.parse(unitPrice));
}

export function unitPriceFromJSON(
  jsonString: string,
): SafeParseResult<UnitPrice, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UnitPrice$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UnitPrice' from JSON`,
  );
}

/** @internal */
export const PricesCreateStatus$inboundSchema: z.ZodNativeEnum<
  typeof PricesCreateStatus
> = z.nativeEnum(PricesCreateStatus);

/** @internal */
export const PricesCreateStatus$outboundSchema: z.ZodNativeEnum<
  typeof PricesCreateStatus
> = PricesCreateStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricesCreateStatus$ {
  /** @deprecated use `PricesCreateStatus$inboundSchema` instead. */
  export const inboundSchema = PricesCreateStatus$inboundSchema;
  /** @deprecated use `PricesCreateStatus$outboundSchema` instead. */
  export const outboundSchema = PricesCreateStatus$outboundSchema;
}

/** @internal */
export const PricesCreateCustomData$inboundSchema: z.ZodType<
  PricesCreateCustomData,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type PricesCreateCustomData$Outbound = {};

/** @internal */
export const PricesCreateCustomData$outboundSchema: z.ZodType<
  PricesCreateCustomData$Outbound,
  z.ZodTypeDef,
  PricesCreateCustomData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricesCreateCustomData$ {
  /** @deprecated use `PricesCreateCustomData$inboundSchema` instead. */
  export const inboundSchema = PricesCreateCustomData$inboundSchema;
  /** @deprecated use `PricesCreateCustomData$outboundSchema` instead. */
  export const outboundSchema = PricesCreateCustomData$outboundSchema;
  /** @deprecated use `PricesCreateCustomData$Outbound` instead. */
  export type Outbound = PricesCreateCustomData$Outbound;
}

export function pricesCreateCustomDataToJSON(
  pricesCreateCustomData: PricesCreateCustomData,
): string {
  return JSON.stringify(
    PricesCreateCustomData$outboundSchema.parse(pricesCreateCustomData),
  );
}

export function pricesCreateCustomDataFromJSON(
  jsonString: string,
): SafeParseResult<PricesCreateCustomData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PricesCreateCustomData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PricesCreateCustomData' from JSON`,
  );
}

/** @internal */
export const PricesCreateRequestBody$inboundSchema: z.ZodType<
  PricesCreateRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  product_id: z.string(),
  description: z.nullable(z.string()).optional(),
  type: Type$inboundSchema,
  name: z.string(),
  billing_cycle: z.lazy(() => BillingCycle$inboundSchema),
  trial_period: z.lazy(() => TrialPeriod$inboundSchema),
  unit_price: z.lazy(() => UnitPrice$inboundSchema),
  status: PricesCreateStatus$inboundSchema,
  custom_data: z.lazy(() => PricesCreateCustomData$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "product_id": "productId",
    "billing_cycle": "billingCycle",
    "trial_period": "trialPeriod",
    "unit_price": "unitPrice",
    "custom_data": "customData",
  });
});

/** @internal */
export type PricesCreateRequestBody$Outbound = {
  product_id: string;
  description?: string | null | undefined;
  type: string;
  name: string;
  billing_cycle: BillingCycle$Outbound;
  trial_period: TrialPeriod$Outbound;
  unit_price: UnitPrice$Outbound;
  status: string;
  custom_data?: PricesCreateCustomData$Outbound | undefined;
};

/** @internal */
export const PricesCreateRequestBody$outboundSchema: z.ZodType<
  PricesCreateRequestBody$Outbound,
  z.ZodTypeDef,
  PricesCreateRequestBody
> = z.object({
  productId: z.string(),
  description: z.nullable(z.string()).optional(),
  type: Type$outboundSchema,
  name: z.string(),
  billingCycle: z.lazy(() => BillingCycle$outboundSchema),
  trialPeriod: z.lazy(() => TrialPeriod$outboundSchema),
  unitPrice: z.lazy(() => UnitPrice$outboundSchema),
  status: PricesCreateStatus$outboundSchema,
  customData: z.lazy(() => PricesCreateCustomData$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    productId: "product_id",
    billingCycle: "billing_cycle",
    trialPeriod: "trial_period",
    unitPrice: "unit_price",
    customData: "custom_data",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricesCreateRequestBody$ {
  /** @deprecated use `PricesCreateRequestBody$inboundSchema` instead. */
  export const inboundSchema = PricesCreateRequestBody$inboundSchema;
  /** @deprecated use `PricesCreateRequestBody$outboundSchema` instead. */
  export const outboundSchema = PricesCreateRequestBody$outboundSchema;
  /** @deprecated use `PricesCreateRequestBody$Outbound` instead. */
  export type Outbound = PricesCreateRequestBody$Outbound;
}

export function pricesCreateRequestBodyToJSON(
  pricesCreateRequestBody: PricesCreateRequestBody,
): string {
  return JSON.stringify(
    PricesCreateRequestBody$outboundSchema.parse(pricesCreateRequestBody),
  );
}

export function pricesCreateRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<PricesCreateRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PricesCreateRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PricesCreateRequestBody' from JSON`,
  );
}

/** @internal */
export const PricesCreateType$inboundSchema: z.ZodNativeEnum<
  typeof PricesCreateType
> = z.nativeEnum(PricesCreateType);

/** @internal */
export const PricesCreateType$outboundSchema: z.ZodNativeEnum<
  typeof PricesCreateType
> = PricesCreateType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricesCreateType$ {
  /** @deprecated use `PricesCreateType$inboundSchema` instead. */
  export const inboundSchema = PricesCreateType$inboundSchema;
  /** @deprecated use `PricesCreateType$outboundSchema` instead. */
  export const outboundSchema = PricesCreateType$outboundSchema;
}

/** @internal */
export const PricesCreatePricesInterval$inboundSchema: z.ZodNativeEnum<
  typeof PricesCreatePricesInterval
> = z.nativeEnum(PricesCreatePricesInterval);

/** @internal */
export const PricesCreatePricesInterval$outboundSchema: z.ZodNativeEnum<
  typeof PricesCreatePricesInterval
> = PricesCreatePricesInterval$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricesCreatePricesInterval$ {
  /** @deprecated use `PricesCreatePricesInterval$inboundSchema` instead. */
  export const inboundSchema = PricesCreatePricesInterval$inboundSchema;
  /** @deprecated use `PricesCreatePricesInterval$outboundSchema` instead. */
  export const outboundSchema = PricesCreatePricesInterval$outboundSchema;
}

/** @internal */
export const PricesCreateBillingCycle$inboundSchema: z.ZodType<
  PricesCreateBillingCycle,
  z.ZodTypeDef,
  unknown
> = z.object({
  interval: PricesCreatePricesInterval$inboundSchema,
  frequency: z.number(),
});

/** @internal */
export type PricesCreateBillingCycle$Outbound = {
  interval: string;
  frequency: number;
};

/** @internal */
export const PricesCreateBillingCycle$outboundSchema: z.ZodType<
  PricesCreateBillingCycle$Outbound,
  z.ZodTypeDef,
  PricesCreateBillingCycle
> = z.object({
  interval: PricesCreatePricesInterval$outboundSchema,
  frequency: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricesCreateBillingCycle$ {
  /** @deprecated use `PricesCreateBillingCycle$inboundSchema` instead. */
  export const inboundSchema = PricesCreateBillingCycle$inboundSchema;
  /** @deprecated use `PricesCreateBillingCycle$outboundSchema` instead. */
  export const outboundSchema = PricesCreateBillingCycle$outboundSchema;
  /** @deprecated use `PricesCreateBillingCycle$Outbound` instead. */
  export type Outbound = PricesCreateBillingCycle$Outbound;
}

export function pricesCreateBillingCycleToJSON(
  pricesCreateBillingCycle: PricesCreateBillingCycle,
): string {
  return JSON.stringify(
    PricesCreateBillingCycle$outboundSchema.parse(pricesCreateBillingCycle),
  );
}

export function pricesCreateBillingCycleFromJSON(
  jsonString: string,
): SafeParseResult<PricesCreateBillingCycle, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PricesCreateBillingCycle$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PricesCreateBillingCycle' from JSON`,
  );
}

/** @internal */
export const PricesCreatePricesResponseInterval$inboundSchema: z.ZodNativeEnum<
  typeof PricesCreatePricesResponseInterval
> = z.nativeEnum(PricesCreatePricesResponseInterval);

/** @internal */
export const PricesCreatePricesResponseInterval$outboundSchema: z.ZodNativeEnum<
  typeof PricesCreatePricesResponseInterval
> = PricesCreatePricesResponseInterval$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricesCreatePricesResponseInterval$ {
  /** @deprecated use `PricesCreatePricesResponseInterval$inboundSchema` instead. */
  export const inboundSchema = PricesCreatePricesResponseInterval$inboundSchema;
  /** @deprecated use `PricesCreatePricesResponseInterval$outboundSchema` instead. */
  export const outboundSchema =
    PricesCreatePricesResponseInterval$outboundSchema;
}

/** @internal */
export const PricesCreateTrialPeriod$inboundSchema: z.ZodType<
  PricesCreateTrialPeriod,
  z.ZodTypeDef,
  unknown
> = z.object({
  interval: PricesCreatePricesResponseInterval$inboundSchema,
  frequency: z.number(),
});

/** @internal */
export type PricesCreateTrialPeriod$Outbound = {
  interval: string;
  frequency: number;
};

/** @internal */
export const PricesCreateTrialPeriod$outboundSchema: z.ZodType<
  PricesCreateTrialPeriod$Outbound,
  z.ZodTypeDef,
  PricesCreateTrialPeriod
> = z.object({
  interval: PricesCreatePricesResponseInterval$outboundSchema,
  frequency: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricesCreateTrialPeriod$ {
  /** @deprecated use `PricesCreateTrialPeriod$inboundSchema` instead. */
  export const inboundSchema = PricesCreateTrialPeriod$inboundSchema;
  /** @deprecated use `PricesCreateTrialPeriod$outboundSchema` instead. */
  export const outboundSchema = PricesCreateTrialPeriod$outboundSchema;
  /** @deprecated use `PricesCreateTrialPeriod$Outbound` instead. */
  export type Outbound = PricesCreateTrialPeriod$Outbound;
}

export function pricesCreateTrialPeriodToJSON(
  pricesCreateTrialPeriod: PricesCreateTrialPeriod,
): string {
  return JSON.stringify(
    PricesCreateTrialPeriod$outboundSchema.parse(pricesCreateTrialPeriod),
  );
}

export function pricesCreateTrialPeriodFromJSON(
  jsonString: string,
): SafeParseResult<PricesCreateTrialPeriod, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PricesCreateTrialPeriod$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PricesCreateTrialPeriod' from JSON`,
  );
}

/** @internal */
export const PricesCreateUnitPrice$inboundSchema: z.ZodType<
  PricesCreateUnitPrice,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: z.number(),
  currency_code: z.string(),
}).transform((v) => {
  return remap$(v, {
    "currency_code": "currencyCode",
  });
});

/** @internal */
export type PricesCreateUnitPrice$Outbound = {
  amount: number;
  currency_code: string;
};

/** @internal */
export const PricesCreateUnitPrice$outboundSchema: z.ZodType<
  PricesCreateUnitPrice$Outbound,
  z.ZodTypeDef,
  PricesCreateUnitPrice
> = z.object({
  amount: z.number(),
  currencyCode: z.string(),
}).transform((v) => {
  return remap$(v, {
    currencyCode: "currency_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricesCreateUnitPrice$ {
  /** @deprecated use `PricesCreateUnitPrice$inboundSchema` instead. */
  export const inboundSchema = PricesCreateUnitPrice$inboundSchema;
  /** @deprecated use `PricesCreateUnitPrice$outboundSchema` instead. */
  export const outboundSchema = PricesCreateUnitPrice$outboundSchema;
  /** @deprecated use `PricesCreateUnitPrice$Outbound` instead. */
  export type Outbound = PricesCreateUnitPrice$Outbound;
}

export function pricesCreateUnitPriceToJSON(
  pricesCreateUnitPrice: PricesCreateUnitPrice,
): string {
  return JSON.stringify(
    PricesCreateUnitPrice$outboundSchema.parse(pricesCreateUnitPrice),
  );
}

export function pricesCreateUnitPriceFromJSON(
  jsonString: string,
): SafeParseResult<PricesCreateUnitPrice, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PricesCreateUnitPrice$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PricesCreateUnitPrice' from JSON`,
  );
}

/** @internal */
export const PricesCreatePricesStatus$inboundSchema: z.ZodNativeEnum<
  typeof PricesCreatePricesStatus
> = z.nativeEnum(PricesCreatePricesStatus);

/** @internal */
export const PricesCreatePricesStatus$outboundSchema: z.ZodNativeEnum<
  typeof PricesCreatePricesStatus
> = PricesCreatePricesStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricesCreatePricesStatus$ {
  /** @deprecated use `PricesCreatePricesStatus$inboundSchema` instead. */
  export const inboundSchema = PricesCreatePricesStatus$inboundSchema;
  /** @deprecated use `PricesCreatePricesStatus$outboundSchema` instead. */
  export const outboundSchema = PricesCreatePricesStatus$outboundSchema;
}

/** @internal */
export const PricesCreatePricesCustomData$inboundSchema: z.ZodType<
  PricesCreatePricesCustomData,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type PricesCreatePricesCustomData$Outbound = {};

/** @internal */
export const PricesCreatePricesCustomData$outboundSchema: z.ZodType<
  PricesCreatePricesCustomData$Outbound,
  z.ZodTypeDef,
  PricesCreatePricesCustomData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricesCreatePricesCustomData$ {
  /** @deprecated use `PricesCreatePricesCustomData$inboundSchema` instead. */
  export const inboundSchema = PricesCreatePricesCustomData$inboundSchema;
  /** @deprecated use `PricesCreatePricesCustomData$outboundSchema` instead. */
  export const outboundSchema = PricesCreatePricesCustomData$outboundSchema;
  /** @deprecated use `PricesCreatePricesCustomData$Outbound` instead. */
  export type Outbound = PricesCreatePricesCustomData$Outbound;
}

export function pricesCreatePricesCustomDataToJSON(
  pricesCreatePricesCustomData: PricesCreatePricesCustomData,
): string {
  return JSON.stringify(
    PricesCreatePricesCustomData$outboundSchema.parse(
      pricesCreatePricesCustomData,
    ),
  );
}

export function pricesCreatePricesCustomDataFromJSON(
  jsonString: string,
): SafeParseResult<PricesCreatePricesCustomData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PricesCreatePricesCustomData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PricesCreatePricesCustomData' from JSON`,
  );
}

/** @internal */
export const PricesCreateResponseBody$inboundSchema: z.ZodType<
  PricesCreateResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  product_id: z.string(),
  description: z.nullable(z.string()).optional(),
  type: PricesCreateType$inboundSchema,
  name: z.string(),
  billing_cycle: z.lazy(() => PricesCreateBillingCycle$inboundSchema),
  trial_period: z.lazy(() => PricesCreateTrialPeriod$inboundSchema),
  unit_price: z.lazy(() => PricesCreateUnitPrice$inboundSchema),
  status: PricesCreatePricesStatus$inboundSchema,
  custom_data: z.lazy(() => PricesCreatePricesCustomData$inboundSchema)
    .optional(),
  id: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
}).transform((v) => {
  return remap$(v, {
    "product_id": "productId",
    "billing_cycle": "billingCycle",
    "trial_period": "trialPeriod",
    "unit_price": "unitPrice",
    "custom_data": "customData",
    "created_at": "createdAt",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type PricesCreateResponseBody$Outbound = {
  product_id: string;
  description?: string | null | undefined;
  type: string;
  name: string;
  billing_cycle: PricesCreateBillingCycle$Outbound;
  trial_period: PricesCreateTrialPeriod$Outbound;
  unit_price: PricesCreateUnitPrice$Outbound;
  status: string;
  custom_data?: PricesCreatePricesCustomData$Outbound | undefined;
  id: string;
  created_at: string;
  updated_at: string;
};

/** @internal */
export const PricesCreateResponseBody$outboundSchema: z.ZodType<
  PricesCreateResponseBody$Outbound,
  z.ZodTypeDef,
  PricesCreateResponseBody
> = z.object({
  productId: z.string(),
  description: z.nullable(z.string()).optional(),
  type: PricesCreateType$outboundSchema,
  name: z.string(),
  billingCycle: z.lazy(() => PricesCreateBillingCycle$outboundSchema),
  trialPeriod: z.lazy(() => PricesCreateTrialPeriod$outboundSchema),
  unitPrice: z.lazy(() => PricesCreateUnitPrice$outboundSchema),
  status: PricesCreatePricesStatus$outboundSchema,
  customData: z.lazy(() => PricesCreatePricesCustomData$outboundSchema)
    .optional(),
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
}).transform((v) => {
  return remap$(v, {
    productId: "product_id",
    billingCycle: "billing_cycle",
    trialPeriod: "trial_period",
    unitPrice: "unit_price",
    customData: "custom_data",
    createdAt: "created_at",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricesCreateResponseBody$ {
  /** @deprecated use `PricesCreateResponseBody$inboundSchema` instead. */
  export const inboundSchema = PricesCreateResponseBody$inboundSchema;
  /** @deprecated use `PricesCreateResponseBody$outboundSchema` instead. */
  export const outboundSchema = PricesCreateResponseBody$outboundSchema;
  /** @deprecated use `PricesCreateResponseBody$Outbound` instead. */
  export type Outbound = PricesCreateResponseBody$Outbound;
}

export function pricesCreateResponseBodyToJSON(
  pricesCreateResponseBody: PricesCreateResponseBody,
): string {
  return JSON.stringify(
    PricesCreateResponseBody$outboundSchema.parse(pricesCreateResponseBody),
  );
}

export function pricesCreateResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<PricesCreateResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PricesCreateResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PricesCreateResponseBody' from JSON`,
  );
}
