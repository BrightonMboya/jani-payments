import { createTRPCRouter, protectedProcedure } from "../../trpc";



export const fetchAllWorkspaces = createTRPCRouter({
     fetchAllWorkspaces: protectedProcedure
    .query(async ({ ctx }) => {

      const workspaces = await ctx.db.project.findMany({
        where: {
          users: {
            some: {
              userId: ctx?.session?.user.id,
            },
          },
        },
        include: {
          users: {
            where: {
              userId: ctx?.session?.user.id,
            },
            select: {
              role: true,
            },
          },
        },

      });


      // const formattedWorkspaces = workspaces.map((project) =>
      //   WorkspaceSchema.parse({ ...project, id: `ws_${project.id}` })
      // );

      const freeWorkspaces = workspaces?.filter(
        (workspace: { plan: string; users: any[]; }) =>
          workspace.plan === "free" &&
          workspace?.users &&
          workspace?.users[0]!.role === "owner",
      );

      return {
        workspaces,
        freeWorkspaces,
        exceedingFreeWorkspaces: freeWorkspaces && freeWorkspaces.length >= 2,
      };
    }),
})