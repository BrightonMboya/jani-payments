import GitHub from "next-auth/providers/github";
import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import { env } from "~/env";
import { JWT } from "next-auth/jwt";
import { User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { db, schema } from "@repo/db";
import { eq } from "drizzle-orm";

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
        const userExists = await db.query.user.findFirst({
          where: eq(schema.user.email, user.email),
          columns: {
            id: true,
            name: true,
            image: true,
          },
        });
        if (!userExists || !profile) {
          return true;
        }
        // if the user already exists via email,
        // update the user with their name and image
        if (userExists && profile) {
          const profilePic =
            profile[account.provider === "google" ? "picture" : "avatar_url"];
        }
      }
      return true;
    },
    jwt: async ({
      token,
      user,
      trigger,
    }: {
      token: JWT;
      user: User | AdapterUser;
      trigger?: "signIn" | "update" | "signUp";
    }) => {
      if (user) {
        token.user = user;
      }

      // refresh the user's data if they update their name / email
      if (trigger === "update") {
        const refreshedUser = await db.query.user.findFirst({
          where: eq(schema.user.id, token.sub),
        });
        if (refreshedUser) {
          token.user = refreshedUser;
        } else {
          return {};
        }
      }

      return token;
    },
    session: async ({ session, token, user }) => {
      session.user = {
        id: token.sub,
        // @ts-ignore
        ...(token || session).user,
      };
      // const scope = Sentry.getCurrentScope()

      // scope.setUser({
      //   id: user.id,
      //   email: user.email,
      // })
      return session;
    },
  },
} satisfies NextAuthConfig;
