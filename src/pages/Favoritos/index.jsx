import * as C from "./styles";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { PokemonCard } from "../../components/PokemonCard/styles";
import { Link } from "react-router-dom";

export const Favoritos = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem("@pokemons");
    setPokemons(JSON.parse(myList) || []);
  }, []);

  const deletePokemon = (id) => {
    let filterPokemon = pokemons.filter((item) => {
      return item.id !== id;
    });

    setPokemons(filterPokemon);
    localStorage.setItem("@pokemons", JSON.stringify(filterPokemon));
    toast.success("POKÉMON REMOVIDO COM SUCESSO");
  };

  return (
    <C.Favorites>
      <C.TitleFavorites>Minha Lista:</C.TitleFavorites>

      {pokemons.length === 0 && (
        <h2 className="empty-title">Sua Lista esta fazia.</h2>
      )}

      <C.PFCards>
        <ul>
          {pokemons.map((item) => {
            return (
              <PokemonCard key={item.id}>
                <C.PokemonName>
                  {item.name} <span> #{item.id}</span>
                </C.PokemonName>
                <img
                  src={item.sprites.other.dream_world.front_default}
                  alt=""
                />

                <div className="options__container">
                  <Link to={`/pokemon/${item.id}`}>Detalhes</Link>
                  <C.DeleteButton onClick={() => deletePokemon(item.id)}>
                    Excluir
                  </C.DeleteButton>
                </div>
              </PokemonCard>
            );
          })}
        </ul>
      </C.PFCards>
    </C.Favorites>
  );
};
