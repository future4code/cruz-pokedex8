import axios from "axios";
import { useState, useEffect } from "react";

export const usePokemonDetails = (initialState, name) => {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [name]);

  return data;
};