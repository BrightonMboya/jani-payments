import { apiReference } from "@scalar/hono-api-reference";
import type { AppOpenAPI } from "./types";
import packageJSON from "../../package.json";

export default async function configureOpenAPI(app: AppOpenAPI) {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      version: packageJSON.version,
      title: "Open Billing",
    },
    security: [{ Bearer: [], organization_Id: [] }],
    servers: [
      {
        url: "api.openbilling.org",
      },
    ],
  });

  app.openAPIRegistry.registerComponent("securitySchemes", "Bearer", {
    type: "http",
    scheme: "bearer",
    bearerFormat: "JWT",
  });
  app.openAPIRegistry.registerComponent("securitySchemes", "organization_Id", {
    type: "apiKey",
    in: "cookie",
    name: "organization_Id",
  });
  app.get(
    "/reference",
    apiReference({
      theme: "kepler",
      layout: "classic",
      defaultHttpClient: {
        targetKey: "js",
        clientKey: "fetch",
      },
      spec: {
        url: "/doc",
      },
    })
  );
}
