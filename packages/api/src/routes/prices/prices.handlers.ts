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
import * as HttpsStatusPhrases from "~/lib/http-status-phrases";

export const list: APPRouteHandler<ListPrices> = async (c: Context) => {
  const user = c.get("user");
  const db: PrismaClient = c.get("db");

  const project_id = await db.project.findUnique({
    where: {
      slug: user?.user.defaultWorkspace,
    },
    select: {
      id: true,
    },
  });

  const prices = await db.prices.findMany({
    where: {
      projectId: project_id?.id,
    },
    select: {
      id: true,
      type: true,
      description: true,
      name: true,
      trial_period: true,
      custom_data: true,
      status: true,
      unit_price: {
        select: {
          amount: true,
          currency_code: true,
        },
      },
      billing_cycle: {
        select: {
          interval: true,
          frequency: true,
        },
      },
      quantity: true,
      created_at: true,
      updated_at: true,
      product_id: true,
    },
  });

  return c.json(prices);
};

export const create: APPRouteHandler<CreatePrices> = async (c: Context) => {
  try {
    const user = c.get("user");
    const db: PrismaClient = c.get("db");
    const project_id = await db.project.findUnique({
      where: {
        slug: user?.user.defaultWorkspace,
      },
      select: {
        id: true,
      },
    });
    const input = await c.req.json();

    // Create the billing cycle if provided
    let billingCycleId = null;
    if (input.billing_cycle) {
      const billingCycle = await db.billingCycle.create({
        data: {
          interval: input.billing_cycle.interval,
          frequency: input.billing_cycle.frequency,
        },
      });
      billingCycleId = billingCycle.id;
    }

    // Create the price
    const price = await db.prices.create({
      data: {
        id: `pri_${crypto.randomUUID()}`,
        product_id: input.product_id,
        projectId: project_id?.id!,
        name: input.name,
        description: input.description,
        type: input.type || "standard",
        status: input.status || "active",
        trial_period: input.trial_period,
        custom_data: input.custom_data,
        created_at: new Date(),
        billingCycle_id: billingCycleId,
        // Create unit price if provided
        unit_price: input.unit_price
          ? {
              create: {
                amount: input.unit_price.amount,
                currency_code: input.unit_price.currency_code,
              },
            }
          : undefined,
        // Create quantity constraints if provided
        quantity: input.quantity
          ? {
              create: {
                minimum: input.quantity.minimum,
                maximum: input.quantity.maximum,
              },
            }
          : undefined,
      },
      select: {
        id: true,
        product_id: true,
        type: true,
        status: true,
        name: true,
        billing_cycle: {
          select: {
            interval: true,
            frequency: true,
          },
        },
        description: true,
        trial_period: true,
        custom_data: true,
        created_at: true,
        updated_at: true,
      },
    });

    return c.json([price], HttpStatusCodes.OK);
  } catch (error) {
    return c.json(
      { error: "Failed to create price", message: "BAD REQUEST" },
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
    },
    select: {
      id: true,
      type: true,
      description: true,
      name: true,
      trial_period: true,
      custom_data: true,
      billing_cycle: {
        select: {
          interval: true,
          frequency: true,
        },
      },
      unit_price: {
        select: {
          amount: true,
          currency_code: true,
        },
      },
      status: true,
      created_at: true,
      updated_at: true,
      product_id: true,
    },
  });

  if (!price) {
    return c.json(
      { message: HttpsStatusPhrases.NOT_FOUND },
      HttpStatusCodes.NOT_FOUND
    );
  }
  return c.json(price, HttpStatusCodes.OK);
};

export const update_price: APPRouteHandler<UpdatePrice> = async (
  c: Context
) => {
  const db: PrismaClient = c.get("db");
  // @ts-expect-error
  const { price_id } = c.req.valid("param");
  const input = await c.req.json();
  const price = await db.prices.update({
    where: {
      id: price_id,
    },
    data: {
      ...input,
      updated_at: new Date(),
    },
  });

  if (!price) {
    return c.json(
      {
        error: "Bad Request",
        message: "Invalid Price Id",
      },
      HttpStatusCodes.BAD_REQUEST
    );
  }
  return c.json(price, HttpStatusCodes.OK);
};
