import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
import styles from "./Products.module.css";

const Products = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
      setProducts(filteredProducts);
    })();
  }, []);

  const handleProductClick = (e, product) => {
    navigate(`/product/${product.id}`, { state: product });
  };

  return (
    <div className={styles["products-container"]}>
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className={styles["product-card"]}
            onClick={(e) => handleProductClick(e, product)}
          >
            <div className={styles["product-image"]}>
              <img src={product.image} alt={product.title} />
            </div>
            <h4>{product.title}</h4>
            <p>{product.category}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
