import { Link } from "react-router-dom";
import { Switch } from "../Switch";
import * as C from "./styles";

export const Header = (props) => {
  const { themeToggle } = props;

  return (
    <C.Header id="header">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="PokeApi-Logo"
      />
      <C.Nav>
        <ul>
          <li>
            <Link to="/">Pokedex</Link>
          </li>
          <li>
            <Link to="/favoritos">Favoritos</Link>
          </li>
        </ul>
      </C.Nav>
      <C.Input>
        <Switch themeToggle={themeToggle} />
      </C.Input>
    </C.Header>
  );
};
