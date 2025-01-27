import { busDlq } from "./queue";
import { secrets } from "./secrets";

export const bus = new sst.aws.Bus("Bus");

bus.subscribe("MySubscriber", {
  handler: "./packages/api/src/events/events.handler",
  timeout: "5 minutes",
  permissions: [
    {
      actions: ["sqs:*"],
      resources: [busDlq.arn],
    },
  ],
  transform: {
    function: {
      deadLetterConfig: {
        targetArn: busDlq.arn,
      },
    },
  },
  link: [secrets.DATABASE_URL],
  // copyFiles: [{ from: "./packages/db/src/client/" }],
});
