import React from "react";
import { useState, useEffect } from "react";
import { Outlet, useSearchParams, useNavigate } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/products", { state: { query: search } });
  };
  return (
    <>
      <div className={styles.navigation}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
