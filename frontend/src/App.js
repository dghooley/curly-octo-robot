import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import ProductDetailsPage from "./pages/ProductDetails";
import ProductListPage from "./pages/ProductListPage";
import RegisterPage from "./pages/RegisterPage";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product-details" element={<ProductDetailsPage />} />
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
