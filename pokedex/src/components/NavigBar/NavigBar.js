import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../styles";
import logo from "../../assets/Images/pokemon-logo.png";
import pokebola from "../../assets/Images/pokebola.gif";
import "./navigBar.css";
import {
  goToBack,
  goToPokedexPage,
  goToHomePage,
} from "../../routes/coordinator";
import { TitlePage, Logo, Pokebola } from "./style";

const Navigbar = (props) => {
  const history = useHistory();

  return (
    <div className="navigbar-container">
      <Pokebola src={pokebola} alt="Pokebola" />
      <Logo src={logo} alt="Logo" onClick={() => goToHomePage(history)} />
      <TitlePage>{props.title}</TitlePage>
      <div className="navigbar-btns">
        <Button onClick={() => goToBack(history)}>Back</Button>
        <Button onClick={() => goToPokedexPage(history)}>Pokedex</Button>
      </div>
    </div>
  );
};

export default Navigbar;
