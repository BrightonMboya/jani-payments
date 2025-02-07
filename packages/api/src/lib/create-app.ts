import { OpenAPIHono } from "@hono/zod-openapi";
import withDB from "../middleware/with-db";
import withAuth from "../middleware/with-auth";
import notFound from "~/middleware/not-found";
import onError from "~/middleware/on-error";
import { cors } from "hono/cors";
import { APPBindings } from "./types";
import { pinoLogger } from "~/middleware/pino-logger";


export function CreateRouter() {
  return new OpenAPIHono<APPBindings>({
    strict: false,
  });
}
export type AppType = OpenAPIHono<APPBindings>;

export default function CreateAPP() {
  const app = CreateRouter();

  app.use(
    "/*",
    cors({
      origin: [
        "http://localhost:3000",
        " https://wpgusntzzjxww5xfflrwiu326a0brzhd.lambda-url.us-east-1.on.aws/",
      ],
      maxAge: 600,
      credentials: true,
      allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowHeaders: ["Content-Type", "Authorization"],
    })
  );
  app.use(withDB);
  app.use(withAuth);
  // app.use(pinoLogger());
  app.notFound(notFound);
  app.onError(onError);
  return app;
}
