/// <reference path="../.sst/platform/config.d.ts" />
import { secrets } from "./secrets";
import { bus } from "./bus";

export const api = new sst.aws.Function("Hono", {
  url: true,
  handler: "packages/api/src/index.handler",
  copyFiles: [
    {
      from: "packages/db/node_modules/@prisma/client/",
      to: "node_modules/@prisma/client",
    },
    {
      from: "packages/db/node_modules/prisma/",
      to: "node_modules/prisma",
    },
   
  ],
  architecture: "arm64",
  runtime: "nodejs20.x",
  nodejs: {
    install: ["@prisma/client"],
    esbuild: {
      platform: "node",

      external: ["@prisma/client"],
    },
  },
  environment: {
    DATABASE_URL: process.env.DATABASE_URL!,
  },

  link: [secrets.DATABASE_URL, bus],
});
