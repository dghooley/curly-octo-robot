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
        <Route path="/cart/:id" element={<CartPage />} />
        <Route path="/login/:id" element={<LoginPage />} />
        <Route path="/product-details/:id" element={<ProductDetailsPage />} />
        <Route path="/product-list/:id" element={<ProductListPage />} />
        <Route path="/register/:id" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
