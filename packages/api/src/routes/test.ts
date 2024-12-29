import { Hono } from "hono";
import { type Context, type Next } from "hono";

const test = new Hono().get("/", async (c: Context) => {
  const user = c.get("user");
  const project_slug = c.get("project_slug");

  return c.json({
    message: "Hello from the server",
    // user,
    project_slug: user?.user.defaultWorkspace,
    // project_slug: user?.project_slug || "no way",
  });
});

//   "message": "Hello from the server",
//   "user": {
//     "id": "cm510khzb0000mxqj2s1v2eoq",
//     "user": {
//       "id": "cm510khzb0000mxqj2s1v2eoq",
//       "name": "Brighton Mboya",
//       "email": "brighton.mboya.io@gmail.com",
//       "emailVerified": null,
//       "image": "https://lh3.googleusercontent.com/a/ACg8ocI31-qy_dZ4xyTV7hyaZCs4nWl2Y37j3SO4mYUDENm-ui0ljQ=s96-c",
//       "source": null,
//       "defaultWorkspace": "mboya-store",
//       "createdAt": "2024-12-23T12:29:04.391Z",
//       "updatedAt": "2024-12-23T12:45:25.139Z"
//     },
//     "project_slug": "mboya-store",
//     "email": "brighton.mboya.io@gmail.com"
//   }
// }

export default test;
