import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { env } from "~/env";
import { JWT } from "next-auth/jwt";
// import { User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { db, schema } from "@repo/db";
import { eq } from "drizzle-orm";
import { NextAuthConfig, User as NextAuthUser } from "next-auth";
import { cookies } from "next/headers";

// Extend the User interface with organization_Id
declare module "next-auth" {
  interface User {
    organization_Id?: string;
  }

  interface Session {
    user: User;
  }

  interface JWT {
    user?: User;
  }
}

// import { serialize } from "cookie"; // For setting cookies

export default {
  providers: [
    GitHub({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    Google({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
      checks: ["none"],
    }),
  ],
  callbacks: {
    signIn: async ({ user, account, profile }) => {
      if (account?.provider === "google" || account?.provider === "github") {
        const existingUser = await db.query.user.findFirst({
          where: eq(schema.user.email, user.email!),
          columns: { id: true },
        });

        if (existingUser) {
          // Get the user's first project (organization)
          const userProject = await db.query.ProjectUsers.findFirst({
            where: eq(schema.ProjectUsers.userId, existingUser.id),
            columns: { projectId: true },
          });

          if (userProject) {
            const cookieStore = await cookies();
            cookieStore.set("organization_Id", userProject.projectId);
            user.organization_Id = userProject.projectId; // Store organization ID
          }
        }
      }
      return true;
    },
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user;
      }

      // Ensure organization_Id is stored in JWT
      if (!token.user?.organization_Id) {
        const userProject = await db.query.ProjectUsers.findFirst({
          where: eq(schema.ProjectUsers.userId, token.sub!),
          columns: { projectId: true },
        });

        if (userProject) {
          // Cast token.user to include organization_Id
          token.user = {
            ...(token.user || {}),
            organization_Id: userProject.projectId,
          };
        }
      }

      return token;
    },
    session: async ({ session, token }) => {
      session.user = {
        id: token.sub,
        ...(token.user || {}),
      };

      // Attach organization_Id to session
      session.user.organization_Id = token.user?.organization_Id;

      return session;
    },
  },
  events: {
    signOut: async ({}) => {
      const cookieStore = await cookies();
    },
  },
} satisfies NextAuthConfig;
