import React from "react";
import styles from "./Card.module.css";

const Card = ({
  id,
  name,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
  image,
  types,
}) => {
  return (
    <div
      className={
        types?.includes("fire")
          ? styles.containerFire
          : types?.includes("water")
          ? styles.containerWater
          : types?.includes("grass")
          ? styles.containerGrass
          : types?.includes("electric")
          ? styles.containerElectric
          : types?.includes("bug")
          ? styles.containerBug
          : types?.includes("normal")
          ? styles.containerNormal
          : types?.includes("poison")
          ? styles.containerPoison
          : types?.includes("ground")
          ? styles.containerGround
          : styles.containerNormal
      }
    >
      <div>
        <h2>#{id}</h2>
      </div>
      <div>
        <img
          src={image}
          alt={name}
        />
        <div className={styles.name}>{name.toUpperCase()}</div>
      </div>
    </div>
  );
};

export default Card;
