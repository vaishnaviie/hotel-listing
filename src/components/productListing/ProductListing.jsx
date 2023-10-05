import React, { useState } from "react";
import styles from "./ProductListing.module.css";
import { useData } from "../../context/ContextProvider";
import Card from "../card/Card";
import { BiLoaderCircle } from "react-icons/bi";
import { ACTION } from "../../constant/Constant";

const ProductListing = () => {
  const { state, dispatch } = useData();
  // const [noOfEle, setNoOfEle] = useState(6);

  const filteredData = state?.data?.filter(
    (hotel) => hotel.city === state.city
  );

  const slice = filteredData?.slice(0, state.noOfElement);

  const loadMore = () => {
    dispatch({
      type: ACTION.NO_OF_ELEMENT,
      payload: state.noOfElement + 3,
    });
    // setNoOfEle(state.noOfEle + 3);
  };

  return (
    <div>
      <div className={styles.card_container}>
        {slice?.map((hotel) => (
          <Card hotel={hotel} key={hotel.id} />
        ))}
      </div>
      {state.noOfElement < filteredData.length && (
        <button onClick={() => loadMore()} className={styles.btn_show_more}>
          <BiLoaderCircle />
          show more
        </button>
      )}
    </div>
  );
};

export default ProductListing;
