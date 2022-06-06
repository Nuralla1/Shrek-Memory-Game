import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 0.5rem;
`;

export const Background = styled.div`
  background-image: url("https://kartinkin.net/uploads/posts/2021-03/thumbs/1616044567_33-p-fon-shrek-36.jpg");
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
  font-family: "Times New Roman", sans-serif;
`;

export const PlayButton = styled.button`
  color: darkslategrey;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid darkslategrey;
  border-radius: 10px;
  transition: all 0.5s;
  :hover {
    color: olivedrab;
    border: 2px solid olivedrab;
    padding: 0.5em 2em;
    position: relative;
  }
`;
