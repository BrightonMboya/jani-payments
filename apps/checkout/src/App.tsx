import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/:checkout_id" element={<CheckoutPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
