import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/slices/data";
import Card from "../card/Card";
import styles from "./Home.module.css";

const Home = () => {
  const { pokemons } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div>
      <div className={styles.containerCard}>
        {pokemons?.map((p) => {
          return (
            <Card
              id={p.id}
              name={p.name}
              hp={p.hp}
              attack={p.attack}
              defense={p.defense}
              speed={p.speed}
              height={p.height}
              weight={p.weight}
              image={p.image}
              types={p.types}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
