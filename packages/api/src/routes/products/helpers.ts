import { productsInsertSchema } from "@repo/db/types";
import { jsonSchema } from "~/lib/utils/zod-helpers";

export const ProductsResponseSchema = productsInsertSchema
  .extend({
    custom_data: jsonSchema,
  })
  .omit({
    customData: true,
    projectId: true,
  });

export const CreateProductsSchema = productsInsertSchema
  .omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    projectId: true,
  })
  .extend({
    custom_data: jsonSchema.nullish(),
  });

export const UpdateProductsSchema = CreateProductsSchema.partial().strict();
