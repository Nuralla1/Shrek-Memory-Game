import styled from "styled-components";

export const Background = styled.div`
  background-image: url("https://kartinkin.net/uploads/posts/2021-03/1616044518_4-p-fon-shrek-5.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Button = styled.button`
  color: darkslategrey;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid darkslategrey;
  border-radius: 10px;
  transition: all 0.5s;
  background-color: white;
  :hover {
    padding: 0.5em 2em;
    position: relative;
  }
`;
