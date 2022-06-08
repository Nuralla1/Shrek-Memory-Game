import styled from "styled-components";

export const WinMessage = styled.div`
  color: darkslategrey;
  text-align: center;
  font-size: 34px;
  padding: 0.25em 1em;
  border: 2px solid darkslategrey;
  border-radius: 10px;
  background-color: white;
  animation: win 2s infinite forwards alternate;

  @keyframes win {
    0% {
      background-color: lightgoldenrodyellow;
      width: 250px;
      top: 0px;
    }
    100% {
      background-color: cadetblue;
      width: 400px;
      top: 100px;
    }
  }
`;
