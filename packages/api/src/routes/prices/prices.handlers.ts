import { APPRouteHandler } from "~/lib/types";
import {
  type ListPrices,
  CreatePrices,
  GetPrice,
  UpdatePrice,
} from "./prices.routes";
import { type Context } from "hono";
import { PrismaClient } from "@repo/db/types";
import * as HttpStatusCodes from "~/lib/http-status-code";
import { z } from "zod";
import {
  CreatePricesSchema,
  transformPrices,
  PricesResponseSchema,
  UpdatePricesSchema,
} from "./helpers";
import { ErrorSchema } from "~/lib/utils/zod-helpers";

export const list: APPRouteHandler<ListPrices> = async (c: Context) => {
  const db: PrismaClient = c.get("db");

  const prices = await db.prices.findMany({
    where: {
      projectId: c.get("organization_Id"),
    },
    // omit: {
    //   projectId: true,
    // },
  });
  const transformedPrices = prices.map((price) =>
    transformPrices({
      ...(price as any),
    })
  );

  return c.json(
    transformedPrices as z.infer<typeof PricesResponseSchema>[],
    HttpStatusCodes.OK
  );
};

export const create: APPRouteHandler<CreatePrices> = async (c: Context) => {
  try {
    const db: PrismaClient = c.get("db");
    
    const raw_input = await c.req.json();
    const input = CreatePricesSchema.parse(raw_input);

    // Create the price
    const price = await db.prices.create({
      data: {
        id: `pri_${crypto.randomUUID()}`,
        type: input.type || "standard",
        description: input.description,
        name: input.name,
        billing_cycle_frequency: input.billing_cycle.frequency,
        billing_cycle_interval: input.billing_cycle.interval,
        trial_period_frequency: input.trial_period.frequency,
        trial_period_interval: input.trial_period.interval,
        amount: input.unit_price.amount,
        currency_code: input.unit_price.currency_code,
        custom_data: input.custom_data as any,
        status: input.status || "active",
        created_at: new Date(),
        updated_at: new Date(),
        product_id: input.product_id,
        projectId: c.get("organization_Id"),
      },
    });

    const formattedPrice = transformPrices({
      ...(price as any),
    }) as z.infer<typeof PricesResponseSchema>;

    return c.json(formattedPrice, HttpStatusCodes.OK);
  } catch (error) {
    return c.json(
      {
        error: "Failed to create price",
        message: "BAD REQUEST",
      } satisfies z.infer<typeof ErrorSchema>,
      HttpStatusCodes.BAD_REQUEST
    );
  }
};

export const get_price: APPRouteHandler<GetPrice> = async (c: Context) => {
  const db: PrismaClient = c.get("db");
  //   @ts-expect-error
  const { price_id } = c.req.valid("param");
  const price = await db.prices.findUnique({
    where: {
      id: price_id,
      projectId: c.get("organization_Id"),
    },
    omit: {
      projectId: true,
    },
  });

  if (!price) {
    return c.json(
      {
        error: "Not Found",
        message: "Price not found with the specified id",
      } satisfies z.infer<typeof ErrorSchema>,
      HttpStatusCodes.NOT_FOUND
    );
  }

  const formattedPrice = transformPrices({
    ...(price as any),
  }) as z.infer<typeof PricesResponseSchema>;

  return c.json(formattedPrice, HttpStatusCodes.OK);
};

export const update_price: APPRouteHandler<UpdatePrice> = async (
  c: Context
) => {
  const db: PrismaClient = c.get("db");
  // @ts-expect-error
  const { price_id } = c.req.valid("param");
  // const raw_input = await c.req.json();
  const input = UpdatePricesSchema.parse(await c.req.json());
  const price = await db.prices.update({
    where: {
      id: price_id,
      projectId: c.get("organization_Id"),
    },
    data: {
      ...input,
      custom_data: input.custom_data as any,
      updated_at: new Date(),
    },
  });

  if (!price) {
    return c.json(
      {
        error: "Bad Request",
        message: "Invalid Price Id",
      } satisfies z.infer<typeof ErrorSchema>,
      HttpStatusCodes.BAD_REQUEST
    );
  }

  const formattedPrice = transformPrices({
    ...(price as any),
  }) as z.infer<typeof PricesResponseSchema>;
  return c.json(formattedPrice, HttpStatusCodes.OK);
};
