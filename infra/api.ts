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
    ENCRYPTION_KEY: process.env.ENCRYPTION_KEY!,
  },

  link: [
    secrets.DATABASE_URL,
    bus,
    secrets.NEXTAUTH_SECRET,
    secrets.ENCRYPTION_KEY,
  ],
});

export const router = new sst.aws.Router("router", {
  // domain: "openbilling.org",
  domain: "tonero." + domain,
  routes: {
    "/*": api.url,
  },
});
