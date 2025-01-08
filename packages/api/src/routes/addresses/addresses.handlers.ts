import type { Context } from "hono";
import type { APPRouteHandler } from "~/lib/types";
import { PrismaClient } from "@repo/db/types";
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
import { CreateAddressSchema, UpdateAddressSchema } from "./helpers";

export const list: APPRouteHandler<ListAddresses> = async (c: Context) => {
  const db: PrismaClient = c.get("db");
  const customer_id = c.req.param("customer_id");
  const addresses = await db.addresses.findMany({
    where: {
      customer_id: customer_id,
    },
  });
  const validatedAddresses = z.array(AddressResponseSchema).parse(addresses);

  return c.json(validatedAddresses, HttpStatusCodes.OK);
};

export const create: APPRouteHandler<CreateAddresses> = async (c: Context) => {
  const db: PrismaClient = c.get("db");
  const customer_id = c.req.param("customer_id");
  const raw_input = await c.req.json();
  const input = CreateAddressSchema.parse(raw_input);
  const address = await db.addresses.create({
    data: {
      ...input,
      custom_data: input.custom_data as any,
      id: `add_${crypto.randomUUID()}`,
      customer_id: customer_id,
      updated_at: new Date(),
    },
  });
  const res = AddressResponseSchema.parse(address);
  return c.json(res, HttpStatusCodes.OK);
};

export const get_address: APPRouteHandler<GetAddress> = async (c: Context) => {
  const db: PrismaClient = c.get("db");
  const address_id = c.req.param("address_id");
  const address = await db.addresses.findUnique({
    where: {
      id: address_id,
    },
  });

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
  const db: PrismaClient = c.get("db");
  const address_id = c.req.param("address_id");
  const customer_id = c.req.param("customer_id");
  const raw_input = await c.req.json();
  const input = UpdateAddressSchema.parse(raw_input);
  const address = await db.addresses.update({
    where: {
      id: address_id,
      customer_id: customer_id,
    },
    data: {
      ...input,
      custom_data: input.custom_data as any,
      updated_at: new Date(),
    },
  });
  const res = AddressResponseSchema.parse(address);
  return c.json(res, HttpStatusCodes.OK);
};
