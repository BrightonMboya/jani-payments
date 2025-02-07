export const checkout = new sst.aws.StaticSite("checkout", {
  domain: "checkout.jani-ai.com",
  path: "apps/checkout",
  build: {
    command: "npm run build",
    output: "dist",
  },
});
