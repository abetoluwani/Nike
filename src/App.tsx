import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import ProductsPage from "@/pages/products";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ProductsPage />} path="/products" />
    </Routes>
  );
}

export default App;
