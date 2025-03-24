import {
  CreateKeys,
  FetchAzamCredentials,
  storeAzamCredentials,
} from "./keys.routes";
import { type Context } from "hono";
import { type APPRouteHandler } from "~/lib/types";
import { createHash, randomBytes } from "crypto";
import {
  AzamCredentialsSchema,
  paymentProviderSchema,
  encrypt,
  decrypt,
  azamCredentialsResponseSchema,
} from "./helpers";
import * as schema from "@repo/db/db/schema.ts";
import { db } from "@repo/db";
import * as HttpStatusCodes from "~/lib/http-status-code";
import { eq } from "drizzle-orm";
import { z } from "zod";

export const create: APPRouteHandler<CreateKeys> = async (c: Context) => {
  // step 1: create the random key, idk maybe this is not secure enough??
  const key = randomBytes(32).toString("base64url");
  const hashedKey = createHash("sha256").update(key).digest("hex");

  // await db
  //   .insert(schema.apiKeys)
  //   .values({
  //     id: `key_${crypto.randomUUID()}`,
  //     userId: "cm5m7870000001vecip9qvfm6",
  //     key: hashedKey,
  //   })
  //   .returning();

  return c.json("Key created", HttpStatusCodes.OK);
};

// export const paymentProviderKey: APPRouteHandler<PaymentProviderKey> = async (
//   c: Context
// ) => {
//   const input = paymentProviderSchema.parse(await c.req.json());

//   // retrieve the api key from the authorization header
//   const apiKey = c.req.header("Authorization")?.slice(7)!;
//   const hashedProvidedKey = createHash("sha256").update(apiKey).digest("hex");

//   await db
//     .update(schema.apiKeys)
//     .set({
//       [input.provider]: input.apiKey,
//     })
//     .where(eq(schema.apiKeys.key, hashedProvidedKey));

//   return c.json("Key updated successfully", HttpStatusCodes.OK);
// };

export const StoreAzamCredentials: APPRouteHandler<
  storeAzamCredentials
> = async (c: Context) => {
  const input = AzamCredentialsSchema.parse(await c.req.json());
  const organization_Id = c.get("organization_Id");
  const azamCredentials = await db
    .update(schema.apiKeys)
    .set({
      AZAM_APP_NAME: input.appName,
      AZAM_SECRET_KEY: encrypt(input.clientSecret),
      AZAM_CLIENT_ID: input.clientId,
    })
    .where(eq(schema.apiKeys.project_id, organization_Id))
    .returning({
      appName: schema.apiKeys.AZAM_APP_NAME,
      client_Id: schema.apiKeys.AZAM_CLIENT_ID,
      encryptedKey: schema.apiKeys.AZAM_SECRET_KEY,
    });
  return c.json(azamCredentials, HttpStatusCodes.OK);
};

export const Fetch_Azam_Credentials: APPRouteHandler<
  FetchAzamCredentials
> = async (c: Context) => {
  const organization_Id = c.get("organization_Id");
  const credentials = await db.query.apiKeys.findFirst({
    where: eq(schema.apiKeys.project_id, organization_Id),
    columns: {
      AZAM_APP_NAME: true,
      AZAM_CLIENT_ID: true,
      AZAM_SECRET_KEY: true,
    },
  });

  return c.json(
    {
      AZAM_APP_NAME: credentials?.AZAM_APP_NAME,
      AZAM_CLIENT_ID: credentials?.AZAM_CLIENT_ID,
      AZAM_SECRET_KEY: decrypt(credentials?.AZAM_SECRET_KEY!),
    },
    HttpStatusCodes.OK
  );
};
