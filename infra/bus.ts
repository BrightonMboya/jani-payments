import { secrets } from "./secrets";

export const bus = new sst.aws.Bus("Bus");

bus.subscribe("MySubscriber", {
  handler: "./packages/api/src/events/events.handler",
  timeout: "5 minutes",
  link: [secrets.DATABASE_URL],
});
