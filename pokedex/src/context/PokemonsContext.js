
import React, { createContext, useState, useEffect } from 'react';
import Api from '../services/Api';


export const PokemonsContext = createContext();

export function PokemonsContextProvider(props) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    Api
      .get('?limit=100')
      .then((response) => setPokemons(response.data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <PokemonsContext.Provider value={{ pokemons, setPokemons }}>
      {props.children}
    </PokemonsContext.Provider>
  );
}