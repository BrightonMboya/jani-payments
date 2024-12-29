import type { ErrorHandler } from "hono";
import type { StatusCode } from "hono/utils/http-status";
import { INTERNAL_SERVER_ERROR, OK } from "~/lib/http-status-code.js";
import { pinoLogger } from "~/middleware/pino-logger";

const onError: ErrorHandler = (err, c) => {
  const currentStatus =
    "status" in err ? err.status : c.newResponse(null).status;
  const statusCode =
    currentStatus !== OK
      ? (currentStatus as StatusCode)
      : INTERNAL_SERVER_ERROR;
  const env = c.env?.NODE_ENV || c.env?.NODE_ENV;


  if (err.name === "PrismaClientValidationError") {
    return c.json({
      error: "Bad Request",
      message: "Invalid Request Body",
    });
  }

  if (err.name === "PrismaClientKnownRequestError") {
    return c.json({
      error: "Bad Request",
      // @ts-expect-error
      message: err.meta.cause,
    });
  }
  return c.json(
    {
      message: err.message,

      stack: env === "production" ? undefined : err.stack,
    },
    statusCode
  );
};

export default onError;
