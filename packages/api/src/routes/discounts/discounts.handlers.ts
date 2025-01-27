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
import { ErrorSchema } from "~/lib/utils/zod-helpers";
import {
  CreateDiscountSchema,
  transformDiscount,
  UpdateDiscountSchema,
} from "./helpers";

export const list: APPRouteHandler<ListDiscounts> = async (c: Context) => {
  const db: PrismaClient = c.get("db");

  const discounts = await db.discounts.findMany({
    where: {
      projectId: c.get("organization_Id"),
    },
    omit: {
      projectId: true,
    },
    include: {
      discount_prices: {
        select: {
          price_id: true,
        },
      },
    },
  });
  const formattedDiscounts = discounts.map((discount) =>
    transformDiscount(discount)
  );

  return c.json(
    formattedDiscounts as z.infer<typeof DiscountResponseSchema>[],
    HttpStatusCodes.OK
  );
};

export const create: APPRouteHandler<CreateDiscount> = async (c: Context) => {
  const db: PrismaClient = c.get("db");
  const raw_input = await c.req.json();
  const input = CreateDiscountSchema.parse(raw_input);

  const discount = await db.discounts.create({
    data: {
      projectId: c.get("organization_Id"),
      id: `dis_${crypto.randomUUID()}`,
      status: input.status || "active",
      description: input.description,
      enabled_for_checkout: input.enabled_for_checkout,
      amount: input.amount,
      currency_code: input.currency_code,
      type: input.type,
      recur: input.recur,
      max_recurring_intervals: input.max_recurring_intervals,
      usage_limit: input.usage_limit,
      expires_at: input.expires_at,
      created_at: new Date(),
      updated_at: new Date(),
      custom_data: input.custom_data!,
      // If input has price_ids, create discount_prices relations
      ...(input.price_ids && {
        discount_prices: {
          create: input.price_ids.map((price_id: string) => ({
            price_id,
          })),
        },
      }),
    },
    include: {
      discount_prices: {
        select: {
          price_id: true,
        },
      },
    },
    omit: {
      projectId: true,
    },
  });

  const transformedDiscount = transformDiscount(discount);

  return c.json(transformedDiscount, HttpStatusCodes.OK);
};

export const get_discount: APPRouteHandler<GetDiscount> = async (
  c: Context
) => {
  const db: PrismaClient = c.get("db");
  const { discount_id } = c.req.param();
  const discount = await db.discounts.findUnique({
    where: {
      id: discount_id,
      projectId: c.get("organization_Id"),
    },
    include: {
      discount_prices: {
        select: {
          price_id: true,
        },
      },
    },
    omit: {
      projectId: true,
    },
  });

  if (!discount) {
    const errorResponse: z.infer<typeof ErrorSchema> = {
      error: "Discount not found",
      message: "BAD REQUEST",
    };
    return c.json(errorResponse, HttpStatusCodes.NOT_FOUND);
  }

  const formattedDiscount = transformDiscount(discount);

  return c.json(
    formattedDiscount as z.infer<typeof DiscountResponseSchema>,
    HttpStatusCodes.OK
  );
};

export const update_discount: APPRouteHandler<UpdateDiscount> = async (
  c: Context
) => {
  const db: PrismaClient = c.get("db");
  const discount_id = c.req.param("discount_id");
  const raw_input = await c.req.json();
  const input = UpdateDiscountSchema.parse(raw_input);
  const discount = await db.discounts.update({
    where: {
      id: discount_id,
      projectId: c.get("organization_Id"),
    },
    data: {
      ...input,
      custom_data: input.custom_data as any,
      updated_at: new Date(),
    },
    include: {
      discount_prices: {
        select: {
          price_id: true,
        },
      },
    },
    omit: {
      projectId: true,
    },
  });

  if (!discount) {
    const errorResponse: z.infer<typeof ErrorSchema> = {
      error: "Discount not found",
      message: "BAD REQUEST",
    };
    return c.json(errorResponse, HttpStatusCodes.NOT_FOUND);
  }
  const formattedDiscount = transformDiscount(discount);

  return c.json(
    formattedDiscount as z.infer<typeof DiscountResponseSchema>,
    HttpStatusCodes.OK
  );
};
