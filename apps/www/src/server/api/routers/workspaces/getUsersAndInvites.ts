import { createTRPCRouter, protectedProcedure } from "../../trpc";
import { z } from "zod";


export const getUsersAndInvites = createTRPCRouter({
  getUsersAndInvites: protectedProcedure
    .input(z.object({
      projectId: z.string(),
    }))
    .query(async ({ input, ctx }) => {
      // gets invites for a specific workspace
      const invites = await ctx.db.projectInvite.findMany({
        where: {
          projectId: input.projectId,
        },
        select: {
          email: true,
          createdAt: true,
        },
      });

      //   gets users for a specific worksapce
      const users = await ctx.db.projectUsers.findMany({
        where: {
          projectId: input.projectId,
        },
        select: {
          role: true,
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              image: true,
            },
          },
          createdAt: true,
        },
      });

      return { users, invites };
    }),
});
