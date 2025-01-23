import { secrets } from "./secrets";
import { busDlq } from "./queue";

new sst.aws.Cron("Handles Discount Expires Date", {
  schedule: "rate(1 day)",
  job: {
    handler:
      "../packages/api/src/routes/discounts/jobs/handle-discount-expires-date",
    link: [secrets.DATABASE_URL],
    transform: {
      function: {
        deadLetterConfig: {
          targetArn: busDlq.arn,
        },
      },
    },
  },
});

new sst.aws.Cron("Mark Subscription as Paused", {
  schedule: "rate(1 day)",
  job: {
    handler: "../packages/api/src/routes/subscription/jobs/mark-as-paused",
    link: [secrets.DATABASE_URL],
    transform: {
      function: {
        deadLetterConfig: {
          targetArn: busDlq.arn,
        },
      },
    },
  },
});

new sst.aws.Cron("Subscription Scheduled Changes", {
  schedule: "rate(1 day)",
  job: {
    handler:
      "../packages/api/src/routes/subscription/jobs/subscription_scheduled_changes",
    link: [secrets.DATABASE_URL],
    transform: {
      function: {
        deadLetterConfig: {
          targetArn: busDlq.arn,
        },
      },
    },
  },
});

new sst.aws.Cron("Trial Management", {
  schedule: "rate(1 day)",
  job: {
    handler: "../packages/api/src/routes/subscription/jobs/trial-management",
    link: [secrets.DATABASE_URL],
    transform: {
      function: {
        deadLetterConfig: {
          targetArn: busDlq.arn,
        },
      },
    },
  },
});
