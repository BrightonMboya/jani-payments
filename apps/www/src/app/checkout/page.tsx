"use client";
import ProductInfo from "./_components/ProductInfo";
import InvalidCheckout from "./_components/InvalidCheckoutId";
import MomoPaymentForm from "./_components/MomoPaymentForm";
import CardPaymentForm from "./_components/CardPaymentForm";
import { useSearchParams } from "next/navigation";
import { api } from "~/trpc/react";

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const checkoutId = searchParams.get("checkout_Id");
  const { data } = api.checkouts.fetchCheckoutSession.useQuery({
    checkout_Id: checkoutId!,
  });



  if (!data || data.expires_at.getDate() > Date.now()) {
    return <InvalidCheckout />;
  }

  return (
    <>
      {data && (
        <div className="min-h-screen bg-gray-100 py-8 lg:py-0">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-none lg:px-0">
            <div className="overflow-hidden bg-white shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:min-h-screen">
                {/* Left side - Product Info */}
                {data.checkoutItems.map((item) => (
                  <ProductInfo
                    price={item.price.amount}
                    description={item.price.Products.description}
                    productName={item.price.Products.name}
                    currency={item.price.currencyCode}
                  />
                ))}

                {/* Right side - Payment Form */}
                <div className="p-8 lg:w-[50%]">
                  {/* Payment Method Toggle */}
                  <div className="mb-6">
                    <div className="mb-4 flex space-x-4">
                      <button className="flex items-center rounded-md bg-blue-50 px-4 py-2 text-blue-600">
                        {` Paying with ${data.payment_provider}`}
                      </button>
                    </div>
                  </div>

                  {/* Payment Forms */}
                  {data?.payment_method === "CARD" ? (
                    <CardPaymentForm />
                  ) : (
                    <MomoPaymentForm />
                  )}

                  {/* Terms */}
                  <p className="mt-6 text-center text-xs text-gray-600">
                    By confirming your subscription, you allow us to charge your
                    card for future payments in accordance with our terms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
