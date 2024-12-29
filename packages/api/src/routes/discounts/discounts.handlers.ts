import { APPRouteHandler } from "~/lib/types";
import {
  type ListDiscounts,
  CreateDiscount,
  GetDiscount,
  UpdateDiscount,
} from "./discounts.routes";
import { type Context } from "hono";
import { PrismaClient } from "@repo/db/types";
import * as HttpStatusCodes from "~/lib/http-status-code";
import { z } from "zod";
import { DiscountResponseSchema } from "./discounts.routes";
import { Json } from "~/lib/utils/zod-helpers";

const selectDiscountFields = {
  id: true,
  status: true,
  description: true,
  enabled_for_checkout: true,
  amount: true,
  currency_code: true,
  type: true,
  discount_prices: {
    select: {
      price_id: true,
    },
  },
  recur: true,
  max_recuring_intervals: true,
  usage_limit: true,
  times_used: true,
  expires_at: true,
  custom_data: true,
  created_at: true,
  updated_at: true,
};

export const list: APPRouteHandler<ListDiscounts> = async (c: Context) => {
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

  const discounts = await db.discounts.findMany({
    where: {
      projectId: project_id?.id,
    },
    select: {
      id: true,
      status: true,
      description: true,
      enabled_for_checkout: true,
      amount: true,
      currency_code: true,
      type: true,
      discount_prices: {
        select: {
          price: true,
        },
      },
      recur: true,
      max_recuring_intervals: true,
      usage_limit: true,
      times_used: true,
      expires_at: true,
      custom_data: true,
      created_at: true,
      updated_at: true,
    },
  });

  const formattedDiscounts = discounts.map((d) => ({
    id: d.id,
    status: d.status,
    description: d.description,
    enabled_for_checkout: d.enabled_for_checkout,
    amount: Number(d.amount),
    currency_code: d.currency_code,
    type: d.type,
    restricted_to: d.discount_prices.map((dp) => dp.price.id),
    recur: d.recur,
    max_recuring_intervals: d.max_recuring_intervals
      ? Number(d.max_recuring_intervals)
      : null,
    usage_limit: d.usage_limit,
    times_used: d.times_used,
    expires_at: d.expires_at,
    custom_data: d.custom_data,
    created_at: d.created_at,
    updated_at: d.updated_at,
  }));

  return c.json(formattedDiscounts, HttpStatusCodes.OK);
};

export const create: APPRouteHandler<CreateDiscount> = async (c: Context) => {
  const user = c.get("user");
  const db: PrismaClient = c.get("db");
  const input = await c.req.json();

  const project_id = await db.project.findUnique({
    where: {
      slug: user?.user.defaultWorkspace,
    },
    select: {
      id: true,
    },
  });

  const discount = await db.discounts.create({
    data: {
      projectId: project_id?.id,
      id: `dis_${crypto.randomUUID()}`,
      status: input.status || "active",
      description: input.description,
      enabled_for_checkout: input.enabled_for_checkout,
      amount: input.amount,
      currency_code: input.currency_code,
      type: input.type,
      recur: input.recur,
      max_recuring_intervals: input.max_recuring_intervals,
      usage_limit: input.usage_limit,
      expires_at: input.expires_at,
      created_at: new Date(),
      updated_at: new Date(),
      custom_data: input.custom_data,
      // If input has price_ids, create discount_prices relations
      ...(input.price_ids && {
        discount_prices: {
          create: input.price_ids.map((price_id: string) => ({
            price_id,
          })),
        },
      }),
    },
    select: selectDiscountFields,
  });

  const transformedDiscount = {
    ...discount,
    amount: Number(discount.amount),
    max_recuring_intervals: discount.max_recuring_intervals
      ? Number(discount.max_recuring_intervals)
      : null,
  };

  return c.json([transformedDiscount], HttpStatusCodes.OK);
};

export const get_discount: APPRouteHandler<GetDiscount> = async (
  c: Context
) => {
  const db: PrismaClient = c.get("db");
  const { discount_id } = c.req.param();
  const discount = await db.discounts.findUnique({
    where: {
      id: discount_id,
    },
    select: selectDiscountFields,
  });

  if (!discount) {
    return c.json(
      { error: "Discount not found", message: "BAD REQUEST" },
      HttpStatusCodes.NOT_FOUND
    );
  }

  const formattedDiscount = {
    id: discount.id,
    status: discount.status,
    description: discount.description,
    enabled_for_checkout: discount.enabled_for_checkout,
    amount: Number(discount.amount),
    currency_code: discount.currency_code,
    type: discount.type,
    restricted_to: discount.discount_prices.map((dp) => dp.price_id),
    recur: discount.recur,
    max_recuring_intervals: discount.max_recuring_intervals
      ? Number(discount.max_recuring_intervals)
      : null,
    usage_limit: discount.usage_limit,
    times_used: discount.times_used,
    expires_at: discount.expires_at,
    custom_data: discount.custom_data as Json,
    created_at: discount.created_at,
    updated_at: discount.updated_at,
  } satisfies z.infer<typeof DiscountResponseSchema>;

  return c.json(formattedDiscount, HttpStatusCodes.OK);
};

export const update_discount: APPRouteHandler<UpdateDiscount> = async (
  c: Context
) => {
  const db: PrismaClient = c.get("db");
  // const { discount_id } = c.req.valid("param");
  const discount_id = c.req.param("discount_id");
  const input = await c.req.json();
  const discount = await db.discounts.update({
    where: {
      id: discount_id,
    },
    data: {
      ...input,
      updated_at: new Date(),
    },
    select: selectDiscountFields,
  });

  if (!discount) {
    return c.json(
      { error: "Discount not found", message: "BAD REQUEST" },
      HttpStatusCodes.NOT_FOUND
    );
  }

  const formattedDiscount = {
    id: discount.id,
    status: discount.status,
    description: discount.description,
    enabled_for_checkout: discount.enabled_for_checkout,
    amount: Number(discount.amount),
    currency_code: discount.currency_code,
    type: discount.type,
    restricted_to: discount.discount_prices.map((dp) => dp.price_id),
    recur: discount.recur,
    max_recuring_intervals: discount.max_recuring_intervals
      ? Number(discount.max_recuring_intervals)
      : null,
    usage_limit: discount.usage_limit,
    times_used: discount.times_used,
    expires_at: discount.expires_at,
    custom_data: discount.custom_data as Json,
    created_at: discount.created_at,
    updated_at: discount.updated_at,
  } satisfies z.infer<typeof DiscountResponseSchema>;

  return c.json(formattedDiscount, HttpStatusCodes.OK);
};
