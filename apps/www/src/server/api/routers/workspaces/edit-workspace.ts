import { createTRPCRouter, protectedProcedure } from "../../trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { db, schema } from "@repo/db";
import { eq, and } from "drizzle-orm";

export const editWorkspace = createTRPCRouter({
  changeWorkspaceName: protectedProcedure
    .input(
      z.object({
        workspaceId: z.string(),
        updatedName: z.string(),
        // slug: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const res = await db
        .update(schema.Project)
        .set({
          name: input.updatedName,
        })
        .where(eq(schema.Project.slug, input.workspaceId))
        .returning();

      return res;
    }),

  changeWorkspaceSlug: protectedProcedure
    .input(
      z.object({
        workspaceId: z.string(),
        updatedSlug: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      try {
       const res = await db
          .update(schema.Project)
          .set({
            slug: input.updatedSlug,
          })
          .where(eq(schema.Project.slug, input.workspaceId))
          .returning();
      
        return res;
      } catch (error) {
        // @ts-ignore
        if (error?.code === "P2002") {
          throw new TRPCError({
            message: "Slug already in use",
            code: "BAD_REQUEST",
          });
        }
      }
    }),
});
