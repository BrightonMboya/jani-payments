/// <reference path="../.sst/platform/config.d.ts" />
import { secrets } from "./secrets";
import { bus } from "./bus";

export const api = new sst.aws.Function("Hono", {
  url: true,
  handler: "packages/api/src/index.handler",
  description: "The Billing Engine API",
  copyFiles: [
    {
      from: "./node_modules/.pnpm/@prisma+client@6.3.1_prisma@6.3.1_typescript@5.7.3/node_modules/.prisma/client",
      // to: "node_modules/.pnpm/@prisma+client@6.3.1_prisma@6.3.1_typescript@5.7.3/node_modules/.prisma",
    },
   
  ],
  architecture: "arm64",
  environment: {
    DATABASE_URL: process.env.DATABASE_URL!,
  },

  link: [secrets.DATABASE_URL, bus],
});
