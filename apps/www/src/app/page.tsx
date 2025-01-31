"use client";

import OrderSummary from "./_components/OrderSummary";
import PaymentForm from "./_components/PaymentForm";

function App() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto">
        <div className="grid  md:grid-cols-5">
          <OrderSummary />
          <PaymentForm />
        </div>
      </div>
    </div>
  );
}

export default App;
