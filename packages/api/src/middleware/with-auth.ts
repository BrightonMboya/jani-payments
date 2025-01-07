import { getCookie } from "hono/cookie";
import { getToken } from "next-auth/jwt";
import { type Context, type Next } from "hono";

const withAuth = async (c: Context, next: Next) => {
  try {
    // Get the session token from the cookie
    // Auth.js stores this as 'authjs.session-token' by default
    if (c.req.path.startsWith("/reference") || c.req.path.startsWith("/doc")) {
      return next();
    }
    const sessionToken = getCookie(c, "authjs.session-token");
    // const allCookies = getCookie(c);
    // console.log(allCookies);

    if (!sessionToken) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    // Verify the JWT token that Auth.js created
    const token = await getToken({
      req: c.req.raw,
      secret: c.env.NEXTAUTH_SECRET,
    });
    console.log(token);
    if (!token) {
      return c.json(
        { error: "Invalid session", code: "AUTH_SESSION_INVALID" },
        401
      );
    }

    // Add the verified session data to context
    c.set("user", {
      id: token.sub,
      user: token.user,
      email: token.email,
    });

    await next();
  } catch (error) {
    console.error(error);
    return c.json({ error: "Authentication failed" }, 401);
  }
};

export default withAuth;
