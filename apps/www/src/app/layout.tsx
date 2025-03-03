import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { type ReactNode } from "react";
import { TRPCReactProvider } from "~/trpc/react";
import ModalProvider from "~/components/auth/workspaces/workspace-modal-provider";
import { TooltipProvider } from "~/components/ui/InfoTooltip";

// export const metadata: Metadata = {
//   title: "Jani Payments",
//   description: "Sell Digital Products with ease",
//   icons: [{ rel: "icon", url: "/favicon.ico" }],
// };

export default async function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <TooltipProvider>
            <ModalProvider>{children}</ModalProvider>
          </TooltipProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
