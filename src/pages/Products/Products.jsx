import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import styles from "./Products.module.css";

const Products = ({ products }) => {
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const filterProducts = (products, searchTerm) => {
    return products.filter((product) => {
      return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  };

  useEffect(() => {
    const searchTerm = location.state.query;
    setSearchParams({ search: searchTerm });

    const filteredProducts = filterProducts(products, searchTerm);
    setFilteredProducts(filteredProducts);
  }, []);

  return (
    <div className={styles["products-container"]}>
      {filteredProducts.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Products;
