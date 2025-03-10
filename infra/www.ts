import { domain } from "./dns";

// this is for the checkout repo
export const checkout = new sst.aws.StaticSite("checkout", {
  domain: "checkout." + domain,
  path: "apps/checkout",
  build: {
    command: "npm run build",
    output: "dist",
  },
});


// this is the cient dashboard
// export const dashboard = new sst.aws.Nextjs("dashboard", {
//   path: "apps/www",
//   domain: domain,
// })