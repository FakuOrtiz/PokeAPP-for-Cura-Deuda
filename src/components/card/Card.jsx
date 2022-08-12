import React from "react";
import styles from "./Card.module.css";
import { typeColor } from "../../utils/Functions";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";

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
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* SIDE A */}
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
          <div className={typeColor(types)}>
            <div>
              <h2>{`#${id}`}</h2>
            </div>
            <div>
              <img src={image} alt={name} className={styles.imgPoke} />
            </div>
            <div className={styles.name}>{name?.toUpperCase()}</div>
            <div>
              {types?.map((t) => {
                return <p key={t}>{t}</p>;
              })}
            </div>
          </div>
        </div>
        {/* SIDE B */}
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
          <div className={typeColor(types)}>
            <div>
              <h2 className={styles.id}>{`#${id}`}</h2>
            </div>
            <div className={styles.name}>{name?.toUpperCase()}</div>
            <div className={styles.containerTypes}>
              {types?.map((t) => {
                return <p key={t}>{t}</p>;
              })}
            </div>
            <div className={styles.containerInfo}>
              <div className={styles.infoSide}>
                <div>
                  <p className={styles.subtitle}>HP</p>
                  <p>{hp}</p>
                </div>
                <div>
                  <p className={styles.subtitle}>Attack</p>
                  <p>{attack}</p>
                </div>
                <div>
                  <p className={styles.subtitle}>Defense</p>
                  <p>{defense}</p>
                </div>
              </div>
              <div className={styles.infoSide}>
                <div>
                  <p className={styles.subtitle}>Speed</p>
                  <p>{speed}</p>
                </div>
                <div>
                  <p className={styles.subtitle}>Weight</p>
                  <p>{weight}</p>
                </div>
                <div>
                  <p className={styles.subtitle}>Height</p>
                  <p>{height}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Card;
