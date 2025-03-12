import { productsInsertSchema } from "@repo/db/types";
import { jsonSchema } from "~/lib/utils/zod-helpers";
import { CreatePricesSchema } from "../prices/helpers";

export const ProductsResponseSchema = productsInsertSchema
  .extend({
    custom_data: jsonSchema,
  })
  .omit({
    custom_data: true,
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

// this schema is used in the dashboard to allow to create products with prices on the fly
export const CreateProductsWithPricesSchema = CreateProductsSchema.merge(
  CreatePricesSchema.omit({
    product_id: true,
  })
);
