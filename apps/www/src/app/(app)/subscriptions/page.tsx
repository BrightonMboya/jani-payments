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
            <BreadcrumbPage>Subscriptions</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className="flex h-full flex-col items-center justify-center text-center">
        <div>
          <h3 className="text-xl font-semibold">Earn recurring revenue</h3>
          <p className="w-[90%] pt-3">
            Subscriptions allow you to grow recurring revenue by charging
            subscribers on a regular basisoduct to start making sales. Your
            orders will be displayed here.
          </p>
          <Button className="mt-5">New Subscription</Button>
        </div>
      </section>
    </>
  );
};

export default Page;
