import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      setProducts(products);
    })();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Navigation />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={<Products products={products} />}
            />
            <Route
              path="/product/:id"
              element={<Product products={products} />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
