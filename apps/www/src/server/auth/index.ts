import NextAuth, { type NextAuthConfig } from "next-auth";
import authConfig from "./config";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { schema, db } from "@repo/db";

const additionalConfig = {
  providers: [...authConfig.providers],
  secret: process.env.AUTH_SECRET,
  callbacks: authConfig.callbacks,
} satisfies NextAuthConfig;

export const config = {
  // ...authConfig,
  pages: {
    signIn: "/login",
    signOut: "/register",
  },
  adapter: DrizzleAdapter(db, {
    usersTable: schema.user,
    accountsTable: schema.Account,
    sessionsTable: schema.session,
    verificationTokensTable: schema.verificationTokens,
  }),
  session: { strategy: "jwt" },
  ...additionalConfig,
} satisfies NextAuthConfig;

export const { handlers, signIn, signOut, auth } = NextAuth(config);
