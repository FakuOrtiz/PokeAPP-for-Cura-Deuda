import "./App.css";
import Home from "./components/home/Home";
import Loading from "./components/loading/Loading";
import SearchBar from "./components/searchBar/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getData } from "./redux/slices/data";

function App() {
  const { pokemons } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div className="App">
      {pokemons?.length < 151 ? (
        <Loading />
      ) : (
        <>
          <SearchBar />
          <Home />
        </>
      )}
    </div>
  );
}

export default App;
