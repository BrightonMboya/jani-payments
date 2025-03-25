import { z } from "zod";
import { db, schema } from "@repo/db";
import { decrypt } from "@repo/api/src/routes/api-keys/helpers";
import { eq } from "drizzle-orm";
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
                  billingCycleInterval: true,
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

  chargePhoneNo: publicProcedure
    .input(
      z.object({
        mno: z.string(),
        phoneNumber: z.string(),
        checkout_Id: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const checkoutInfo = await db.query.Checkouts.findFirst({
        where: eq(schema.Checkouts.id, input.checkout_Id),
        columns: {
          project_id: true,
          discount_ammount: true,
          grand_total: true,
          discount_id: true,
        },
      });

      const azamInfo = await db.query.apiKeys.findFirst({
        where: eq(schema.apiKeys.project_id, checkoutInfo?.project_id!),
        columns: {
          AZAM_APP_NAME: true,
          AZAM_CLIENT_ID: true,
          AZAM_SECRET_KEY: true,
        },
      });

      const decryptedAzamKey = decrypt(azamInfo?.AZAM_SECRET_KEY!);
      async function generateToken() {
        const data = {
          appName: azamInfo?.AZAM_APP_NAME,
          clientId: azamInfo?.AZAM_CLIENT_ID!,
          clientSecret: decryptedAzamKey,
        };

        try {
          const response = await fetch(
            "https://authenticator-sandbox.azampay.co.tz/AppRegistration/GenerateToken",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            },
          );

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const result = await response.json();
          return result;
        } catch (error) {
          console.error("Error generating token:", error);
          throw error;
        }
      }

      // generate a toke first before charging
      const token = await generateToken();

      async function chargeMNO() {
        try {
          const res = await fetch(
            "https://sandbox.azampay.co.tz/azampay/mno/checkout",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token.data.accessToken}`,
              },
              body: JSON.stringify({
                accountNumber: input.phoneNumber,
                amount: checkoutInfo?.grand_total,
                externalId: input.checkout_Id,
                provider: input.mno,
                currency: "TZS",
              }),
            },
          );

          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }

          const response = await res.json();
          return response;
        } catch (error) {
          console.error("Error in charging phone Number", error);
          throw error;
        }
      }

      const azamRes = await chargeMNO();
      return azamRes;
    }),
});
