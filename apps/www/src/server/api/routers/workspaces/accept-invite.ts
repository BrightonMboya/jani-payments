import { TRPCClientError } from "@trpc/client";
import { createTRPCRouter, protectedProcedure } from "../../trpc";
import { z } from "zod";
import { db, schema } from "@repo/db";
import { and, eq } from "drizzle-orm";

export const acceptInvite = createTRPCRouter({
  acceptInvite: protectedProcedure
    .input(
      z.object({
        email: z.string(),
        workspaceSlug: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // const invite = await db.query.projectInvite.findFirst({
      //   where: and(
      //     eq(schema.projectInvite.email, input.email),
      //     eq(schema.projectInvite.)
      //   ),
      //   columns: {
      //     expires: true,
      //   },
      //   with: {
      //     project: {
      //       columns: {
      //         id: true,
      //         slug: true,
      //         plan: true
      //       }
      //     }
      //   }
      // });
      const invite = await db
        .select({
          expires: schema.projectInvite.expires,
          project: {
            id: schema.Project.id,
            slug: schema.Project.slug,
            plan: schema.Project.plan,
          },
        })
        .from(schema.projectInvite)
        .innerJoin(
          schema.Project,
          eq(schema.projectInvite.projectId, schema.Project.id),
        )
        .where(
          and(
            eq(schema.projectInvite.email, input.email),
            eq(schema.Project.slug, input.workspaceSlug),
          ),
        )
        .limit(1)
        .then((results) => results[0] || null);
      if (!invite) {
        throw new TRPCClientError("Invalid Invite");
      }

      if (invite.expires < new Date().toISOString()) {
        throw new TRPCClientError("Invite expired");
      }

      const workspace = invite.project;

      //   maybe in the future check if the workspace has hit the user limit and return an error

      const response = await Promise.all([
        db.insert(schema.ProjectUsers).values({
          projectId: workspace.id,
          userId: ctx.session.user.id,
          id: crypto.randomUUID(),
          updatedAt: new Date().toISOString(),
        }),
        db
          .delete(schema.projectInvite)
          .where(
            and(
              eq(schema.projectInvite.email, input.email),
              eq(schema.projectInvite.projectId, workspace.id),
            ),
          ),
        // ctx.db.projectUsers.create({
        //   data: {
        //     projectId: workspace.id,
        //     userId: ctx.session?.user?.id!,
        //     role: "member",
        //   },
        // }),

        // ctx.db.projectInvite.delete({
        //   where: {
        //     email_projectId: {
        //       email: input.email,
        //       projectId: workspace.id,
        //     },
        //   },
        // }),
      ]);
      return response;
    }),
});
