import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import AddCustomerForm from "./_components/AddCustomerForm";
// import { billing } from "~/utils/billing";
import { getBillingInstance } from "~/utils/billing";

const Page = async () => {
  // const billing = await getBillingInstance();
  // const res = await billing.prices.list();

  // console.log(res, "this is the res");

  return (
    <>
      {/* <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="#">Store</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>Customers</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb> */}

      <section className="flex h-full flex-col items-center justify-center text-center">
        <div>
          <h3 className="text-xl font-semibold">Get your first customer</h3>
          <p className="w-[90%] pt-3">
            Create and share products to start making sales. Your customers will
            be displayed here.
          </p>
          <AddCustomerForm />
        </div>
      </section>
    </>
  );
};

export default Page;
