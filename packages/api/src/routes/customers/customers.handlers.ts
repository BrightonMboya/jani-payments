import {
  type CreateCustomers,
  CustomersResponseSchema,
  GetCustomer,
  ListCustomers,
  UpdateCustomer,
} from "./customers.routes";
import { type Context } from "hono";
import { PrismaClient } from "@repo/db/types";
import { APPRouteHandler } from "~/lib/types";
import * as HtttpStatusCodes from "~/lib/http-status-code";
import { z } from "zod";
import { ErrorSchema } from "~/lib/utils/zod-helpers";

const CustomersDefaultSelect = {
  id: true,
  email: true,
  name: true,
  status: true,
  description: true,
  custom_data: true,
  created_at: true,
  updated_at: true,
};

export const list: APPRouteHandler<ListCustomers> = async (c: Context) => {
  const db: PrismaClient = c.get("db");

  const customers = await db.customers.findMany({
    where: {
      projectId: c.get("organization_Id"),
    },
    select: CustomersDefaultSelect,
  });
  const validatedCustomers = z.array(CustomersResponseSchema).parse(customers);

  return c.json(validatedCustomers, HtttpStatusCodes.OK);
};

export const create: APPRouteHandler<CreateCustomers> = async (c: Context) => {
  const db: PrismaClient = c.get("db");

  const input = await c.req.json();
  const customer = await db.customers.create({
    data: {
      id: `cus_${crypto.randomUUID()}`,
      email: input.email,
      name: input.name,
      status: input.status,
      description: input.description,
      custom_data: input.custom_data,
      created_at: new Date(),
      updated_at: new Date(),
      projectId: c.get("organization_Id"),
    },
    select: CustomersDefaultSelect,
  });
  const validatedCustomer = CustomersResponseSchema.parse(customer);

  return c.json(validatedCustomer, HtttpStatusCodes.OK);
};

export const get_customer: APPRouteHandler<GetCustomer> = async (
  c: Context
) => {
  const db: PrismaClient = await c.get("db");
  const customer_id = c.req.param("customer_id");
  const customer = await db.customers.findUnique({
    where: {
      id: customer_id,
      projectId: c.get("organization_Id"),
    },
    select: CustomersDefaultSelect,
  });

  if (!customer) {
    const errorResponse: z.infer<typeof ErrorSchema> = {
      error: "Customer not found",
      message: "Invalid customer_id",
    };
    return c.json(errorResponse, HtttpStatusCodes.NOT_FOUND);
  }

  return c.json(CustomersResponseSchema.parse(customer), HtttpStatusCodes.OK);
};

export const update_customer: APPRouteHandler<UpdateCustomer> = async (
  c: Context
) => {
  const db: PrismaClient = await c.get("db");
  const customer_id = c.req.param("customer_id");
  const input = await c.req.json();

  const customer = await db.customers.update({
    where: {
      id: customer_id,
      projectId: c.get("organization_Id"),
    },
    data: {
      ...input,
      updated_at: new Date(),
    },
    select: CustomersDefaultSelect,
  });

  if (!customer) {
    const errorResponse: z.infer<typeof ErrorSchema> = {
      error: "Customer not found",
      message: "Invalid customer_id",
    };
    return c.json(errorResponse, HtttpStatusCodes.NOT_FOUND);
  }

  return c.json(CustomersResponseSchema.parse(customer), HtttpStatusCodes.OK);
};
