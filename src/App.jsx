import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");

  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const products = await response.json();
        setProducts(products);

        const categories = products.reduce((acc, product) => {
          if (!acc.includes(product.category)) acc.push(product.category);
          return acc;
        }, []);

        setCategories(["All", ...categories]);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    })();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Navigation setSearch={setSearch} />}>
            <Route
              path="/"
              element={
                <Home products={products} loading={loading} error={error} />
              }
            />
            <Route
              path="/products"
              element={
                <Products
                  products={products}
                  categories={categories}
                  search={search}
                />
              }
            />
            <Route
              path="/product/:productId"
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
