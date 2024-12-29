import { createTRPCRouter, protectedProcedure } from "../../trpc";
import {z} from "zod";
import { TRPCClientError } from "@trpc/client";


export  const getSpecificWorkSpace = createTRPCRouter({
    getSpecificWorkspace: protectedProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ ctx, input }) => {
      const workspace = await ctx.db.project.findUnique({
        where: {
          slug: input.slug,
        },
        // select: {
        //   users: true,
        //   plan: true
        // },
        include: {
          users: true,
          // plan: true
        }
      });
      if (!workspace) {
          throw new TRPCClientError("No Workspace found with this slug")
      }

      return {
        workspace,
        isOwner: workspace?.users && workspace.users[0]?.role === 'owner',
        nextPlan: workspace?.plan
      };
    }),
})