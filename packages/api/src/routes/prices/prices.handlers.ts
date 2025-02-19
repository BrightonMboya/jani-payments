import { APPRouteHandler } from "~/lib/types";
import {
  type ListPrices,
  CreatePrices,
  GetPrice,
  UpdatePrice,
} from "./prices.routes";
import { type Context } from "hono";
import { db } from "@repo/db";
import * as HttpStatusCodes from "~/lib/http-status-code";
import { z } from "zod";
import {
  CreatePricesSchema,
  transformPrices,
  PricesResponseSchema,
  UpdatePricesSchema,
} from "./helpers";
import { ErrorSchema } from "~/lib/utils/zod-helpers";
import * as schema from "@repo/db/db/schema.ts";
import { eq, and } from "drizzle-orm";

export const list: APPRouteHandler<ListPrices> = async (c: Context) => {
  const prices = await db
    .select()
    .from(schema.Prices)
    .where(eq(schema.Prices.projectId, c.get("organization_Id")));

  const transformedPrices = PricesResponseSchema.parse(
    prices.map((price) =>
      transformPrices({
        ...price,
        customData: price.customData!,
      })
    )
  );

  return c.json(transformedPrices, HttpStatusCodes.OK);
};

export const create: APPRouteHandler<CreatePrices> = async (c: Context) => {
  try {
    const raw_input = await c.req.json();
    const input = CreatePricesSchema.parse(raw_input);
    type PricesInsert = typeof schema.Prices.$inferInsert;
    const insertData: PricesInsert = {
      id: `pri_${crypto.randomUUID()}`,
      type: input.type || "standard",
      description: input.description,
      name: input.name,
      billingCycleFrequency: input.billing_cycle.frequency,
      billingCycleInterval: input.billing_cycle.interval,
      trialPeriodFrequency: input.trial_period.frequency,
      trialPeriodInterval: input.trial_period.interval,
      amount: input.unit_price.amount.toString(),
      currencyCode: input.unit_price.currency_code,
      customData: input.custom_data as any,
      status: input.status || "active",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      product_id: input.product_id,
      projectId: c.get("organization_Id"),
    };

    // Create the price
    const price = await db.insert(schema.Prices).values(insertData).returning();
    const formattedPrice = price.map((p) =>
      transformPrices({
        ...p,
        customData: p.customData as any,
      })
    )

    return c.json(
      PricesResponseSchema.parse(formattedPrice),
      HttpStatusCodes.OK
    );
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
  //   @ts-expect-error
  const { price_id } = c.req.valid("param");

  const price = await db
    .select()
    .from(schema.Prices)
    .where(
      and(
        eq(schema.Prices.id, price_id),
        eq(schema.Prices.projectId, c.get("organization_Id"))
      )
    );

  if (!price) {
    return c.json(
      {
        error: "Not Found",
        message: "Price not found with the specified id",
      } satisfies z.infer<typeof ErrorSchema>,
      HttpStatusCodes.NOT_FOUND
    );
  }

  const formattedPrice = price.map((price) =>
    transformPrices({
      ...(price as any),
    })
  );

  return c.json(PricesResponseSchema.parse(formattedPrice), HttpStatusCodes.OK);
};

export const update_price: APPRouteHandler<UpdatePrice> = async (
  c: Context
) => {
  // @ts-expect-error
  const { price_id } = c.req.valid("param");
  // const raw_input = await c.req.json();
  const input = UpdatePricesSchema.parse(await c.req.json());
  const price = await db
    .update(schema.Prices)
    .set({
      ...input,
      customData: input.custom_data as any,
      updatedAt: new Date().toISOString(),
    })
    .where(
      and(
        eq(schema.Prices.id, price_id),
        eq(schema.Prices.projectId, c.get("organization_Id"))
      )
    )
    .returning();

  if (!price) {
    return c.json(
      {
        error: "Bad Request",
        message: "Invalid Price Id",
      } satisfies z.infer<typeof ErrorSchema>,
      HttpStatusCodes.BAD_REQUEST
    );
  }

  const formattedPrice = price.map((price) =>
    transformPrices({
      ...(price as any),
    })
  );
  return c.json(PricesResponseSchema.parse(formattedPrice), HttpStatusCodes.OK);
};
