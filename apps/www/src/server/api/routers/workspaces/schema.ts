import {z} from "zod";
import { plans, roles } from "~/utils/types";

export const planSchema = z.enum(plans).describe("The plan of the workspace.");
export const roleSchema = z
  .enum(roles)
  .describe("The role of the authenticated user in the workspace.");

export const WorkspaceSchema = z
  .object({
    id: z.string().describe("The unique ID of the workspace."),
    name: z.string().describe("The name of the workspace."),
    slug: z.string().describe("The slug of the workspace."),
    logo: z
      .string()
      .nullable()
      .default(null)
      .describe("The logo of the workspace."),
    // usage: z.number().describe("The usage of the workspace."),
    // usageLimit: z.number().describe("The usage limit of the workspace."),
    // linksUsage: z.number().describe("The links usage of the workspace."),
    // linksLimit: z.number().describe("The links limit of the workspace."),
    // usersLimit: z.number().describe("The users limit of the workspace."),
    plan: planSchema,
    billingCycleStart: z
      .number()
      .describe(
        "The date and time when the billing cycle starts for the workspace.",
      ),
    createdAt: z
      .date()
      .describe("The date and time when the workspace was created."),
    users: z
      .array(
        z.object({
          role: roleSchema,
        }),
      )
      .describe("The role of the authenticated user in the workspace."),

    inviteCode: z
      .string()
      .nullable()
      .describe("The invite code of the workspace."),
    // betaTester: z
    //   .boolean()
    //   .optional()
    //   .describe(
    //     "Whether the workspace is enrolled in the beta testing program.",
    //   ),
  });