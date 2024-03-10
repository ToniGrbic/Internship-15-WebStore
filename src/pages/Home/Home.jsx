import React from "react";
import styles from "./Home.module.css";
import ProductCard from "../../components/ProductCard";
import LoadingSpinner from "../../components/LoadingSpinner";

const Home = ({ products, loading, error }) => {
  return (
    <>
      {error ? (
        <h2>Something went wrong, try again later...</h2>
      ) : (
        <div className={styles["home-container"]}>
          <h1>Welcome to the home page!</h1>
          <p>
            This is a simple e-commerce site. Search for a product to navigate
            to the products page where you can filter by category.
          </p>
          <h2>All Products:</h2>
          <div className={styles["products-container"]}>
            {loading ? (
              <div>
                <h2 className={styles["loading-text"]}>Loading...</h2>
                <LoadingSpinner />
              </div>
            ) : (
              products.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
