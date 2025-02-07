import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css"
import PaymentForm from "./components/PaymentForm";
import CheckoutPage from "./components/Payment";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <PaymentForm/> */}
      <CheckoutPage/>
    </>
  );
}

export default App;
