import {
  type CreateCustomers,
  CustomersResponseSchema,
  GetCustomer,
  ListCustomers,
  UpdateCustomer,
} from "./customers.routes";
import { type Context } from "hono";
import { APPRouteHandler } from "~/lib/types";
import * as HtttpStatusCodes from "~/lib/http-status-code";
import { z } from "zod";
import { ErrorSchema } from "~/lib/utils/zod-helpers";
import { db } from "@repo/db";
import * as schema from "@repo/db/db/schema.ts";
import { eq, and } from "drizzle-orm";
import { UpdateCustomerSchema } from "./helpers";

const CustomersDefaultSelect = {
  id: schema.Customers.id,
  email: schema.Customers.email,
  name: schema.Customers.name,
  status: schema.Customers.status,
  description: schema.Customers.description,
  custom_data: schema.Customers.custom_data,
  created_at: schema.Customers.createdAt,
  updated_at: schema.Customers.updatedAt,
};

export const list: APPRouteHandler<ListCustomers> = async (c: Context) => {
  const project_id = c.get("organization_Id");
  const customers = await db
    .select(CustomersDefaultSelect)
    .from(schema.Customers)
    .where(eq(schema.Customers.projectId, project_id));
  return c.json(customers, HtttpStatusCodes.OK);
};

export const create: APPRouteHandler<CreateCustomers> = async (c: Context) => {
  const input = await c.req.json();
  type CustomerInsert = typeof schema.Customers.$inferInsert;
  const insertData: CustomerInsert = {
    id: `cus_${crypto.randomUUID()}`,
    email: input.email,
    name: input.name,
    status: input.status,
    description: input.description,
    custom_data: input.custom_data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    projectId: c.get("organization_Id"),
  };

  const customer = await db
    .insert(schema.Customers)
    .values(insertData)
    .returning();
  console.log("finished to insert");

  return c.json(customer, HtttpStatusCodes.OK);
};

export const get_customer: APPRouteHandler<GetCustomer> = async (
  c: Context
) => {
  const customer_id = c.req.param("customer_id");
  const customer = await db
    .select(CustomersDefaultSelect)
    .from(schema.Customers)
    .where(
      and(
        eq(schema.Customers.id, customer_id),
        eq(schema.Customers.projectId, c.get("organization_Id"))
      )
    );
  if (!customer) {
    const errorResponse: z.infer<typeof ErrorSchema> = {
      error: "Customer not found",
      message: "Invalid customer_id",
    };
    return c.json(errorResponse, HtttpStatusCodes.NOT_FOUND);
  }

  return c.json(customer, HtttpStatusCodes.OK);
};

export const update_customer: APPRouteHandler<UpdateCustomer> = async (
  c: Context
) => {
  const customer_id = c.req.param("customer_id");
  const input = UpdateCustomerSchema.parse(await c.req.json());

  const customer = await db
    .update(schema.Customers)
    .set({
      email: input.email,
      name: input.name,
      status: input.status,
      description: input.description,
      custom_data: input.custom_data,
      updatedAt: new Date().toISOString(),
    })
    .where(
      and(
        eq(schema.Customers.id, customer_id),
        eq(schema.Customers.projectId, c.get("organization_Id"))
      )
    )
    .returning();

  if (!customer) {
    const errorResponse: z.infer<typeof ErrorSchema> = {
      error: "Customer not found",
      message: "Invalid customer_id",
    };
    return c.json(errorResponse, HtttpStatusCodes.NOT_FOUND);
  }

  return c.json(customer, HtttpStatusCodes.OK);
};
