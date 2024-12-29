import "~/styles/globals.css";
import Layout from "~/components/Layout/Layout";
import { Toaster } from "~/components/ui/Toaster";
import { TooltipProvider } from "~/components/ui/tooltip";
import { SessionProvider } from "next-auth/react";
import { auth } from "~/server/auth";

import { redirect } from "next/navigation";


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (session === null) {
    redirect("/login");
  }
  return (
    <SessionProvider session={session}>
      <TooltipProvider>
        <html lang="en">
          <body className="">
            <Layout>
              <main className="min-h-screen bg-[#FCFCFD] px-5">{children}</main>
              <Toaster />
            </Layout>
          </body>
        </html>
      </TooltipProvider>
    </SessionProvider>
  );
}
