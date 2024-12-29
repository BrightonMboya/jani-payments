"use client";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import Button from "~/components/ui/button";
import ChooseCustomer from "./choose_customer";
import ChooseBusiness from "./choose_business";
import ChooseAddress from "./choose_address";
import ChooseCurrency from "./choose_currency";
import PaymentMethodSelector from "./payment_method_selector";
import InvoiceLineItems from "./invoice_line_items";

export default function CreateInvoiceForm() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="mt-5">Create Invoice</Button>
      </SheetTrigger>
      <SheetContent className="min-w-[60%] overflow-auto">
        <>
          <section className="mt-5 rounded-lg border-[1px] p-5 shadow-sm">
            <section className="flex space-x-5">
              <div>
                <p className="text-lg font-medium">Customer</p>
                <ChooseCustomer />
              </div>

              <div>
                <p className="text-lg font-medium">Business</p>
                <ChooseBusiness />
              </div>
            </section>

            <section className="mt-10 flex space-x-5">
              <div>
                <p className="text-lg font-medium">Address</p>
                <ChooseAddress />
              </div>

              <div>
                <p className="text-lg font-medium">Currency</p>
                <ChooseCurrency />
              </div>
            </section>
          </section>
          <section className="mt-10 rounded-lg border-[1px] p-5 shadow-sm">
            <InvoiceLineItems />
          </section>
          <section className="mt-10 rounded-lg border-[1px] p-5 shadow-sm">
            <PaymentMethodSelector />
          </section>
        </>
      </SheetContent>
    </Sheet>
  );
}
