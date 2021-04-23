import axios from "axios";
import { useState, useEffect } from "react";

export const usePokemonId = (initialState, url) => {
  const [data, setData] = useState(initialState);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => setData(response.data.id))
      .catch((error) => console.log(error));
  }, [url]);

  return data;
};