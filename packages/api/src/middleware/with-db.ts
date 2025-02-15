import { type Context, type Next } from "hono";
import { getPrisma } from "@repo/db";
import type { Prisma } from "@repo/db/types";
import { Resource } from "sst";

export interface PrismaType extends Prisma.PrismaClientOptions {}

export const db = getPrisma(Resource.DATABASE_URL.value);

export default async function withDB(c: Context, next: Next) {
  c.set("db", db);
  await next();
}
