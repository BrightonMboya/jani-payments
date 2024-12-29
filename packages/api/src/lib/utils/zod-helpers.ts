import { z } from "@hono/zod-openapi";
import { NOT_FOUND } from "../http-status-phrases";
import createMessageObjectSchema from "../create-message-object";
import { ZodSchema } from "../json-content";

const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);
type Literal = z.infer<typeof literalSchema>;
export type Json = Literal | { [key: string]: Json } | Json[];
export const jsonSchema: z.ZodType<Json> = z
  .lazy(() =>
    z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)])
  )
  .openapi({
    type: "object",
    description: "Any valid JSON value",
  });

export declare const IdParamsSchema: z.ZodObject<
  {
    id: z.ZodNumber;
  },
  "strip",
  z.ZodTypeAny,
  {
    id: number;
  },
  {
    id: number;
  }
>;

export const ErrorSchema = z.object({
  message: z.string(),
  error: z.string(),
});

export const createErrorSchema = <T extends ZodSchema>(schema: T) =>
  z.ZodObject<
    {
      success: z.ZodBoolean;
      error: z.ZodObject<
        {
          issues: z.ZodArray<
            z.ZodObject<
              {
                code: z.ZodString;
                path: z.ZodArray<
                  z.ZodUnion<[z.ZodString, z.ZodNumber]>,
                  "many"
                >;
                message: z.ZodOptional<z.ZodString>;
              },
              "strip",
              z.ZodTypeAny,
              {
                code: string;
                path: (string | number)[];
                message?: string | undefined;
              },
              {
                code: string;
                path: (string | number)[];
                message?: string | undefined;
              }
            >,
            "many"
          >;
          name: z.ZodString;
        },
        "strip",
        z.ZodTypeAny,
        {
          issues: {
            code: string;
            path: (string | number)[];
            message?: string | undefined;
          }[];
          name: string;
        },
        {
          issues: {
            code: string;
            path: (string | number)[];
            message?: string | undefined;
          }[];
          name: string;
        }
      >;
    },
    "strip",
    z.ZodTypeAny,
    {
      error: {
        issues: {
          code: string;
          path: (string | number)[];
          message?: string | undefined;
        }[];
        name: string;
      };
      success: boolean;
    },
    {
      error: {
        issues: {
          code: string;
          path: (string | number)[];
          message?: string | undefined;
        }[];
        name: string;
      };
      success: boolean;
    }
  >;

export const notFoundSchema = createMessageObjectSchema(NOT_FOUND);
