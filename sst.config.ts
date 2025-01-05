/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "jani-payments",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "cloudflare",
    };
  },
  async run() {
    const hono = new sst.cloudflare.Worker("Hono", {
      url: true,
      handler: "packages/api/src/index.ts",
    });
    return {
      api: hono.url
    }
  },
});