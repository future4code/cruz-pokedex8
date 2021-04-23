import React from "react";
import { useHistory } from "react-router-dom";
// import { Button } from "../styles";
import { Button, styled, ThemeProvider } from '@material-ui/core';
import logo from "../../assets/Images/pokemon-logo.png";
import pokebola from "../../assets/Images/pokebola.gif";
import {theme} from './theme'
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
    <ThemeProvider theme={theme}>
      <div className="navigbar-container">
        <Pokebola src={pokebola} alt="Pokebola" />
        <Logo src={logo} alt="Logo" onClick={() => goToHomePage(history)} />
        <TitlePage>{props.title}</TitlePage>
        <div className="navigbar-btns">        
            <Button variant="contained" color="primary" onClick={() => goToBack(history)}>Back</Button>
            &nbsp;&nbsp;
            <Button variant="contained" color="primary" onClick={() => goToPokedexPage(history)}>Pokedex</Button>         
        </div>
      </div>    
    </ThemeProvider>
  );
};

export default Navigbar;
