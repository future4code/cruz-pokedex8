import React from 'react';
import { goToPokedexPage } from '../../routes/coordinator';
import { useHistory } from 'react-router'

function HomePage() {
    const history = useHistory()

    return (
        <div>
            <h1>Lista de Pokemons</h1>
            <button onClick={() => goToPokedexPage(history)}>Minha Pokedéx</button>

        </div>
            )

}

export default HomePage