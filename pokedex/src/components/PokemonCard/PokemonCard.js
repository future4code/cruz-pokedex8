import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { goToDetailsPage } from "../../routes/coordinator";
import { Button } from "../styles";
import { TitlePage } from "../NavigBar/style";
import "./pokemonCard.css";
import { usePokemon } from "../../hooks/usePokemon";
import { PokemonDetailContext } from "../../context/PokemonDetailContext";

const PokemonCard = (props) => {
  const { setPokemonDetail } = useContext(PokemonDetailContext);

  const history = useHistory();
  const img = usePokemon([], props.url);
 
  
  function handleDetails(pokemon) {
    setPokemonDetail(pokemon);
    history.push("/details");
  }

  return (
    <div className="pokemonCard-container">
      <TitlePage>{props.name}</TitlePage>
      <img src={img} alt="Pokemon"/>
      <div className="pokemonCard-btns">
        <Button
          style={{ background: props.bgColor, color: props.color }}
          onClick={props.onClick}
        >
          {props.btnName}
        </Button>
        <Button
          style={{ background: props.bgColor, color: props.color2 }}
          onClick={() => handleDetails(props.pokemon)}
        >
          Detalhes
        </Button>
      </div>
    </div>
  );
};

export default PokemonCard;
