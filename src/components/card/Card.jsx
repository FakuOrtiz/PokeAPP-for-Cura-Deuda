import React from "react";
import styles from "./Card.module.css";
import { typeColor } from "../../utils/Functions";

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
    <div className={typeColor(types)}>
      <div>
        <h2>#{id}</h2>
      </div>
      <div>
        <img src={image} alt={name} className={styles.imgPoke} />
      </div>
      <div className={styles.name}>{name.toUpperCase()}</div>
      <div>
        {types?.map((t) => {
          return <p key={t}>{t}</p>;
        })}
      </div>
    </div>
  );
};

export default Card;
