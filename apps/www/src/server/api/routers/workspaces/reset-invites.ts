import { nanoid } from "~/utils/functions/nanoid";
import { createTRPCRouter, protectedProcedure } from "../../trpc";
import { z } from "zod";

export const resetInviteLink = createTRPCRouter({
  resetInviteLink: protectedProcedure
    .input(
      z.object({
        workspaceSlug: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const workspace = await ctx.db.project.findUnique({
        where: {
          slug: input.workspaceSlug,
        },
        select: {
          id: true,
        },
      });
      const updatedInvite = await ctx.db.project.update({
        where: {
          id: workspace?.id,
        },
        data: {
          inviteCode: nanoid(24),
        },
      });

      return updatedInvite;
    }),
});
