import type { Context } from "hono";
import type { APPRouteHandler } from "~/lib/types";
import {
  type ListAddresses,
  CreateAddresses,
  GetAddress,
  UpdateAddress,
} from "../addresses/addresses.routes";
import * as HttpStatusCodes from "~/lib/http-status-code";
import { z } from "zod";
import { AddressResponseSchema } from "./addresses.routes";
import { ErrorSchema } from "~/lib/utils/zod-helpers";

import { db } from "@repo/db";
import {
  addressInsertSchema,
  addressSelectSchema,
  UpdateAddressSchema,
} from "@repo/db/types";
import { eq, and } from "drizzle-orm";

import * as schema from "@repo/db/db/schema.ts";

export const list: APPRouteHandler<ListAddresses> = async (c: Context) => {
  const customer_id = c.req.param("customer_id");
  const addresses = await db
    .select()
    .from(schema.addresses)
    .where(eq(schema.addresses.customer_id, customer_id));
  // .where(eq(schema.addresses.id, customer_id));
  // const addresses = await db.addresses.findMany({
  //   where: {
  //     customer_id: customer_id,
  //   },
  // });
  const validatedAddresses = z.array(AddressResponseSchema).parse(addresses);

  return c.json(validatedAddresses, HttpStatusCodes.OK);
};

export const create: APPRouteHandler<CreateAddresses> = async (c: Context) => {
  const customer_id = c.req.param("customer_id");
  const raw_input = await c.req.json();
  const input = addressInsertSchema.parse(raw_input);

  type AddressInsert = typeof schema.addresses.$inferInsert;
  const insertData: AddressInsert = {
    customer_id: customer_id,
    description: input.description,
    status: "active",
    firstLine: input.firstLine,
    city: input.city,
    updated_at: new Date().toISOString(),
    id: `add_${crypto.randomUUID()}`,
  };

  const address = await db
    .insert(schema.addresses)
    .values(insertData)
    .returning();

  const res = AddressResponseSchema.parse(address);
  return c.json(res, HttpStatusCodes.OK);
};

export const get_address: APPRouteHandler<GetAddress> = async (c: Context) => {
  const address_id = c.req.param("address_id");
  const address = await db
    .select()
    .from(schema.addresses)
    .where(eq(schema.addresses.id, address_id));
  // const address = await db.addresses.findUnique({
  //   where: {
  //     id: address_id,
  //   },
  // });

  if (!address) {
    const errorResponse: z.infer<typeof ErrorSchema> = {
      error: "Address not found",
      message: "Invalid address_id",
    };
    return c.json(errorResponse, HttpStatusCodes.NOT_FOUND);
  }
  const res = AddressResponseSchema.parse(address);
  return c.json(res, HttpStatusCodes.OK);
};

export const update_address: APPRouteHandler<UpdateAddress> = async (
  c: Context
) => {
  const address_id = c.req.param("address_id");
  const customer_id = c.req.param("customer_id");
  const raw_input = await c.req.json();
  const input = UpdateAddressSchema.parse(raw_input);
  const address = await db
    .update(schema.addresses)
    .set({
      ...input,
      custom_data: input.custom_data,
      updated_at: new Date().toISOString(),
    })
    .where(
      and(
        eq(schema.addresses.id, address_id),
        eq(schema.addresses.customer_id, customer_id)
      )
    );
  // const address = await db.addresses.update({
  //   where: {
  //     id: address_id,
  //     customer_id: customer_id,
  //   },
  //   data: {
  //     ...input,
  //     custom_data: input.custom_data as any,
  //     updated_at: new Date(),
  //   },
  // });
  const res = AddressResponseSchema.parse(address);
  return c.json(res, HttpStatusCodes.OK);
};
