
import React, { createContext, useState } from 'react';

export const PokemonDetailContext = createContext();

export const PokemonDetailContextProvider = (props) => {
  const [pokemonDetail, setPokemonDetail] = useState('');

  return (
    <PokemonDetailContext.Provider value={{ pokemonDetail, setPokemonDetail }}>
      {props.children}
    </PokemonDetailContext.Provider>
  );
};