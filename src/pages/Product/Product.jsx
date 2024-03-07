import React from "react";
import { useParams, useLocation } from "react-router-dom";
import styles from "./Product.module.css";

const Product = () => {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state;

  return (
    <div className={styles["product-container"]}>
      <div className={styles["product-image"]}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles["product-details"]}>
        <h2>{product.title}</h2>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default Product;
