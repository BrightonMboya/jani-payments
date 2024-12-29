import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure } from "../../trpc";
import { z } from "zod";
import { hashToken } from "~/utils/functions/hashToken";
import { randomBytes } from "crypto";
import { sendEmail } from "~/emails";
import WorkspaceInvite from "~/emails/workspace-invite";

export const invites = createTRPCRouter({
  sendInvite: protectedProcedure
    .input(
      z.object({
        email: z.string(),
        workspaceId: z.string(),
        usersLimit: z.number(),
        workspaceName: z.string(),
        workspaceSlug: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const [alreadyInWorkspace, workspaceUserCount, workspaceInviteCount] =
        await Promise.all([
          ctx.db.projectUsers.findFirst({
            where: {
              projectId: input.workspaceId,
              user: {
                email: input.email,
              },
            },
          }),
          ctx.db.projectUsers.count({
            where: {
              projectId: input.workspaceId,
            },
          }),
          ctx.db.projectInvite.count({
            where: {
              projectId: input.workspaceId,
            },
          }),
        ]);

      if (alreadyInWorkspace) {
        throw new TRPCError({
          message: "User already exists in this workspace.",
          code: "BAD_REQUEST",
        });
      }

      //   if (workspaceUserCount + workspaceInviteCount >= input.usersLimit) {
      //     throw an error here
      //   }

      //   generating a token the same as next-auth
      const token = randomBytes(32).toString("hex");
      const TWO_WEEKS_IN_SECONDS = 60 * 60 * 24 * 14;
      const expires = new Date(Date.now() + TWO_WEEKS_IN_SECONDS * 1000);

      // create a workspace invite record and a verification request token that lasts for a week
      // here we use a try catch to account for the case where the user has already been invited
      // for which prisma.projectInvite.create() will throw a unique constraint error

      try {
        await ctx.db.projectInvite.create({
          data: {
            email: input.email,
            expires,
            projectId: input.workspaceId,
          },
        });
      } catch (error) {
        if (error?.code === "P2002") {
          throw new TRPCError({
            message: "User has already beeen invited to this workspace",
            code: "BAD_REQUEST",
          });
        }
      }

      await ctx.db.verificationToken.create({
        data: {
          identifier: input.email,
          token: await hashToken(token, { secret: true }),
          expires,
        },
      });

      const params = new URLSearchParams({
        callbackUrl:
          // `${process.env.NEXTAUTH_URL}/${input.workspaceSlug}?invite=true`,
          `${process.env.NEXTAUTH_URL}/?invite=true`,
        email: input.email,
        token,
        workspaceSlug: input.workspaceSlug,
      });

      const url =
        // `${process.env.NEXTAUTH_URL}/api/auth/callback/postmark?${params}`;
        `${process.env.NEXTAUTH_URL}/invites?email=${input.email}&workspaceSlug=${input.workspaceSlug}`;

      return await sendEmail({
        subject:
          `You've been invited to join a workspace on ${process.env.NEXT_PUBLIC_APP_NAME}`,
        email: input.email,
        react: WorkspaceInvite({
          email: input.email,
          appName: process.env.NEXT_PUBLIC_APP_NAME as string,
          url,
          workspaceName: input.workspaceName,
          workspaceUser: ctx?.session?.user?.name || null,
          workspaceUserEmail: ctx?.session?.user?.email || null,
        }),
      });
    }),
});
