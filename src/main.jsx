import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./index.css";
import App from "./App";
import { Home } from "./pages/Home";
import { Pokedex } from "./pages/Pokedex";
import { Favoritos } from "./pages/Favoritos";
import { Pokemon } from "./pages/Pokemon";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={ <App />}>
          <Route path="/" element={ <Home />}/>
          <Route path="/pokedex" element={ <Pokedex />}/>
          <Route path="/favoritos" element={ <Favoritos />}/>
          <Route path="/pokemon" element={ <Pokemon />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
