export const goToHomePage = (history) => {
  history.push("/");
};

export const goToDetailsPage = (history, id) => {
  history.push("/details");
};

export const goToPokedexPage = (history) => {
  history.push("/pokedex");
};

export const goToBack = (history) => {
  history.goBack();
};
