import { useState } from "react";
import Input from "./ui/Input";
import { Label } from "./ui/label";
import CardPaymentForm from "./CardPaymentForm";


// Sample data structure
const sampleData = {
  productName: "Starter Subscription",
  price: 99.0,
  monthlyPrice: 8.25,
  description: "100 photo credits + 1 AI model per month.",
  logoUrl: "/api/placeholder/40/40",
};

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("card"); // 'card' or 'mobile'

  return (
    <div className="min-h-screen bg-gray-100 py-8 lg:py-0">
      <div className="mx-auto max-w-4xl lg:max-w-none lg:px-0 px-4 sm:px-6">
        <div className="overflow-hidden rounded-lg bg-white shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:min-h-screen">
            {/* Left side - Product Info */}
            <div className="bg-gray-900 p-8 text-white lg:w-[50%]">
              <div className="mb-8">
                <img
                  src={sampleData.logoUrl}
                  alt="Logo"
                  className="h-10 w-10 rounded-full"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">
                  Subscribe to {sampleData.productName}
                </h2>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">
                    US${sampleData.price}
                  </span>
                  <span className="ml-2 text-gray-400">per year</span>
                </div>
                <p className="text-gray-400">
                  US${sampleData.monthlyPrice} / month billed annually
                </p>
                <p className="text-gray-400">{sampleData.description}</p>
              </div>
            </div>

            {/* Right side - Payment Form */}
            <div className="p-8 lg:w-[50%]">
              {/* Payment Method Toggle */}
              <div className="mb-6">
                <div className="mb-4 flex space-x-4">
                  <button
                    onClick={() => setPaymentMethod("card")}
                    className={`flex items-center rounded-md px-4 py-2 ${
                      paymentMethod === "card"
                        ? "bg-blue-50 text-blue-600"
                        : "bg-gray-50"
                    }`}>
                    {/* <CreditCard className="mr-2 h-5 w-5" /> */}
                    Card
                  </button>
                  <button
                    onClick={() => setPaymentMethod("mobile")}
                    className={`flex items-center rounded-md px-4 py-2 ${
                      paymentMethod === "mobile"
                        ? "bg-blue-50 text-blue-600"
                        : "bg-gray-50"
                    }`}>
                    {/* <Phone className="mr-2 h-5 w-5" /> */}
                    Mobile Money
                  </button>
                </div>
              </div>

              {/* Payment Forms */}
              {paymentMethod === "card" ? (
                <CardPaymentForm/>
              ) : (
                <form className="space-y-4">
                  <div>
                    <Label className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </Label>
                    <Input
                      type="tel"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="+254 700 000000"
                    />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium text-gray-700">
                      Mobile Money Provider
                    </Label>
                    <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                      <option>M-PESA</option>
                      <option>Airtel Money</option>
                      <option>MTN Mobile Money</option>
                    </select>
                  </div>
                </form>
              )}

              {/* Save Information Checkbox */}
              <div className="mt-6">
                <Label className="flex items-start">
                  <Input
                    type="checkbox"
                    className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    Securely save my information for 1-click checkout
                  </span>
                </Label>
              </div>


             

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
  );
};

export default CheckoutPage;
