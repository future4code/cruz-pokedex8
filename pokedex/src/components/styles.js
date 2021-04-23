import styled from 'styled-components';

export const Button = styled.button`
  min-width: 100px;
  height: 40px;
  background: var(--yellow);
  border: none;
  outline: none;
	border-radius: 10px;
	margin-left: 10px;
	/* color: yellow; */
	font-size: 1.6rem;
	font-weight: bold;
  &:hover {
		cursor: pointer;
    background: var(--dark #0c4994);
		transition: ease-in-out 0.3s;
		color: var(--yellow);
  }
`;

