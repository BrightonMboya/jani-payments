/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "jani-payments",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
      providers: {
        aws: {
          region: "us-east-1",
        },
      },
    };
  },
  async run() {
    const secret = new sst.Secret("DATABASE_URL");
    const hono = new sst.aws.Function("Hono", {
      url: true,
      handler: "./packages/api/src/index.handler",
      // runtime: "nodejs18.x",
      environment: {
        DATABASE_URL: process.env.DATABASE_URL!,
      },
      link: [secret],
    });
    return {
      api: hono.url,
    };
  },
});
