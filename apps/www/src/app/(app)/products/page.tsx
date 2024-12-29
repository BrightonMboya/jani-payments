"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import AddProductForm from "./_components/AddProduct";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { env } from "~/env";

const Page = () => {
  const session = useSession();
  const { data, error, isLoading } = useQuery({
    queryKey: ["getProducts"],
    queryFn: async () => {
      const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/products`, {
        method: "GET",
        credentials: "include"
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Return the JSON data
    },
  });
  console.log(data, "[]][]");
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="#">Store</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>Products</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className="flex h-full flex-col items-center justify-center text-center">
        <div>
          <h3 className="text-xl font-semibold">Create Your first Product</h3>
          <p className="w-[90%] pt-3">
            Adding products to your store is easy peasy. Create products in
            minutes and start making sales.
          </p>
          <AddProductForm />
        </div>
      </section>
    </>
  );
};

export default Page;
