import { type Context, type Next } from "hono";
import { getPrisma } from "@repo/db";
import type { Prisma } from "@repo/db/types";
import type { PrismaClient } from "@repo/db/types";


export interface PrismaType extends Prisma.PrismaClientOptions{}


export default async function withDB(c: Context, next: Next) {
  const db = getPrisma(c.env.DATABASE_URL);
  c.set("db", db);
  await next();
}
