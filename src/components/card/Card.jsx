import React from "react";
import styles from "./Card.module.css";

const Card = ({ id, name, hp, attack, defense, speed, height, weight, image, types }) => {
  return (
    <div className={styles.containerCard}>
        <div>
            <h2>#{id}</h2>
        </div>
      <div>
        <img src={image} alt={name} style={{maxWidth: "150px"}}/>
      </div>
    </div>
  );
};

export default Card;
