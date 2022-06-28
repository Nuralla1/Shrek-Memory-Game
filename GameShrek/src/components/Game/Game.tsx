import React, { useEffect, useMemo, useState } from "react";
import { CardType, createBoard } from "../../setup";
import { shuffleArray } from "../../utils";
import song from "../../music/shrek_09. Smash Mouth - All Star.mp3";
import flipSound from "../../music/Card-flip-sound-effect.mp3";
import { Background, Button, Grid, Turns } from "./Game.styles";
import Card from "../Card/Card";
import { useNavigate } from "react-router-dom";

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const Game = () => {
  const [cards, setCards] = useState<CardType[]>(shuffleArray(createBoard()));

  const [canClick, setCanClick] = useState<boolean>(true);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [clickedCard, setClickedCard] = useState<undefined | CardType>(
    undefined
  );
  const [turns, setTurns] = useState<number>(0);
  const music = useMemo(() => new Audio(song), []);
  const flipSoundEffect = new Audio(flipSound);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const navigate = useNavigate();

  const playPause = () => {
    if (isPlaying) {
      music.pause();
    } else {
      music.play();
    }
    setIsPlaying((prev) => !prev);
  };

  const handleCardClick = async (currentClickedCard: CardType) => {
    flipSoundEffect.play();

    setCards((prevState) =>
      prevState.map((card) =>
        card.id === currentClickedCard.id
          ? { ...card, flipped: true, clickable: false }
          : card
      )
    );
    if (!clickedCard) {
      setClickedCard({ ...currentClickedCard });
      return;
    }
    if (clickedCard) {
      setCanClick((prev) => !prev);
    }
    if (clickedCard.matchingCardId === currentClickedCard.id) {
      setMatchedPairs((prev) => prev + 1);
      setTurns((turns) => turns + 1);
      setCards((prev) =>
        prev.map((card) =>
          card.id === clickedCard.id || card.id === currentClickedCard.id
            ? { ...card, clickable: false }
            : card
        )
      );
      setClickedCard(undefined);
      setCanClick((prev) => !prev);
      return;
    }

    setTurns((turns) => turns + 1);

    await timeout(1000);
    flipSoundEffect.play();
    setCanClick((prev) => !prev);
    setCards((prev) =>
      prev.map((card) =>
        card.id === clickedCard.id || card.id === currentClickedCard.id
          ? { ...card, flipped: false, clickable: true }
          : card
      )
    );

    setClickedCard(undefined);
  };

  useEffect(() => {
    async function test() {
      if (matchedPairs === cards.length / 8) {
        await timeout(1000);
        music.pause();
        navigate("/gameOver");
      }
    }
    test();
  }, [matchedPairs]);

  return (
    <>
      <Background>
        <Grid>
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              callback={handleCardClick}
              canClick={canClick}
            />
          ))}
        </Grid>
        <Turns>{`Turns: ${turns}`}</Turns>
        <Button onClick={playPause}>
          {isPlaying ? "Pause music" : "Play music️️"}
        </Button>
      </Background>
    </>
  );
};
