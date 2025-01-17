import { ZodValidator } from "sst/event/validator";
import { event } from "sst/event";

export const defineEvent = event.builder({
  validator: ZodValidator,
//   metadata() {},
});
