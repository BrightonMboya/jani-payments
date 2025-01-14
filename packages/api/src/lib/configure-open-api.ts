import { apiReference } from "@scalar/hono-api-reference";
import { bearerAuth } from "./protect-route-config";
import type { AppOpenAPI } from "./types";

import packageJSON from "../../package.json";

export default function configureOpenAPI(app: AppOpenAPI) {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      version: packageJSON.version,
      title: "JANI Payments",
    },
    security: [{ bearerAuth: [] }],
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
