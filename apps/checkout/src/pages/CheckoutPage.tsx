import CardPaymentForm from "../components/CardPaymentForm";
import MomoPaymentForm from "../components/MomoPaymentForm";
import { useState } from "react";
// import { useParams } from "react-router-dom";
import ProductInfo from "../components/ProductInfo";

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
  // const { checkout_id } = useParams();

  return (
    <div className="min-h-screen bg-gray-100 py-8 lg:py-0">
      <div className="mx-auto max-w-4xl lg:max-w-none lg:px-0 px-4 sm:px-6">
        <div className="overflow-hidden bg-white shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:min-h-screen">
            {/* Left side - Product Info */}
            <ProductInfo productInfo={sampleData} />

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
  );
};

export default CheckoutPage;
