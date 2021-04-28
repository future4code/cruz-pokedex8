import { useParams } from 'react-router-dom';
import BattleActions from '../Battle/BattleActions';
import { usePokemonId } from '../../hooks/usePokemonId';

function Battle() {
    const pathParams = useParams();
    const pokeName = pathParams.pokeName
    const [pokeData] = usePokemonId(pokeName)

return (
    <div>
        { !pokeData ? <p>Carreganodoo...</p> : (
            <div>
                <BattleActions
                    pokemon={pokeData}
                />
            </div>
        )}
    </div>
)

}
export default Battle;