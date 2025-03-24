import { createFileRoute } from "@tanstack/react-router";
import CardPaymentForm from "../components/CardPaymentForm";
import MomoPaymentForm from "../components/MomoPaymentForm";
import { useState } from "react";
import InvalidCheckout from "~/components/InvalidCheckoutId";
import ProductInfo from "../components/ProductInfo";
import { db, schema } from "@repo/db";
import { eq } from "drizzle-orm";
import { createServerFn } from "@tanstack/react-start";

const createSegmentFn = createServerFn().handler(async ({ data }) => {
  console.log("I am getting triggered");
  console.log(data);

  return "Hello Boo";
});

export const Route = createFileRoute("/")({
  component: CheckoutPage,
  loaderDeps: ({ search: { checkout_Id } }) => ({ checkout_Id }),
  loader: async ({ deps: { checkout_Id } }) => {
    const checkoutSession = await db.query.Checkouts.findFirst({
      where: eq(schema.Checkouts.id, checkout_Id),
      with: {
        checkoutItems: {
          with: {
            price: {
              columns: {
                name: true,
                currencyCode: true,
                amount: true,
              },
              with: {
                Products: {
                  columns: {
                    name: true,
                    description: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    return checkoutSession;
  },
});

function CheckoutPage() {
  const res = Route.useLoaderData();
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!res) {
    return <InvalidCheckout />;
  }

  const onSubmit = async (values) => {
    try {
      setIsSubmitting(true);
      console.log("I am getting submitted")

      const segment = await createSegmentFn({
        data: {
          data: {
            title: values.title,
            content: values.content,
            slug: values.title.toLowerCase().replace(/ /g, "-"),
            moduleId: values.moduleId,
            length: values.length || undefined,
          },
        },
      });
    } catch (error) {
      console.error("Failed to create segment:", error);
      // TODO: Show error toast
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      {res && (
        <div className="min-h-screen bg-gray-100 py-8 lg:py-0">
          <div className="mx-auto max-w-4xl lg:max-w-none lg:px-0 px-4 sm:px-6">
            <div className="overflow-hidden bg-white shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:min-h-screen">
                {/* Left side - Product Info */}
                {res.checkoutItems.map((item) => (
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
                      <button className="flex items-center rounded-md px-4 py-2 bg-blue-50 text-blue-600">
                        {` Paying with Card ${res.payment_provider}`}
                      </button>
                    </div>
                  </div>

                  {/* Payment Forms */}
                  {res?.payment_method === "CARD" ? (
                    <CardPaymentForm />
                  ) : (
                    <MomoPaymentForm onSubmit={onSubmit} />
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
