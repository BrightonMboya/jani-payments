import { TRPCClientError } from "@trpc/client";

import { z } from "zod";
import { db, schema } from "@repo/db";
import { and, eq } from "drizzle-orm";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const checkouts = createTRPCRouter({
  fetchCheckoutSession: publicProcedure
    .input(
      z.object({
        checkout_Id: z.string(),
      }),
    )
    .query(async ({ input }) => {
      const checkoutSession = await db.query.Checkouts.findFirst({
        where: eq(schema.Checkouts.id, input.checkout_Id),
        with: {
          checkoutItems: {
            with: {
              price: {
                columns: {
                  name: true,
                  currencyCode: true,
                  amount: true,
                },
                with: {
                  Products: {
                    columns: {
                      name: true,
                      description: true,
                    },
                  },
                },
              },
            },
          },
        },
      });
      return checkoutSession;
    }),
});


