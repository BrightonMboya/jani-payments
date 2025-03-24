import { domain } from "./dns";
import { secrets } from "./secrets";

// this is for the checkout repo
export const checkout = new sst.aws.TanstackStart("checkout", {
  domain: "checkout." + domain,
  path: "apps/checkout",
  environment: {
    DATABASE_URL: process.env.DATABASE_URL!,
  },
  link: [secrets.DATABASE_URL],
});

// this is the cient dashboard
// export const dashboard = new sst.aws.Nextjs("dashboard", {
//   path: "apps/www",
//   domain: domain,
// })
