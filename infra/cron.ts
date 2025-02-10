import { secrets } from "./secrets";
import { busDlq } from "./queue";

new sst.aws.Cron("Handles_Discount_Expires_Date", {
  schedule: "rate(1 day)",
  job: {
    handler:
      "../packages/api/src/routes/discounts/jobs/handle-discount-expires-date.handler",
    link: [secrets.DATABASE_URL],
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
  },
});

new sst.aws.Cron("Mark_Subscription_as_Paused", {
  schedule: "rate(1 day)",
  job: {
    handler: "../packages/api/src/routes/subscription/jobs/mark-as-paused",
    link: [secrets.DATABASE_URL],
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
  },
});

new sst.aws.Cron("Subscription_Scheduled_Changes", {
  schedule: "rate(1 day)",
  job: {
    handler:
      "../packages/api/src/routes/subscription/jobs/subscription_scheduled_changes",
    link: [secrets.DATABASE_URL],
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
  },
});

new sst.aws.Cron("Trial_Management", {
  schedule: "rate(1 day)",
  job: {
    handler: "../packages/api/src/routes/subscription/jobs/trial-management",
    link: [secrets.DATABASE_URL],
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
  },
});
