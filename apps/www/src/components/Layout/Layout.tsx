import * as React from "react";
import { AppSidebar } from "./app-sidebar";
import { SidebarProvider, SidebarInset } from "../ui/SideBar";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar/>
        <SidebarInset>
            {children}
        </SidebarInset>
        
      </SidebarProvider>
    </>
  );
}
