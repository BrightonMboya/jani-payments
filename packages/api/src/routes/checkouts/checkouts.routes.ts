import { createRoute, z } from "@hono/zod-openapi";
import jsonContent from "~/lib/json-content";

export const checkout = createRoute({
  path: "/checkout",
  method: "get",
  responses: {
    200: {
      content: {
        "text/html": {
          schema: z.string(),
        },
      },
      description: "Returns the checkout page HTML",
    },
  },
});


export type Checkout = typeof checkout;