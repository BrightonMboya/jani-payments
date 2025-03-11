import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type ReactNode } from "react";
import Providers from "./providers";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
