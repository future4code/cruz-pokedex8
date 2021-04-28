import React from "react";
	import { useHistory } from "react-router-dom";
	import { Button } from "../../components/styles.js";
	import { goToBack } from "../../routes/coordinator.js";
	import { TitlePage } from "../../components/NavigBar/style";
	import { ErroDiv } from "./style.js";
	

	const ErrorPage = () => {
	  const history = useHistory();
	

	  return (
	    <ErroDiv className="animateUp">
	      <TitlePage> Ihhh deu ruim. Erro 404, por favor tente novamente </TitlePage>
	

	      <img
	        src="https://media1.tenor.com/images/f4dfba6861f151917aa8d895f19b84d9/tenor.gif?itemid=16694846"
	        alt="Pokemon triste"
	      />
	      <br />
	

	      <Button onClick={() => goToBack(history)}>Voltar</Button>
	    </ErroDiv>
	  );
	};
	

	export default ErrorPage;
