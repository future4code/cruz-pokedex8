import React, { createContext, useState } from "react";

export const PokedexContext = createContext();

export const PokedexContextProvider = (props) => {
  const [pokedex, setPokedex] = useState([]);

  return (
    <PokedexContext.Provider value={{ pokedex, setPokedex }}>
      {props.children}
    </PokedexContext.Provider>
  );
};