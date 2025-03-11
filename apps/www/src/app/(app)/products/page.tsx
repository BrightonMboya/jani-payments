// "use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import AddProductForm from "./_components/AddProduct";
import { HydrationBoundary, dehydrate, useQuery } from "@tanstack/react-query";
import { getQueryClient } from "~/utils/get-query-client";
import { getBillingInstance } from "~/utils/billing";
import EmptyProducts from "./EmptyProducts";
import ProductsTable from "./_components/ProductsTable";
import { Suspense } from "react";
import LoadingSpinner from "~/components/ui/icons/LoadingSpinner";

const Page = async () => {
  const queryClient = getQueryClient();
  const products = await queryClient.fetchQuery({
    queryKey: ["fetchPrices"],
    queryFn: async () => {
      const billing = await getBillingInstance();
      const res = await billing.products.list();
      return res;
    },
  });

  // const {data, isPending, error} = useQuery({
  //   queryKey: ["fetchPrices"],
  //   queryFn: async () => {
  //     const billing = await getBillingInstance();
  //     const res = await billing.products.list();
  //     console.log(res, ">>>>>")
  //     return res;
  //   },
  // });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
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
        <Suspense fallback={<LoadingSpinner />}>
          {products.length === 0 && products !== undefined ? (
            <EmptyProducts />
          ) : (
            <ProductsTable />
          )}
        </Suspense>
      </HydrationBoundary>
    </>
  );
};

export default Page;
