import { AddressesModel } from "@repo/db/zod/addresses.ts";
import { jsonSchema } from "~/lib/utils/zod-helpers";

export const CreateAddressSchema = AddressesModel.omit({
  id: true,
  created_at: true,
  updated_at: true,
})
  .extend({
    custom_data: jsonSchema.optional(),
  })
  .strict();

export const UpdateAddressSchema = CreateAddressSchema.partial().strict();
