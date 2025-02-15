import { domain } from "./dns";

export const checkout = new sst.aws.StaticSite("checkout", {
  domain: "checkout" + domain,
  path: "apps/checkout",
  build: {
    command: "npm run build",
    output: "dist",
  },
});
