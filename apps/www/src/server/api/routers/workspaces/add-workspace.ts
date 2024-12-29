import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "../../trpc";
import { z } from "zod";
import { nanoid } from "~/utils/functions/nanoid";
import { waitUntil } from "@vercel/functions";
import { TRPCClientError } from "@trpc/client";
import { WorkspaceSchema } from "./schema";


export const addWorkSpace = createTRPCRouter({
  addWorkSpace: publicProcedure
    .input(z.object({ slug: z.string(), name: z.string() }))
    .mutation(async ({ ctx, input }) => {
      // try {
      // check if the slug exists
      // if (
      //   // @ts-ignore
      //   (await isReservedKey(input.slug)) || DEFAULT_REDIRECTS[input.slug]
      // ) {
      //    throw new TRPCClientError("Project already in use")
      // }
      const project = await ctx.db.project.findUnique({
        where: {
          slug: input.slug,
        },
        select: {
          slug: true,
        },
      });
      if (project) {
        throw new TRPCClientError("Project already in use")
      } else {
        // // lets check if the person can create more than one workspaces
        // const freeWorkspaces = await ctx.db.project.count({
        //   where: {
        //     plan: "free",
        //     users: {
        //       some: {
        //         userId: ctx?.user?.id,
        //         role: "owner",
        //       },
        //     },
        //   },
        // });


        // if (freeWorkspaces >= 1) {
        //   throw new TRPCClientError(
        //     "You can only create up to 1 free workspace. Additional workspaces require a paid plan",
        //   );
        // }



        const workspaceResponse = await ctx.db.project.create({
          data: {
            name: input.name,
            slug: input.slug,
            users: {
              create: {
                userId: ctx.session?.user?.id!,
                role: "owner",
              },
            },
            billingCycleStart: new Date().getDate(),
            inviteCode: nanoid(24),
          },
          include: {
            users: {
              where: {
                userId: ctx?.session?.user?.id,
              },
              select: {
                role: true,
              },
            },
          },
        });
        waitUntil(
          (async () => {
            // @ts-ignore
            if (ctx?.session?.user["defaultWorkspace"] === null) {
              await ctx.db.user.update({
                where: {
                  id: ctx.session.user.id,
                },
                data: {
                  defaultWorkspace: workspaceResponse.slug,
                },
              });
            }
          })(),
        );

        return WorkspaceSchema.parse({
          ...workspaceResponse,
          id: `ws_${workspaceResponse.id}`,
        });
      }
      // } catch (cause) {
      //   console.log(cause);
      // }
    }),
});
