import { Hono } from "hono";
import { type Context, type Next } from "hono";
import { Resource } from "sst";
import { bus } from "sst/aws/bus";
import { ZodValidator } from "sst/event/validator";
import { event } from "sst/event";
// import { defineEvent } from "~/events/utils";
import { z } from "zod";

export const defineEvent = event.builder({
  validator: ZodValidator,
  metadata() {
    return {};
  },
});

export const Event = {
  Created: defineEvent(
    "sample.event",
    z.object({
      message: z.string(),
    })
  ),
};

const test = new Hono().get("/", async (c: Context) => {
  const user = c.get("user");
  // const project_slug = c.get("project_slug");
  // bus.publish(Resource.Bus, TestEvent.Created, {"Hello World" });

  return c.json({
    message: "Hello from the server",
    // user,
    project_slug: user?.user.defaultWorkspace,
    // project_slug: user?.project_slug || "no way",
  });
});

export default test;
