import axios from "axios";
import { useState, useEffect } from "react";

export const usePokemon = (initialState, url) => {
  const [data, setData] = useState(initialState);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => setData(response.data.sprites.front_default))
      .catch((error) => console.log(error));
  }, [url]);

  return data;
};