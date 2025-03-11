"use client";
import { QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { getQueryClient } from "~/utils/get-query-client";
import ModalProvider from "~/components/auth/workspaces/workspace-modal-provider";
import { TooltipProvider } from "~/components/ui/InfoTooltip";
import { TRPCReactProvider } from "~/trpc/react";
import type * as React from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <TRPCReactProvider>
        <TooltipProvider>
          <ModalProvider>{children}</ModalProvider>
        </TooltipProvider>
      </TRPCReactProvider>
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
}
