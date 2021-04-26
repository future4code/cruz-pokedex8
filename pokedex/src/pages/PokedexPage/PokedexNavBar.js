import React from "react";
import { useHistory } from "react-router-dom";
import { Button, ThemeProvider } from "@material-ui/core";
import { goToBack, goToHomePage, goToBattle } from "../../routes/coordinator";
import { TitlePage, Logo } from "./stylePokedex";
import { theme } from "../../components/NavigBar/theme";
import "./pokedexNavBar.css";
import logo from "../../assets/Images/pokemon-logo.png";

const PokedexNavBar = (props) => {
  const history = useHistory();

  return (
    <ThemeProvider theme={theme}>
      <div className="navigbar-container">
        <Logo src={logo} alt="Logo" onClick={() => goToHomePage(history)} />
        <TitlePage>{props.title}</TitlePage>
        <div className="navigbar-btns">
        <Button variant="contained" color="primary" onClick={() => goToBack(history)}>Back</Button>
            &nbsp;&nbsp;
            <Button variant="contained" color="primary" onClick={() => goToBattle(history)}>Battle</Button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default PokedexNavBar;
