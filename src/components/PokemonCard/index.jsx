import * as C from "./styles";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export const PokemonCard = (props) => {
  const { pokemon } = props;

  const savePokemon = () => {
    const myList = localStorage.getItem("@pokemons");

    let savedPokemons = JSON.parse(myList) || [];

    const hasPokemon = savedPokemons.some(
      (savedpokemon) => savedpokemon.id === pokemon.id
    );

    if (hasPokemon) {
      toast.warn("ESTE POKÉMON JÁ ESTA NA LISTA!");
      return;
    }

    savedPokemons.push(pokemon);
    localStorage.setItem("@pokemons", JSON.stringify(savedPokemons));
    toast.success("POKEMON SALVO COM SUCESSO!");
  };

  return (
    <C.PokemonCard>
      <C.Card>
        <C.PokemonImage>
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
            className="pokemon-image"
          />
        </C.PokemonImage>

        <C.CardBody>
          <C.CardTop>
            <h3>
              {pokemon.name} <span>#{pokemon.id}</span>
            </h3>
          </C.CardTop>
          <C.CardBottom>
            <C.PokemonType>
              {pokemon.types.map((type, index) => {
                return (
                  <div key={index} className="options__container">
                    <Link to="/pokemon">Detalhes</Link>
                    <button onClick={savePokemon}>Salvar</button>
                  </div>
                );
              })}
            </C.PokemonType>
          </C.CardBottom>
        </C.CardBody>
      </C.Card>
    </C.PokemonCard>
  );
};
