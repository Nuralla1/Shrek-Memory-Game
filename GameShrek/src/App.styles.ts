import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 0.5rem;
`;

export const Background = styled.div`
  background-image: url("../src/img/MAIN.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Turns = styled.div`
  margin-top: 30px;
  font-weight: bold;
  color: white;
  font-size: 40px;
  font-family: "Times New Roman";
`;

export const PlayButton = styled.button`
  color: darkslategrey;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid darkslategrey;
  border-radius: 3px;
`;
