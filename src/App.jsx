import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getData } from "./redux/slices/data";
import Home from "./components/home/Home";
import Loading from "./components/loading/Loading";
import NavBar from "./components/navBar/NavBar";
import AboutMe from "./components/AboutMe/AboutMe";
import { Route, Switch } from "react-router-dom";

function App() {
  const { pokemons } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div className="App">
      {pokemons?.length < 20 ? (
        <Loading />
      ) : (
        <>
          <NavBar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/aboutMe">
            <AboutMe />
          </Route>
        </>
      )}
    </div>
  );
}

export default App;
