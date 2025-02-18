import { customerInsertSchema } from "@repo/db/types";
import { z } from "zod";
import { Entity_Status } from "@repo/db/types";
import { jsonSchema } from "~/lib/utils/zod-helpers";

export const CustomersResponseSchema = customerInsertSchema.extend({
  id: z.string().openapi({
    example: "cus_2e229e50-1b92-4479-b3e3-829a3da6fc00",
  }),
  email: z.string().openapi({
    example: "brighton@gmail.com",
  }),
  name: z.string().openapi({
    example: "Brighton Mboya",
  }),
  status: Entity_Status.nullish().openapi({
    example: "active",
  }),
  description: z.string().nullish().openapi({
    example: "First Customer to test out our MVP",
  }),
  custom_data: jsonSchema.openapi({
    example: {},
  }),
  created_at: z.date().openapi({
    example: "2024-12-30T11:04:30.475Z",
  }),
  updated_at: z.date().openapi({
    example: "2024-12-30T11:05:42.118Z",
  }),
}).omit({
  projectId: true,
});

export const CreateCustomerSchema = customerInsertSchema.omit({
  id: true,
  projectId: true,
  created_at: true,
  updated_at: true,
}).extend({
  custom_data: jsonSchema.nullish(),
});

export const UpdateCustomerSchema = CreateCustomerSchema.partial().strict();
