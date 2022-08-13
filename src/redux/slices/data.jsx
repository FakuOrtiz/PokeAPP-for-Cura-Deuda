import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

const API_URL = "https://pokeapi.co/api/v2/pokemon";
//905

export const data = createSlice({
  name: "data",
  initialState: {
    pokemons: [],
    pokemon: {},
  },
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = [...state.pokemons, action.payload];
    },
    setPokemon: (state, action) => {
      state.pokemon = action.payload;
    },
  },
});

export const { setPokemons, setPokemon } = data.actions;

export default data.reducer;

export const getData = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${API_URL}?limit=50`);

    let urls = [];
    data.results?.map((p) => urls.push(p.url));

    Promise.all(urls)
      .then((res) => {
        res.map((e) => {
          axios
            .get(e)
            .then((p) => {
              const pokemon = {
                id: p.data.id,
                name: p.data.name,
                hp: p.data.stats[0].base_stat,
                attack: p.data.stats[1].base_stat,
                defense: p.data.stats[2].base_stat,
                speed: p.data.stats[5].base_stat,
                height: p.data.height,
                weight: p.data.weight,
                image: p.data.sprites.other.dream_world.front_default,
                types: p.data.types.map((t) => t.type.name),
              };
              dispatch(setPokemons(pokemon));
            })
            .catch((err) => console.log(err));
        });
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};

export const searchPoke = (name) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${API_URL}/${name.toLowerCase()}`);
    const pokemon = {
      id: data.id,
      name: data.name,
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      speed: data.stats[5].base_stat,
      height: data.height,
      weight: data.weight,
      image: data.sprites.other.dream_world.front_default,
      types: data.types.map((t) => t.type.name),
    };
    dispatch(setPokemon(pokemon));
  } catch (error) {
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      html: "The pokemon doesn't exist.",
      timer: 2000,
      timerProgressBar: true,
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  }
};

export const clearPokemon = () => (dispatch) => {
  dispatch(setPokemon({}));
};
