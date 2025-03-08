import { api } from "./api";

export const domain =
  {
    production: "openbilling.org",
    dev: "dev.openbilling.org",
  }[$app.stage] || $app.stage + "openbilling.org";

// // this is used to route the request to the custom domain
// export const router = new sst.aws.Router("router", {
//   // domain: "billing.jani-ai.com",
//   domain: domain,
//   routes: {
//     [`/${$app.stage}/*`]: api.url,
//   },
// });
