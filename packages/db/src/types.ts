import * as schema from "./db/schema";
import {
  createSelectSchema,
  createInsertSchema,
  createUpdateSchema,
} from "drizzle-zod";
import { z } from "zod";

export const addressSelectSchema = createSelectSchema(schema.addresses);
export const addressInsertSchema = createInsertSchema(schema.addresses);
export const UpdateAddressSchema = createUpdateSchema(schema.addresses)
  .partial()
  .strict();

export const customerSelectSchema = createSelectSchema(schema.Customers);
export const customerInsertSchema = createInsertSchema(schema.Customers);
export const customerUpdateSchema = createUpdateSchema(schema.Customers);

export const productsSelectSchema = createSelectSchema(schema.Products);
export const productsInsertSchema = createInsertSchema(schema.Products);
export const productsUpdateSchema = createUpdateSchema(schema.Products);

export const Entity_Status = z.enum(["archived", "active"]);
