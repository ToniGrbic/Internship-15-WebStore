import React, { useState } from "react";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = ({ setSearch }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [_, setSearchParams] = useSearchParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearch(searchTerm);
    navigate("/products");
    setSearchParams({ search: searchTerm });
  };

  return (
    <>
      <div className={styles.navigation}>
        <form onSubmit={handleSubmit}>
          <input
            className={styles["search-input"]}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
          />
          <button className={styles["search-button"]} type="submit">
            Search
          </button>
        </form>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
