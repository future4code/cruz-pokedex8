import styled from 'styled-components';

export const Logo = styled.img`
  width: 150px;
  height: 50px;
  &:hover {
    cursor: pointer;
  }
`;

export const TitlePage = styled.h1`
  font-size: 2/*2.5*/rem;
  font-weight: bold;
`;

export const ButtonNavBar = styled.button`
  min-width: 100px;
  height: 40px;
  background: red;
  border: none;
  outline: none;
	border-radius: 10px;
	margin-left: 10px;
	
	font-size: 1.6rem;
	font-weight: bold;
  &:hover {
		cursor: pointer;
    background: blue;
		transition: ease-in-out 0.3s;
		color: yellow;
  }
`;