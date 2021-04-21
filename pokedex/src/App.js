import './App.css';
import Router from "./routes/Router";
import { PokedexContextProvider } from './context/PokedexContext';
import { PokemonsContextProvider } from './context/PokemonsContext';
import { PokemonDetailContextProvider } from './context/PokemonDetailContext';

function App() {
  return (
    <PokedexContextProvider>
      <PokemonsContextProvider>
        <PokemonDetailContextProvider>
          <Router />
        </PokemonDetailContextProvider>
      </PokemonsContextProvider>
    </PokedexContextProvider>
  );
}

export default App;
