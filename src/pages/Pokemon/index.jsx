import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ImExit } from "react-icons/im";
import * as C from "./styles";

export const Pokemon = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  const pokemonsUrl = `https://pokeapi.co/api/v2/pokemon/`;

  const getPokemon = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setPokemon(data);
  };

  useEffect(() => {
    const pokemonUrl = `${pokemonsUrl}${id}`;
    getPokemon(pokemonUrl);
  }, []);

  return (
    <C.Pokemon>
      {pokemon && (
        <C.PokemonPage key={id}>
          <Link to="/">
            <ImExit />
          </Link>
          <C.PokemonImg>
            <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
          </C.PokemonImg>
          <C.PokemonInfo>
            <h2>
              {pokemon.name} <span># {pokemon.id}</span>
            </h2>
            <C.PokemonStatus>
              <h3>
                HP: <span>{pokemon.stats[0].base_stat}</span>
                <br /> <progress value={pokemon.stats[0].base_stat} max="300" />
              </h3>
              <h3>
                Speed: <span>{pokemon.stats[3].base_stat}</span>
                <br /> <progress value={pokemon.stats[3].base_stat} max="300" />
              </h3>
              <h3>
                Attack: <span>{pokemon.stats[1].base_stat}</span>
                <br /> <progress value={pokemon.stats[1].base_stat} max="300" />
              </h3>
              <h3>
                Special Attack: <span>{pokemon.stats[4].base_stat}</span>
                <br /> <progress value={pokemon.stats[4].base_stat} max="300" />
              </h3>
              <h3>
                Defense: <span>{pokemon.stats[2].base_stat}</span>
                <br /> <progress value={pokemon.stats[2].base_stat} max="300" />
              </h3>
              <h3>
                Special Defense: <span>{pokemon.stats[3].base_stat}</span>
                <br /> <progress value={pokemon.stats[3].base_stat} max="300" />
              </h3>
              <h3>
                Weight: <span>{pokemon.weight}</span>
                <br /> <progress value={pokemon.weight} max="1500" />
              </h3>
            </C.PokemonStatus>
          </C.PokemonInfo>
        </C.PokemonPage>
      )}
    </C.Pokemon>
  );
};
