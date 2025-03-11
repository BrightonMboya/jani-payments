import { getCookie } from "hono/cookie";
import { getToken } from "next-auth/jwt";
import { type Context, type Next } from "hono";
import { db } from "@repo/db";
import { createHash } from "crypto";
import * as HttpStatusCodes from "~/lib/http-status-code";
import * as schema from "@repo/db/db/schema.ts";
import { eq } from "drizzle-orm";
import { Resource } from "sst";

const withAuth = async (c: Context, next: Next) => {
  try {
    if (c.req.path.startsWith("/reference") || c.req.path.startsWith("/doc")) {
      return next();
    }

    const authHeader = c.req.header("Authorization");
    console.log(authHeader, "huuh")
    if (!authHeader?.startsWith("Bearer ")) {
      return c.json(
        { error: "Unauthorized", message: "Invalid authorization format" },
        401
      );
    }

    const token = authHeader.slice(7);

    // SDK API Key Authentication (shorter token)
    if (token.length < 50) {
      const hashedProvidedKey = createHash("sha256")
        .update(token)
        .digest("hex");
      const apiKeyRecord = await db
        .select({
          key: schema.apiKeys.key,
          prefix: schema.apiKeys.prefix,
          userId: schema.apiKeys.userId,
          projectId: schema.apiKeys.project_id,
          user: {
            email: schema.user.email,
            defaultWorkspace: schema.user.defaultWorkspace,
          },
        })
        .from(schema.apiKeys)
        .leftJoin(schema.user, eq(schema.apiKeys.userId, schema.user.id))
        .where(eq(schema.apiKeys.key, hashedProvidedKey))
        .limit(1)
        .then((results) => results[0] || null);

      if (!apiKeyRecord) {
        return c.json(
          { error: "Invalid API key" },
          HttpStatusCodes.BAD_REQUEST
        );
      }

      c.set("user", {
        id: apiKeyRecord.userId,
        user: apiKeyRecord.user,
        email: apiKeyRecord.user?.email,
        defaultWorkSpace: apiKeyRecord.user?.defaultWorkspace,
        authMethod: "apiKey",
      });
      c.set("organization_Id", apiKeyRecord.projectId);
      return next();
    }

    // Dashboard Session Token Authentication (longer token)
    const token_data = await getToken({
      req: c.req.raw,
      secret: Resource.NEXTAUTH_SECRET.value,
    });

    if (!token_data) {
      return c.json({ error: "Invalid session token" }, 401);
    }

    const project_id = getCookie(c, "organization_Id");
    if (!project_id) {
      return c.json(
        { error: "No organization ID found in cookies" },
        HttpStatusCodes.BAD_REQUEST
      );
    }

    c.set("user", {
      id: token_data.sub,
      user: token_data.user,
      email: token_data.email,
      authMethod: "session",
    });
    c.set("organization_Id", project_id);
    return next();
  } catch (error) {
    console.error(error);
    return c.json(
      {
        error: "Authentication failed",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      401
    );
  }
};

export default withAuth;
