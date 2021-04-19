import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToHomePage } from '../../routes/coordinator';

const PokedexPage = () => {
    const history = useHistory();
    console.log(history)
    return (<div>
                <h1>Pokedéx</h1>
                <button onClick={()=> goToHomePage(history)}>Voltar para lista de pokemons</button>

            </div>

            )
}

export default PokedexPage