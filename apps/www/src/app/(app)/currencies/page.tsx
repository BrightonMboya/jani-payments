import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import ChangeCurrencies from "./_components/changeCurrencies";

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
            <BreadcrumbPage>Currencies</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* <section className="flex h-full flex-col items-center justify-center text-center">
        <div>
          <h3 className="text-xl font-semibold">Create Your first Invoice</h3>
          <p className="w-[90%] pt-3">
            Create Invoice to charge your customers or send Invoice for previous
            transactions
          </p>
        </div>
      </section> */}

      <section className="flex items-center justify-center pt-[50px]">
        <div className="w-full max-w-2xl">
          <div className="pt-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-800">
                  Balance currency
                </h2>
                <ChangeCurrencies />
              </div>

              <div className="space-y-1">
                <p className="text-lg text-gray-700">
                  This is the currency that your account balance will be held
                  in.
                </p>
                <p className="text-lg text-gray-700">
                  To limit fees, we recommend selecting the same currency as
                  your bank account, where possible.
                </p>
              </div>

              <div className="flex cursor-pointer items-center space-x-3 rounded-lg border p-4 hover:bg-gray-50">
                <div className="rounded-full bg-gray-100 p-2">
                  <span className="text-xl">$</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-gray-900">USD</span>
                  <span className="text-gray-600">US Dollar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
