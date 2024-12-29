import { TRPCClientError } from "@trpc/client";
import { createTRPCRouter, protectedProcedure } from "../../trpc";
import { z } from "zod";

export const acceptInvite = createTRPCRouter({
  acceptInvite: protectedProcedure
    .input(
      z.object({
        email: z.string(),
        workspaceSlug: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const invite = await ctx.db.projectInvite.findFirst({
        where: {
          email: input.email,
          project: {
            slug: input.workspaceSlug,
          },
        },
        select: {
          expires: true,
          project: {
            select: {
              id: true,
              slug: true,
              plan: true,
              //   _count: {
              //     select: {
              //       users: {
              //         where: {
              //           user: {
              //             isMachine: false,
              //           },
              //         },
              //       },
              //     },
              //   },
            },
          },
        },
      });
      if (!invite) {
        throw new TRPCClientError("Invalid Invite");
      }

      if (invite.expires < new Date()) {
        throw new TRPCClientError("Invite expired");
      }

      const workspace = invite.project;

      //   maybe in the future check if the workspace has hit the user limit and return an error

      const response = await Promise.all([
        ctx.db.projectUsers.create({
          data: {
            projectId: workspace.id,
            userId: ctx.session?.user?.id!,
            role: "member",
          },
        }),

        ctx.db.projectInvite.delete({
          where: {
            email_projectId: {
              email: input.email,
              projectId: workspace.id,
            },
          },
        }),
      ]);
      return response;
    }),
});
