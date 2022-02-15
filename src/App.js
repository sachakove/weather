// import { Switch } from "@mui/material";
import { Container } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Favorites from "./screens/Favorites";
import Home from "./screens/Home/Home";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("here");
    // dispatch(getCurrentWeather("215793"));
    // dispatch(getForecast("215793"));
    // dispatch(selectLocation({ name: "Tel Aviv", id: "215793", rank: "31" }));
    // ################################   APP STARTS WITH // SELECT_LOCATION ==> TEL AVIV //   ################################
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
};

export default App;
