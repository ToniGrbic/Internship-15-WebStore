import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles["home-container"]}>
      <h1>Welcome to the home page!</h1>
      <p>
        This is a simple e-commerce site. Search for a product to navigate to
        the products page and see the available products.
      </p>
    </div>
  );
};

export default Home;
