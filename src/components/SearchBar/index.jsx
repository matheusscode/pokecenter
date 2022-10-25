import { useState } from "react";
import * as C from "./styles.jsx";

export const SearchBar = (props) => {
  const [search, setSearch] = useState("");
  const { onSearch } = props;

  const onChangeHandler = (e) => {
    setSearch(search);
    if (e.target.value.length === 0) {
      onSearch(undefined);
    }
  };

  const onButtonClickHandler = () => {
    onSearch(search);
  };

  return (
    <C.SearchBar>
      <C.Bar>
        <input
          placeholder="Buscar Pokémon"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </C.Bar>
      <C.SearcHButton onClick={onButtonClickHandler}>Buscar</C.SearcHButton>
    </C.SearchBar>
  );
};
