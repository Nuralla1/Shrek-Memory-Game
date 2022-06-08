import React from "react";
import { Background, Button } from "../../App.styles";
import { WinMessage } from "./GameOver.style";
import { useNavigate } from "react-router-dom";

export const GameOver = () => {
  const navigate = useNavigate();
  const handleStartAgainClick = () => navigate("/");
  return (
    <>
      <Background>
        <div>
          <WinMessage>YOU WIN!</WinMessage>
        </div>
        <Button onClick={handleStartAgainClick}>START AGAIN</Button>
      </Background>
    </>
  );
};
