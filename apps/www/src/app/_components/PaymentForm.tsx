import React, { useState } from "react";
import { CreditCard, Smartphone, Lock, ChevronRight } from "lucide-react";

type PaymentMethod = "card" | "mobile";
export default function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate payment processing
    setTimeout(() => setLoading(false), 2000);
  };
  return (
    <div className="md:col-span-3 md:min-h-screen">
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <h1 className="mb-6 text-2xl font-semibold text-gray-800">
          Payment Method
        </h1>

        <div className="mb-6 grid grid-cols-2 gap-4">
          <button
            className={`flex items-center justify-center gap-2 rounded-lg border p-4 transition-colors ${
              paymentMethod === "card"
                ? "border-blue-500 bg-blue-50 text-blue-600"
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => setPaymentMethod("card")}
          >
            <CreditCard className="h-5 w-5" />
            <span>Card</span>
          </button>
          <button
            className={`flex items-center justify-center gap-2 rounded-lg border p-4 transition-colors ${
              paymentMethod === "mobile"
                ? "border-blue-500 bg-blue-50 text-blue-600"
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => setPaymentMethod("mobile")}
          >
            <Smartphone className="h-5 w-5" />
            <span>Mobile Money</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {paymentMethod === "card" ? (
            <>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="4242 4242 4242 4242"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    CVC
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </>
          ) : (
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                type="tel"
                placeholder="+1234567890"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
            ) : (
              <>
                Pay $103.99
                <ChevronRight className="h-4 w-4" />
              </>
            )}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          Your payment is secured by industry-standard encryption
        </p>
      </div>
    </div>
  );
}
