import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../../trpc";
import { roles } from "~/utils/types";

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
      const workspace = await ctx.db.project.findUnique({
        where: {
          slug: input.workspaceSlug,
        },
        select: {
          id: true,
        },
      });
      return await ctx.db.projectUsers.update({
        data: {
          role: input.role,
        },
        where: {
          userId_projectId: {
            userId: input.userId,
            projectId: workspace?.id!,
          },
        },
      });
    }),
});
