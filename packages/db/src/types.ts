import * as schema from "./db/schema";
import {
  createSelectSchema,
  createInsertSchema,
  createUpdateSchema,
} from "drizzle-zod";

export const addressSelectSchema = createSelectSchema(schema.addresses);
export const addressInsertSchema = createInsertSchema(schema.addresses);
export const UpdateAddressSchema = createUpdateSchema(schema.addresses)
  .partial()
  .strict();
