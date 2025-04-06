import { domain } from "./dns";
import { secrets } from "./secrets";

// this is for the checkout repo
// export const checkout = new sst.aws.TanstackStart("checkout", {
//   domain: "checkout." + domain,
//   path: "apps/checkout",
//   environment: {
//     DATABASE_URL: process.env.DATABASE_URL!,
//   },
//   link: [secrets.DATABASE_URL],
// });

// this is the cient dashboard
export const dashboard = new sst.aws.Nextjs("dashboard", {
  path: "apps/www",
  domain: domain,
  environment: {
    DATABASE_URL: process.env.DATABASE_URL!,
    ENCRYPTION_KEY: process.env.ENCRYPTION_KEY!,
    AUTH_SECRET: process.env.AUTH_SECRET!,
    AUTH_GITHUB_CLIENT_ID: process.env.AUTH_GITHUB_CLIENT_ID!,
    AUTH_GITHUB_CLIENT_SECRET: process.env.AUTH_GITHUB_CLIENT_SECRET!,
    AUTH_GOOGLE_CLIENT_ID: process.env.AUTH_GOOGLE_CLIENT_ID!,
    AUTH_GOOGLE_CLIENT_SECRET: process.env.AUTH_GOOGLE_CLIENT_SECRET!,
    AUTH_TRUST_HOST: process.env.AUTH_TRUST_HOST!,
  },
  link: [secrets.DATABASE_URL, secrets.NEXTAUTH_SECRET, secrets.ENCRYPTION_KEY],
});
