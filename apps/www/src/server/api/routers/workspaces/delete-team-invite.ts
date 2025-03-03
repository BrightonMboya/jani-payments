import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../../trpc";
import { db, schema } from "@repo/db";
import { eq, and } from "drizzle-orm";

export const deleteTeamInvite = createTRPCRouter({
  deleteInvite: protectedProcedure
    .input(
      z.object({
        workspaceSlug: z.string(),
        email: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const workspace = await db.query.Project.findFirst({
        where: eq(schema.Project.slug, input.workspaceSlug),
        columns: {
          id: true,
        },
      });

      return await db
        .delete(schema.projectInvite)
        .where(
          and(
            eq(schema.projectInvite.email, input.email),
            eq(schema.projectInvite.projectId, workspace.id),
          ),
        )
        .returning();
    }),
});
