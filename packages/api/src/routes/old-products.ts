import { PrismaClient } from "@repo/db/types";
import { Hono } from "hono";
import { type Context } from "hono";
import { z } from "zod";

const addProductSchema = z.object({
  productName: z.string().min(5, {
    message: "Product Name should be at least 5 characters",
  }),
  // taxCategory: z.string(),
  description: z.string(),
  productImageUrl: z.string().optional(),
});

const products = new Hono()

  // list all products belonging to a merchant
  .get("/",
     async (c: Context) => {
    try {
      const user = c.get("user");
      const db: PrismaClient = c.get("db");
      // console.log(user.user?.defaultWorkspace, "&&&&&&");
      //fetch project_id
      const project_id = await db.project.findUnique({
        where: {
          slug: user?.user.defaultWorkspace,
        },
        select: {
          id: true,
        },
      });

      const products = await db.products.findMany({
        where: {
          project_id: project_id?.id,
        },
      });
      return c.json({
        products,
      });
    } catch (error) {
      return c.json({ error: "Failed to Fetch Products" }, 501);
    }
  })

  .post("/", async (c: Context) => {
    const user = c.get("user");
    const db: PrismaClient = c.get("db");

    const project_id = await db.project.findUnique({
      where: {
        slug: user?.user.defaultWorkspace,
      },
      select: {
        id: true,
      },
    });

    const input_body = await c.req.json();
    const input = addProductSchema.parse(input_body);

    const products = await db.products.create({
      data: {
        description: input.description,
        name: input.productName,
        project_id: project_id?.id!,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
    });
    return c.json(products);
  });

export default products;
