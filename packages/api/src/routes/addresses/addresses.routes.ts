import { z, createRoute } from "@hono/zod-openapi";
import * as HttpStatusCodes from "~/lib/http-status-code";
import jsonContent from "~/lib/json-content";
import { jsonSchema } from "~/lib/utils/zod-helpers";
import { AddressesModel } from "@repo/db/zod/addresses.ts";
import { ErrorSchema } from "~/lib/utils/zod-helpers";

const tags = ["Addresses"]

export const list = createRoute({
    path: "/addresses",
    method: "get",
    tags,
    responses: {
        [HttpStatusCodes.OK]: jsonContent()
    }


});