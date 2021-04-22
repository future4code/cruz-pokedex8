import React, { useState, useContext } from "react";

import Pagination from "../../components/Pagination/Pagination";
import { PokemonsContext } from "../../context/PokemonsContext";
import { PokedexContext } from "../../context/PokedexContext";
import Navigbar from "../../components/NavigBar/NavigBar";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import "./home.css";

const HomePage = () => {
  const { pokemons, setPokemons } = useContext(PokemonsContext);
  const { pokedex, setPokedex } = useContext(PokedexContext);

  //For the pagination
  const [pageCurrent, setPageCurrent] = useState(1);
  const [pokemonsPerPage] = useState(10);

  const indexOfLastBook = pageCurrent * pokemonsPerPage;
  const indexOfFirstBook = indexOfLastBook - pokemonsPerPage;
  const currentPokemons =
    pokemons && pokemons.slice(indexOfFirstBook, indexOfLastBook);

  //Change page
  function paginate(pageNumber) {
    setPageCurrent(pageNumber);
  }

  function handleAddPokedex(name) {
    const pokemon = pokemons.filter((pokemon) => pokemon.name === name);
    const newPokedex = [...pokedex];
    newPokedex.push(pokemon[0]);
    setPokedex(newPokedex);

    const newPokemons = pokemons.filter((pokemon) => pokemon.name !== name);
    setPokemons(newPokemons);
  }

  return (
    <>
      <Navigbar title="Lista de Pokemons" />
      <div className="home-container animateUp">
        <div className="pokemons">
          {currentPokemons &&
            currentPokemons.map((pokemon) => {
              return (
                <PokemonCard>
                  key={pokemon.name}
                  name={pokemon.name}
                  onClick={() => handleAddPokedex(pokemon.name)}
                  pokemon={pokemon}
                  btnName="Adicionar" url={pokemon.url}
                </PokemonCard>
              );
            })}
        </div>
        <Pagination
          pokemonsPerPage={pokemonsPerPage}
          totalPokemons={pokemons && pokemons.length}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default HomePage;
