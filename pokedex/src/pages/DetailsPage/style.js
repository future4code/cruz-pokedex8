import styled from "styled-components";

export const PokeDetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  margin: 5px auto;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const PokeImages = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  padding: 10px;
  background: var(--yellow);
  border-radius: 10px;
  margin-top: 30px;
`;

export const Div = styled.div`
  height: 400px /*660px*/;
  width: 260px;
  min-width: 200px;
  padding: 20px 20px;
  font-size: 1rem;
  color: black;
  bgcolor: yellow;
  background: var(--dark-blue);
  color: var(--yellow);
  border-radius: 10px;
  @media only screen and (max-width: 600px) {
    margin: 20px 0;
  }
`;

export const TitlePok = styled.h2`
  font-size: 1.2 /*1.8*/ rem;
  font-weight: bold;
`;
