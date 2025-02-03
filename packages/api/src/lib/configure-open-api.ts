import { apiReference } from "@scalar/hono-api-reference";
import type { AppOpenAPI } from "./types";
import packageJSON from "../../package.json";

export default async function configureOpenAPI(app: AppOpenAPI) {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      version: packageJSON.version,
      title: "JANI Payments",
    },
    security: [{ Bearer: [] }],
    servers: [
      {
        url: "https://p5kv4b3h7rzao6bxlzmisxykfe0dragb.lambda-url.us-east-1.on.aws",
      },
    ],
    "x-speakeasy-globals": {
      parameters: [
        {
          name: "organizationId",
          in: "header",
          description: "Organization ID",
          required: true,
          schema: {
            type: "string",
          },
          "x-speakeasy-global": true,
        },
      ],
    },
  });
  app.openAPIRegistry.registerComponent("securitySchemes", "Bearer", {
    type: "http",
    scheme: "bearer",
    bearerFormat: "JWT",
  });
  app.openAPIRegistry.registerComponent("securitySchemes", "organization_Id", {
    type: "apiKey",
    in: "header",
    name: "organization_Id",
  });
  app.get(
    "/reference",
    apiReference({
      theme: "kepler",
      layout: "classic",
      defaultHttpClient: {
        targetKey: "javascript",
        clientKey: "fetch",
      },
      spec: {
        url: "/doc",
      },
    })
  );
}
