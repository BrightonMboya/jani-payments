
import { createTRPCRouter, protectedProcedure } from "../../trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

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
      const res = await ctx.db.project.update({
        where: {
          slug: input.workspaceId,
        },
        data: {
          name: input.updatedName,
          //   slug: input.slug,
        },
        include: {
          users: true,
        },
      });
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
        const res = await ctx.db.project.update({
          where: {
            slug: input.workspaceId,
          },
          data: {
            slug: input.updatedSlug,
          },
          include: {
            users: true,
          },
        });
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
