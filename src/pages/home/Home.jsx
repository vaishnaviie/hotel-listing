import React, { useState } from "react";
import styles from "./Home.module.css";
import { ACTION } from "../../constant/Constant";
import { useData } from "../../context/ContextProvider";
import ProductListing from "../../components/productListing/ProductListing";

const Home = () => {
  const { state, dispatch } = useData();
  console.log(state.city);
  return (
    <div className={styles.home}>
      <div className={styles.heading}>
        <h1>Featured Listed Property</h1>
        <p>
          Real estate can be bought, sold, leased or rented and can be a
          valuable investment opportunity. The value of real estate can be...
        </p>
      </div>
      <div className={styles.cities_container}>
        <button
          onClick={() => {
            dispatch({ type: ACTION.CITY, payload: "New York" });
            dispatch({ type: ACTION.NO_OF_ELEMENT, payload: 6 });
          }}
          className={state.city === "New York" ? styles.active : styles.city}
        >
          New York
        </button>
        <button
          onClick={() => {
            dispatch({ type: ACTION.CITY, payload: "Mumbai" });
            dispatch({ type: ACTION.NO_OF_ELEMENT, payload: 6 });
          }}
          className={state.city === "Mumbai" ? styles.active : styles.city}
        >
          Mumbai
        </button>
        <button
          onClick={() => {
            dispatch({ type: ACTION.CITY, payload: "Paris" });
            dispatch({ type: ACTION.NO_OF_ELEMENT, payload: 6 });
          }}
          className={state.city === "Paris" ? styles.active : styles.city}
        >
          Paris
        </button>
        <button
          onClick={() => {
            dispatch({ type: ACTION.CITY, payload: "London" });
            dispatch({ type: ACTION.NO_OF_ELEMENT, payload: 6 });
          }}
          className={state.city === "London" ? styles.active : styles.city}
        >
          London
        </button>
      </div>
      <ProductListing />
    </div>
  );
};

export default Home;
