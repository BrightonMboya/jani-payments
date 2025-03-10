/// <reference path="../.sst/platform/config.d.ts" />
import { secrets } from "./secrets";
import { bus } from "./bus";
import { domain } from "./dns";

export const api = new sst.aws.Function("Hono", {
  url: true,
  handler: "packages/api/src/index.handler",
  description: "The Billing Engine API",
  environment: {
    DATABASE_URL: process.env.DATABASE_URL!,
  },

  link: [secrets.DATABASE_URL, bus, secrets.NEXTAUTH_SECRET],
});

export const router = new sst.aws.Router("router", {
  // domain: "openbilling.org",
  domain: "api." + domain,
  routes: {
    "/*": api.url,
  },
});
