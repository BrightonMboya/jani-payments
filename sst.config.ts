/// <reference path="./.sst/platform/config.d.ts" />

import { readdirSync } from "fs";

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
    // this imports all the infra defn on the infra directory and then returns it.
    // good trick for not needing to update this file whenever you change stuff there
    const infra = {};
    for (const value of readdirSync("./infra")) {
      const result = await import("./infra/" + value);
      if (result.outputs) Object.assign(infra, result.outputs);
    }
    return infra;
  },
});
