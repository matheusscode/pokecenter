//React Hooks
import { useEffect, useState } from "react";

//React Router
import { Link } from "react-router-dom";

//Components
import { Pagination } from "../../components/Pagination";
import { PokemonCard } from "../../components/PokemonCard";
import { SearchBar } from "../../components/SearchBar";

//API
import { getPokemons, getPokemonData, searchPokemon } from "../../services/api";

//Styled-Components
import * as C from "./styles";

//Images
import LoadingIMG from "../../../public/assets/icons/pokeball-black.png";

export const Pokedex = (props) => {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const itensPerPage = 24;

  const { theme } = props;

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.log("fetchPokemons error:", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      fetchPokemons();
    }

    setLoading(true);
    setNotFound(false);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
    } else {
      setPokemons([result]);
      setPage(0);
      setTotalPages(1);
    }
    setLoading(false);
  };

  {
    /* Functions for Pagination*/
  }

  const onLeftClickHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  const onRightClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };

  {
    /* Functions for Pagination End*/
  }

  return (
    <C.Pokedex>
      <C.PokedexHeader>
        <Link to="/" className="Title">
          Pokedex
        </Link>
        <C.SearchContainer>
          <SearchBar onSearch={onSearchHandler} />
        </C.SearchContainer>
      </C.PokedexHeader>

      <C.PaginationBar>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRigthClick={onRightClickHandler}
        />
      </C.PaginationBar>
      {loading ? (
        <C.Loading>
          <img src={LoadingIMG} alt="loading..." className="loading" />
        </C.Loading>
      ) : (
        <C.PokedexGrid>
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <PokemonCard key={index} pokemon={pokemon} />;
            })}
        </C.PokedexGrid>
      )}

      <a href="#header" className="scroll__up">Scroll Up</a>
    </C.Pokedex>
  );
};
