
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import CreateInvoiceForm from "./_components/createInvoice";


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
            <BreadcrumbPage>Invoices</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className="flex h-full flex-col items-center justify-center text-center">
        <div>
          <h3 className="text-xl font-semibold">Create Your first Invoice</h3>
          <p className="w-[90%] pt-3">
            Create Invoice to charge your customers or send Invoice for previous transactions
          </p>
         <CreateInvoiceForm/>
        </div>
      </section>
    </>
  );
};

export default Page;
