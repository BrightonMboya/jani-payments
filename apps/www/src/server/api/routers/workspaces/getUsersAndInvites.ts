import { createTRPCRouter, protectedProcedure } from "../../trpc";
import { z } from "zod";
import { schema } from "@repo/db";
import { eq } from "drizzle-orm";

export const getUsersAndInvites = createTRPCRouter({
  getUsersAndInvites: protectedProcedure
    .input(
      z.object({
        projectId: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      // gets invites for a specific workspace
      const invites = await ctx.db.query.projectInvite.findMany({
        where: eq(schema.projectInvite.projectId, input.projectId),
        columns: {
          email: true,
          createdAt: true,
        },
      });

      //   gets users for a specific worksapce
      const users = await ctx.db.query.ProjectUsers.findMany({
        where: eq(schema.projectInvite.projectId, input.projectId),
        columns: {
          role: true,
          createdAt: true,
        },
        with: {
          user: {
            columns: {
              id: true,
              name: true,
              email: true,
              image: true,
            },
          },
        },
      });

      return { users, invites };
    }),
});
