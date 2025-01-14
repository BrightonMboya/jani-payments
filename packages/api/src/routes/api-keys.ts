import { Hono } from "hono";
// import { db } from "@repo/db";
import { z } from "zod";
import { Context } from "hono";
import { nanoid } from "nanoid";
import type { Prisma } from "@repo/db/types";
import { PrismaType } from "../middleware/with-db";
import type { PrismaClient } from "@repo/db/types";

const apiKeySchema = z.object({
  prefix: z.string(),
  user_id: z.string(),
  description: z.string(),
  name: z.string(),
});

const api_keys = new Hono()
  .post("/", async (c: Context) => {
    try {
      const db = c.get("db");
      const input_body = await c.req.json();
      const input = apiKeySchema.parse(input_body);
      const randomKey = nanoid(32);
      const api_key = await db.api_keys.create({
        data: {
          prefix: input.prefix,
          key: randomKey,
          userId: input.user_id,
          description: input.description,
          name: input.name,
        },
      });
      return c.json({
        message: "API Key Created Succesfully",
        api_key,
      });
    } catch (error) {
      console.log(error);
      if (error instanceof z.ZodError) {
        return c.json({ error: "Invalid input", details: error.errors }, 400);
      }
    }
    return c.json({ error: "Internal server error" }, 500);
  })

  .get("/:user-id", async (c: Context) => {
    try {
      const db: PrismaClient<Prisma.PrismaClientOptions> = c.get("db");
      const user_id = c.req.param("id");
      const keys = await db.api_keys.findMany({
        where: {
          userId: user_id,
        },
      });
      return c.json({
        keys,
      });
    } catch (error) {
      return c.json({ error: "Internal server error" }, 500);
    }
  })

  .delete("/:user_id/:api_key_id", async (c: Context) => {
    try {
      const { user_id, api_key_id } = c.req.param();
      const db: PrismaClient<Prisma.PrismaClientOptions> = c.get("db");
      const res = await db.api_keys.delete({
        where: {
          userId: user_id,
          id: api_key_id,
        },
      });
      return c.json({
        res,
      });
    } catch (cause) {
      return c.json({ error: "Failed to delete the api key" }, 500);
    }
  });

export default api_keys;
