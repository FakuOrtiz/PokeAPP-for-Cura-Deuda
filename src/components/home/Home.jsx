import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearPokemon } from "../../redux/slices/data";
import Card from "../card/Card";
import styles from "./Home.module.css";

const Home = () => {
  const { pokemons, pokemon } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const copyPokemons = [...pokemons];

  copyPokemons?.sort((a, b) => a.id - b.id);

  const handleGoBack = () => {
    dispatch(clearPokemon());
  };

  if (pokemon?.name) {
    return (
      <div>
        <div>
          <button className={styles.goBack} onClick={handleGoBack}>
            Go back
          </button>
        </div>
        <div className={styles.containerIndividual}>
          <div className={styles.containerOneCard}>
            <Card
              key={pokemon.name}
              id={pokemon.id}
              name={pokemon.name}
              hp={pokemon.hp}
              attack={pokemon.attack}
              defense={pokemon.defense}
              speed={pokemon.speed}
              height={pokemon.height}
              weight={pokemon.weight}
              image={pokemon.image}
              types={pokemon.types}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.containerCard}>
        {copyPokemons.map((p) => {
          return (
            <Card
              key={p.name}
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
