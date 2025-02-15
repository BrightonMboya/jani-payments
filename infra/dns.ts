import { api } from "./api";

export const domain =
  {
    production: "jani-ai.com",
    dev: "dev.jani-ai.com",
  }[$app.stage] || $app.stage + "dev.jani-ai.com";

// this is used to route the request to the custom domain
export const router = new sst.aws.Router("router", {
  // domain: "billing.jani-ai.com",
  domain: domain,
  routes: {
    [`/${$app.stage}/*`]: api.url,
  },
});
