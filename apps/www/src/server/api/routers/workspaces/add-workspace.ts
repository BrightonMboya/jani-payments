import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "../../trpc";
import { z } from "zod";
import { nanoid } from "~/utils/functions/nanoid";
import { waitUntil } from "@vercel/functions";
import { TRPCClientError } from "@trpc/client";
import { WorkspaceSchema } from "./schema";
import { schema, db } from "@repo/db";
import { eq } from "drizzle-orm";

export const addWorkSpace = createTRPCRouter({
  addWorkSpace: publicProcedure
    .input(z.object({ slug: z.string(), name: z.string() }))
    .mutation(async ({ ctx, input }) => {
      // try {
      // check if the slug exists
      // if (
      //   // @ts-ignore
      //   (await isReservedKey(input.slug)) || DEFAULT_REDIRECTS[input.slug]
      // ) {
      //    throw new TRPCClientError("Project already in use")
      // }
      const project = await db.query.Project.findFirst({
        where: eq(schema.Project.slug, input.slug),
        columns: {
          slug: true,
        },
      });
      if (project) {
        throw new TRPCClientError("Project already in use");
      } else {
        // // lets check if the person can create more than one workspaces
        // const freeWorkspaces = await ctx.db.project.count({
        //   where: {
        //     plan: "free",
        //     users: {
        //       some: {
        //         userId: ctx?.user?.id,
        //         role: "owner",
        //       },
        //     },
        //   },
        // });

        // if (freeWorkspaces >= 1) {
        //   throw new TRPCClientError(
        //     "You can only create up to 1 free workspace. Additional workspaces require a paid plan",
        //   );
        // }
        try {
          const workspaceResponse = await db.transaction(async (tx) => {
            const newProject = await tx
              .insert(schema.Project)
              .values({
                id: crypto.randomUUID(),
                name: input.name,
                slug: input.slug,
                billingCycleStart: 2,
                inviteCode: nanoid(24),
                updatedAt: new Date().toISOString(),
              })
              .returning({ id: schema.Project.id });

            await tx.insert(schema.ProjectUsers).values({
              id: crypto.randomUUID(),
              projectId: newProject[0].id,
              userId: ctx.session.user.id,
              role: "owner",
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            });

            return await tx.query.Project.findFirst({
              where: eq(schema.Project.id, newProject[0].id),
              with: {
                users: {
                  columns: {
                    userId: true,
                  },
                },
              },
              columns: {
                role: true,
              },
            });
          });

          waitUntil(
            (async () => {
              // @ts-ignore
              if (ctx?.session?.user["defaultWorkspace"] === null) {
                await ctx.db
                  .update(schema.user)
                  .set({
                    defaultWorkspace: workspaceResponse.slug,
                  })
                  .where(eq(schema.user.id, ctx.session.user.id));
              }
            })(),
          );

          // return WorkspaceSchema.parse({
          //   ...workspaceResponse,
          //   id: `ws_${workspaceResponse.id}`,
          // });
          return workspaceResponse;
        } catch (cause) {
          console.log(cause);
        }
      }
      // } catch (cause) {
      //   console.log(cause);
      // }
    }),
});
