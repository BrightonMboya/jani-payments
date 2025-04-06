import { eq, and } from "drizzle-orm";
import { createTRPCRouter, protectedProcedure } from "../../trpc";
import { db, schema } from "@repo/db";

export const fetchAllWorkspaces = createTRPCRouter({
  fetchAllWorkspaces: protectedProcedure.query(async ({ ctx }) => {
    // const workspacess = await db.query.Project.findMany({
    //   where: eq(schema.Project.)
    // })

   const workspaces = await db
     .select({
       id: schema.Project.id,
       name: schema.Project.name,
       userRole: schema.ProjectUsers.role,
       plan: schema.Project.plan,
       slug: schema.Project.slug,
      //  users: schema.user
     })
     .from(schema.Project)
     .innerJoin(
       schema.ProjectUsers,
       and(
         eq(schema.ProjectUsers.projectId, schema.Project.id),
         eq(schema.ProjectUsers.userId, ctx.session?.user.id!),
       ),
     );


    // const workspacess = await ctx.db.project.findMany({
    //   where: {
    //     users: {
    //       some: {
    //         userId: ctx?.session?.user.id,
    //       },
    //     },
    //   },
    //   include: {
    //     users: {
    //       where: {
    //         userId: ctx?.session?.user.id,
    //       },
    //       select: {
    //         role: true,
    //       },
    //     },
    //   },
    // });

    // const formattedWorkspaces = workspaces.map((project) =>
    //   WorkspaceSchema.parse({ ...project, id: `ws_${project.id}` })
    // );

    // const freeWorkspaces = workspaces?.filter(
    //   (workspace: { plan: string; users: any[] }) =>
    //     workspace.plan === "free" &&
    //     workspace?.users &&
    //     workspace?.users[0]!.role === "owner",
    // );


    return {
      workspaces,
      // freeWorkspaces,
      // exceedingFreeWorkspaces: freeWorkspaces && freeWorkspaces.length >= 2,
    };
  }),
});
