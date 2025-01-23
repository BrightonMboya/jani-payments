const deadLetterQueue = new sst.aws.Queue("DeadLetterQueu");

export const busDlq = new sst.aws.Queue("busDlq", {
  dlq: deadLetterQueue.arn,
});
