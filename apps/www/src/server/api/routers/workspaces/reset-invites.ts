import { nanoid } from "~/utils/functions/nanoid";
import { createTRPCRouter, protectedProcedure } from "../../trpc";
import { z } from "zod";
import { eq } from "drizzle-orm";
import { schema } from "@repo/db";
export const resetInviteLink = createTRPCRouter({
  resetInviteLink: protectedProcedure
    .input(
      z.object({
        workspaceSlug: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const workspace = await ctx.db.query.Project.findFirst({
        where: eq(schema.Project.slug, input.workspaceSlug),
        columns: {
          id: true,
        },
      });

      return await ctx.db
        .update(schema.Project)
        .set({ inviteCode: nanoid(24) })
        .where(eq(schema.Project.id, workspace?.id))
        .returning();
    }),
});
