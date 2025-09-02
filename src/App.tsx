import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import ProductsPage from "@/pages/products";
import CartPage from "@/pages/cart";

// Added for commit history simulation (Day 3)
function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ProductsPage />} path="/products" />
      <Route element={<CartPage />} path="/cart" />
    </Routes>
  );
}

export default App;
