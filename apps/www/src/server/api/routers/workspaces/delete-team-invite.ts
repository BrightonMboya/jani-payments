import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../../trpc";


export const deleteTeamInvite = createTRPCRouter({
  deleteInvite: protectedProcedure
    .input(z.object({
      workspaceSlug: z.string(),
      email: z.string(),
    }))
    .mutation(async ({ ctx, input }) => {
      const workspace = await ctx.db.project.findUnique({
        where: {
          slug: input.workspaceSlug,
        },
        select: {
          id: true,
        },
      });

      return await ctx.db.projectInvite.delete({
        where: {
          email_projectId: {
            email: input.email,
            projectId: workspace?.id!,
          },
        },
      });
    }),
});
