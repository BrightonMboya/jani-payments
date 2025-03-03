import { createTRPCRouter, protectedProcedure } from "../../trpc";
import { z } from "zod";
import { TRPCClientError } from "@trpc/client";
import { schema } from "@repo/db";
import { eq } from "drizzle-orm";

export const getSpecificWorkSpace = createTRPCRouter({
  getSpecificWorkspace: protectedProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ ctx, input }) => {
      const workspace = await ctx.db.query.Project.findFirst({
        where: eq(schema.Project.slug, input.slug),
        with: {
          users: true,
        },
      });
      if (!workspace) {
        throw new TRPCClientError("No Workspace found with this slug");
      }

      return {
        workspace,
        isOwner: workspace?.users && workspace.users[0]?.role === "owner",
        nextPlan: workspace?.plan,
      };
    }),
});
