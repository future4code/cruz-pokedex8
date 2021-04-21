import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';


export const PokemonsContext = createContext();

export function PokemonsContextProvider(props) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    api
      .get("?limit=100")
      .then((response) => setPokemons(response.data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <PokemonsContext.Provider value={{ pokemons, setPokemons }}>
      {props.children}
    </PokemonsContext.Provider>
  );
}