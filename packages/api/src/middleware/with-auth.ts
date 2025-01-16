import { getCookie } from "hono/cookie";
import { getToken } from "next-auth/jwt";
import { type Context, type Next } from "hono";
import { PrismaClient } from "@repo/db/types";
import { createHash } from "crypto";

const withAuth = async (c: Context, next: Next) => {
  try {
    // Skip auth for public routes
    if (
      c.req.path.startsWith("/reference") ||
      c.req.path.startsWith("/doc") ||
      c.req.path.startsWith("/api-keys")
    ) {
      return next();
    }

    // Check for Bearer token first
    const authHeader = c.req.header("Authorization");

    if (!authHeader) {
      return c.json(
        { error: "Unauthorized", message: "No Valid Bearer token provided" },
        401
      );
    }
    if (authHeader?.startsWith("Bearer ")) {
      const apiKey = authHeader.slice(7);
      const hashedProvidedKey = createHash("sha256")
        .update(apiKey)
        .digest("hex");

      const db: PrismaClient = c.get("db");
      const apiKeyRecord = await db.api_keys.findFirst({
        where: {
          key: hashedProvidedKey,
        },
        include: {
          User: true,
        },
      });

      if (!apiKeyRecord) {
        return c.json({ error: "Invalid API key" }, 401);
      }

      c.set("user", {
        id: apiKeyRecord.userId,
        user: apiKeyRecord.User,
        email: apiKeyRecord.User.email,
        defaultWorkSpace: apiKeyRecord.User.defaultWorkspace,
        authMethod: "apiKey",
      });

      // console.log(beforeQuery - startTime   , "is this long?")
      return next();
    }

    // If no Bearer token, check for session cookie
    const sessionToken = getCookie(c, "authjs.session-token");
    if (!sessionToken) {
      return c.json(
        {
          error: "Unauthorized",
          message: "No valid authentication method found",
        },
        401
      );
    }

    // Verify the JWT token
    const token = await getToken({
      req: c.req.raw,
      secret: c.env.NEXTAUTH_SECRET,
    });

    if (!token) {
      return c.json(
        { error: "Invalid session", code: "AUTH_SESSION_INVALID" },
        401
      );
    }

    // Set session user data
    c.set("user", {
      id: token.sub,
      user: token.user,
      email: token.email,
      authMethod: "session",
    });

    // set the project_id which comes as organization_id from the cookie
    const project_id = getCookie(c, "organization_id");
    c.set("project_id", project_id);

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
