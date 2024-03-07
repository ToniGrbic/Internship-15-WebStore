import React, { useState, useEffect } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();

      setProducts(products);
    })();
  }, []);

  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.caregory}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
