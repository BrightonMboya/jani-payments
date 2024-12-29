import type { OpenAPIHono, RouteConfig, RouteHandler } from "@hono/zod-openapi";
import type { PinoLogger } from "hono-pino";

export interface APPBindings {
  Bindings: {
    DATABASE_URL: string;
    NEXTAUTH_SECRET: string;
  };
  Variables: {
    logger: PinoLogger;

  };
}

export type AppOpenAPI = OpenAPIHono<APPBindings>;
export type APPRouteHandler<R extends RouteConfig> = RouteHandler<
  R,
  APPBindings
>;
