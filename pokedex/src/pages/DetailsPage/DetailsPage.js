import React, { useContext } from "react";
import Navigbar from "../../components/NavigBar/NavigBar";
import { TitlePok, Image, Div, PokeDetailContainer, PokeImages } from "./style";
import { PokemonDetailContext } from "../../context/PokemonDetailContext";
import { usePokemonDetails } from "../../hooks/usePokemonDetails";
//import { goToDetailsPage } from "../../routes/coordinator";


const PokeDetail = () => {

  const { pokemonDetail } = useContext(PokemonDetailContext);
  const data = usePokemonDetails("", pokemonDetail.name);
  console.log("data", data);
  
  
  return (
    <>
      <Navigbar title="Pokemon" />
     
      <PokeDetailContainer className="animateUp">
        <PokeImages>
          <Image
            src={data && data.sprites.other["official-artwork"].front_default}
          />
          <Image src={data && data.sprites.back_default} />
        </PokeImages>
        <Div>
          <h2> Poderes </h2>
          <h4>HP:</h4>
          <p> {data && data.stats[0].base_stat} </p>
          <h4>Attack:</h4>
          <p> {data && data.stats[1].base_stat} </p>
          <h4>Defense:</h4>
          <p> {data && data.stats[2].base_stat} </p>
          <h4>Special-Attack:</h4>
          <p> {data && data.stats[3].base_stat} </p>
          <h4>Special-Defence:</h4>
          <p> {data && data.stats[4].base_stat} </p>
          <h4>Speed:</h4>
          <p> {data && data.stats[5].base_stat} </p>
        </Div>
        <Div>
          <TitlePok> Tipo: </TitlePok>
          {data && data.types.map((tipo) => <p>{tipo.type.name} </p>)}
          <br />
          <TitlePok> Principais Ataques </TitlePok>
          {data &&
            // eslint-disable-next-line array-callback-return
            data.moves.map((mov, index) => {
              if (index < 10) {
                return <p> {mov.move.name} </p>;
              }
            })}
        </Div>
      </PokeDetailContainer>
     
    </>
  );
};

export default PokeDetail;

