import { AddressesModel } from "@repo/db/zod/addresses.ts";
import { jsonSchema } from "~/lib/utils/zod-helpers";
import { z } from "zod";

export const CreateAddressSchema = z.object({
  description: z.string(),
  first_line: z.string(),
  city: z.string(),
  custom_data: z.any().optional(),
});

export const UpdateAddressSchema = CreateAddressSchema.partial().strict();
