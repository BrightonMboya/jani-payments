/// <reference path="../.sst/platform/config.d.ts" />

export const api = new sst.aws.Function("Hono", {
  url: true,
  handler: "src/index.handler",
});
