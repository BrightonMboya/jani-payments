import { CreateKeys, PaymentProviderKey } from "./keys.routes";
import { type Context } from "hono";
import { type APPRouteHandler } from "~/lib/types";
import { createHash, randomBytes } from "crypto";
import { paymentProviderSchema } from "./keys.routes";
import * as schema from "@repo/db/db/schema.ts";
import { db } from "@repo/db";
import * as HttpStatusCodes from "~/lib/http-status-code";
import { eq } from "drizzle-orm";

export const create: APPRouteHandler<CreateKeys> = async (c: Context) => {
  // step 1: create the random key, idk maybe this is not secure enough??
  const key = randomBytes(32).toString("base64url");
  const hashedKey = createHash("sha256").update(key).digest("hex");

  await db
    .insert(schema.apiKeys)
    .values({
      id: `key_${crypto.randomUUID()}`,
      userId: "cm5m7870000001vecip9qvfm6",
      key: hashedKey,
    })
    .returning();

  return c.json(key, HttpStatusCodes.OK);
};

export const paymentProviderKey: APPRouteHandler<PaymentProviderKey> = async (
  c: Context
) => {
  const input = paymentProviderSchema.parse(await c.req.json());

  // retrieve the api key from the authorization header
  const apiKey = c.req.header("Authorization")?.slice(7)!;
  const hashedProvidedKey = createHash("sha256").update(apiKey).digest("hex");

  await db
    .update(schema.apiKeys)
    .set({
      [input.provider]: input.apiKey,
    })
    .where(eq(schema.apiKeys.key, hashedProvidedKey));

  // await db.api_keys.update({
  //   where: {
  //     key: hashedProvidedKey,
  //   },
  //   data: {
  //     [input.provider]: input.apiKey,
  //   },
  // });

  return c.json("Key updated successfully", HttpStatusCodes.OK);
};
