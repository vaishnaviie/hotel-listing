import React from "react";
import styles from "./PropertyPage.module.css";
import { useParams } from "react-router-dom";
import { useData } from "../../context/ContextProvider";
import Card from "../../components/card/Card";

const PropertyPage = () => {
  const { state, dispatch } = useData();
  const { ID } = useParams();
  // console.log(ID);
  const specificHotel = state?.data?.find((H) => Number(H.id) == Number(ID));
  console.log(specificHotel);
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "rgb(228, 228, 242)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card hotel={specificHotel} />
    </div>
  );
};

export default PropertyPage;
