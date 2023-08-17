import MainLayout from "./layouts/MainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cars from "./pages/Cars";
import Motorcycles from "./pages/Motorcycles";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <Router>
      <CartContextProvider>
        <Routes>
          <Route path="/" element={<Cars />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/motorcycles" element={<Motorcycles />} />
        </Routes>
      </CartContextProvider>
    </Router>
  );
}

export default App;
