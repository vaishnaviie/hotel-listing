import React from "react";
import styles from "./Card.module.css";
import { BsBuildings } from "react-icons/bs";
import { BiBed } from "react-icons/bi";
import { LiaBathSolid } from "react-icons/lia";
import { GrDirections } from "react-icons/gr";
import { SlLocationPin } from "react-icons/sl";
import { BsSuitHeart } from "react-icons/bs";
import { BsSuitHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Card = ({ hotel }) => {
  const navigate = useNavigate();
  const condition = hotel.popular_tag;
  return (
    <div
      className={styles.card}
      onClick={() => navigate(`/proprty/${hotel?.id}`)}
    >
      {/* <li> */}
      <img
        className={styles.image}
        src={hotel.img}
        alt="img"
        // height="300px"
        // width="300px"
      />

      {condition && <div className={styles.popular}>Popular</div>}
      <div
        style={{
          padding: "1rem 1.7rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "350px",
        }}
      >
        <div className={styles.tag}>{hotel.tag}</div>
        <div className={styles.heart}>
          <BsSuitHeart style={{ color: "blue" }} />
        </div>
        {/* <BsSuitHeartFill style={{ color: "red" }} /> */}
        <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            // padding: "0rem 1rem",
          }}
        >
          {" "}
          <SlLocationPin /> {hotel.distance}
        </p>
        <h3 className={styles.hotel_name}>{hotel.hotel_name}</h3>
        <div className={styles.room_specifications}>
          <div className={styles.box}>
            <BsBuildings />
            {hotel.room}
          </div>
          <div className={styles.box}>
            <BiBed />
            {hotel.bed}
          </div>
          <div className={styles.box}>
            <LiaBathSolid />
            {hotel.bath}
          </div>
          <div className={styles.box}>
            <GrDirections />
            {hotel.sft}
          </div>
        </div>
        <div className={styles.read_more_conrtainer}>
          <div>
            <span
              style={{
                color: "blue",
                fontWeight: "bolder",
                fontSize: "1.3rem",
              }}
            >
              {hotel.price}
            </span>
            /month
          </div>
          <button className={styles.btn_read_more}>Read more</button>
        </div>
        {/* </li> */}
      </div>
    </div>
  );
};

export default Card;
