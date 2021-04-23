import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { PokedexContext } from "../../context/PokedexContext";
import { PokemonsContext } from "../../context/PokemonsContext";
import PokedexNavBar from "./PokedexNavBar";

const PokedexPage = () => {
  const { pokedex, setPokedex } = useContext(PokedexContext);
  const { pokemons, setPokemons } = useContext(PokemonsContext);
  const [id, setId] = useState("");
  const [removePokemon, setRemovePokemon] = useState({});

  const handleRemove = (name) => {
    const newPokedex = pokedex.filter((pokemon) => pokemon.name !== name);
    setPokedex(newPokedex);

    const pokemon = pokedex.filter((pokemon) => pokemon.name === name);
    setRemovePokemon(pokemon[0]);

    axios
      .get(pokemon[0].url)
      .then((res) => {
        setId(res.data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (removePokemon.name) {
      const number = id - 1;
      const newPokemons = [...pokemons];
      newPokemons.splice(number, 0, removePokemon);
      setPokemons(newPokemons);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      <PokedexNavBar title="Minha PokeDex" />

      <div className="pokedex-container animateUp">
        <title>'Pokedex'</title>
        <div className="pokemons">
          {pokedex &&
            pokedex.map((pokemon) => (
              <PokemonCard
                key={Math.floor(Math.random() * 1000)}
                name={pokemon.name}
                onClick={() => handleRemove(pokemon.name)}
                pokemon={pokemon}
                btnName="Soltar"
                bgColor="#ffffffe0"
                color="red"
                color2="#1D2C5E"
                url={pokemon.url}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PokedexPage;

/*
import React, { useContext } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { PokedexContext } from "../../context/PokedexContext";

const Pokedex = () => {
  const { pokedex, setPokedex } = useContext(PokedexContext);
  console.log(pokedex, 'pokedex');

  function handleRemove(name) {
    const newPokedex = pokedex.filter((pokemon) => pokemon.name !== name);
    setPokedex(newPokedex);
  }

  return (
    <div className="pokedex-container animateUp">
      <title>'Pokedex'</title>
      <div className="pokemons">
        {pokedex &&
          pokedex.map((pokemon) => (
            <PokemonCard
              key={Math.floor(Math.random() * 1000)}
              name={pokemon.name}
              onClick={() => handleRemove(pokemon.name)}
              pokemon={pokemon}
              btnName="Remove"
              bgColor="#ffffffe0"
              color="red"
              color2="#1D2C5E"
              url={pokemon.url}
            />
          ))}
      </div>
    </div>
  );
};

export default Pokedex;



*/
