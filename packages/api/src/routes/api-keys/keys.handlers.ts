import { PrismaClient } from "@repo/db/types";
import { CreateKeys } from "./keys.routes";
import { type Context } from "hono";
import { type APPRouteHandler } from "~/lib/types";
import { createHash, randomBytes } from "crypto";


import * as HttpStatusCodes from "~/lib/http-status-code";

export const create: APPRouteHandler<CreateKeys> = async (c: Context) => {
  const db: PrismaClient = c.get("db");
  // step 1: create the random key, idk maybe this is not secure enough??
  const key = randomBytes(32).toString("base64url");
  const hashedKey = createHash("sha256").update(key).digest("hex");

  const res = await db.api_keys.create({
    data: {
      userId: "cm5m7870000001vecip9qvfm6",
      key: hashedKey
    },
  });
  return c.json(key, HttpStatusCodes.OK);
};
