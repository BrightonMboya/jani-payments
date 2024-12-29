import type { z } from "@hono/zod-openapi";
export type ZodSchema =
  //@ts-expect-error
  z.ZodUnion | z.AnyZodObject | z.ZodArray<z.AnyZodObject>;

const jsonContent = <T extends ZodSchema>(schema: T, description: string) => {
  return {
    content: {
      "application/json": {
        schema,
      },
    },
    description,
  };
};

export default jsonContent;
