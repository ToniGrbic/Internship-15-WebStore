import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";

const Products = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const filterProducts = (products, searchTerm) => {
    return products.filter((product) => {
      return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  };
  useEffect(() => {
    (async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      const searchTerm = location.state.query;
      setSearchParams({ search: searchTerm });

      const filteredProducts = filterProducts(products, searchTerm);
      console.log(filteredProducts);
      setProducts(filteredProducts);
    })();
  }, []);
  return <div>{JSON.stringify(products)}</div>;
};

export default Products;
