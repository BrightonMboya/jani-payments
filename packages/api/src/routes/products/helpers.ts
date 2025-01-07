import { ProductsModel } from "@repo/db/zod/index.ts";
import { jsonSchema } from "~/lib/utils/zod-helpers";

export const ProductsResponseSchema = ProductsModel.extend({
  custom_data: jsonSchema,
}).omit({
  project_id: true,
});

export const CreateProductsSchema = ProductsModel.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  project_id: true,
}).extend({
  custom_data: jsonSchema.nullish(),
});

export const UpdateProductsSchema = CreateProductsSchema.partial().strict()
