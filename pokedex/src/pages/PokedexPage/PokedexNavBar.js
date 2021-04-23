import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/Images/pokemon-logo.png";
import "./pokedexNavBar.css";
import { goToBack, goToHomePage } from "../../routes/coordinator";
import { TitlePage, Logo, ButtonNavBar } from "./stylePokedex";

const PokedexNavBar = (props) => {
  const history = useHistory();

  return (
    <div className="navigbar-container">
      <Logo src={logo} alt="Logo" onClick={() => goToHomePage(history)} />
      <TitlePage>{props.title}</TitlePage>
      <div className="navigbar-btns">
        <ButtonNavBar onClick={() => goToBack(history)}>Back</ButtonNavBar>
      </div>
    </div>
  );
};

export default PokedexNavBar;
