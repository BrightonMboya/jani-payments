import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../../trpc";
import { roles } from "~/utils/types";
import { db, schema } from "@repo/db";
import { eq, and } from "drizzle-orm";

export const changeTeamMemberRole = createTRPCRouter({
  changeRole: protectedProcedure
    .input(
      z.object({
        role: z.enum(roles),
        userId: z.string(),
        workspaceSlug: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const workspace = await ctx.db.query.Project.findFirst({
        where: eq(schema.Project.slug, input.workspaceSlug),
        columns: {
          id: true,
        },
      });

      return await db
        .update(schema.ProjectUsers)
        .set({
          //@ts-ignore
          role: input.role,
        })
        .where(
          and(
            eq(schema.ProjectUsers.userId, input.userId),
            eq(schema.ProjectUsers.projectId, workspace.id),
          ),
        )
        .returning();
    }),
});
