import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import Button from "~/components/ui/button";

const Page = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="#">Store</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>Licences</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className="flex h-full flex-col items-center justify-center text-center">
        <div>
          <h3 className="text-xl font-semibold">Set up license keys</h3>
          <p className="w-[90%] pt-3">
            Enable license keys when creating your products to control who may
            have access to them
          </p>
          <Button className="mt-5">New Discount</Button>
        </div>
      </section>
    </>
  );
};

export default Page;
