import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [pokedex, setPokedex] = useState([]);

  return (
    <GlobalStateContext.Provider value={{ pokedex, setPokedex }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;