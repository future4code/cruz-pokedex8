import { BrowserRouter, Switch, Route} from "react-router-dom";
import React from 'react';
import HomePage from "../pages/HomePage/HomePage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";

const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/pokedex">
            <PokedexPage />
          </Route>
          <Route exact path="/details">
            <DetailsPage />
          </Route>
          <Route>
             <div>404:Ihhh deu ruim - Página não encontrada</div>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
  export default Router;