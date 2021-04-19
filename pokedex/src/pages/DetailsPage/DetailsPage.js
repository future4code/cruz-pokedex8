import React from 'react';
import { useHistory } from 'react-router';
import { goToHomePage, goToPokedexPage } from '../../routes/coordinator';

const DetailsPage = () => {
    const history = useHistory()
    return (
            <div>
                <h1>Detalhes</h1>
                <button onClick={() => goToPokedexPage(history)}>Pokedéx</button>
                <button onClick={() => goToHomePage(history)}>Pokemons</button>
            </div>
            )
}

export default DetailsPage