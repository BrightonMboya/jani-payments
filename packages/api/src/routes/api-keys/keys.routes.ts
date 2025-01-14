import { z, createRoute } from "@hono/zod-openapi";
import * as HttpStatusCodes from "~/lib/http-status-code";
import jsonContent from "~/lib/json-content";

const tags = ["Developer Tools"];

export const create_keys = createRoute({
  path: "/api-keys",
  method: "post",
  tags,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.string(),
      "Creates a Production API KEY"
    ),
  },
});

export type CreateKeys = typeof create_keys;
