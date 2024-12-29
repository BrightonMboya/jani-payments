"use client";

import * as React from "react";
import {
  Command,
  LifeBuoy,
  CircleUser,
  Send,
  SquareTerminal,
  Building2,
  FileText,
  PiggyBank,
  Bug,
} from "lucide-react";

import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";
import { NavUser } from "./nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/SideBar";



const data = {
  items: [
    {
      title: "Getting Started",
      icon: SquareTerminal,
      url: "#"
    },
    {
      title: "Transactions",
      icon: PiggyBank,
      url: "/transactions"
    },
    {
      title: "Invoices",
      icon: FileText,
      url: "/invoices"
    },
    {
      title: "Customers",
      icon: CircleUser,
      url: "/customers"
    },
  ],
  navMain: [
    {
      title: "Store",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Products",
          url: "/products",
        },
        {
          title: "Discounts",
          url: "/discounts",
        },
      ],
    },
    {
      title: "Business Account",
      url: "#",
      icon: Building2,
      items: [
        {
          title: "Currencies",
          url: "/currencies"
        },
        {
          title: "Account Settings",
          url: "/settings",
        },
        
      ]
    },
    {
      title: "Developer Tools",
      url: "#",
      icon: Bug,
      items: [
        {
          title: "Authentication",
          url: "/authentication"
        }
      ]
    }
  
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {  
 
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {data.items.map((item, key) => (
            <SidebarMenuItem key={key}>
              <SidebarMenuButton asChild>
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
