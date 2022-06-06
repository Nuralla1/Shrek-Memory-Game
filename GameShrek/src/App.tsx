import React, { useState, useEffect, useMemo } from "react";

import { createBoard } from "./setup";
import { shuffleArray } from "./utils";
import { CardType } from "./setup";
import { Grid, Background, Turns, PlayButton } from "./App.styles";
import Card from "./components/Card/Card";
import song from "./music/shrek_09. Smash Mouth - All Star.mp3";

const App = () => {
  const [cards, setCards] = useState<CardType[]>(shuffleArray(createBoard()));
  const [gameWon, setGameWon] = useState(false);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [clickedCard, setClickedCard] = useState<undefined | CardType>(
    undefined
  );
  const [turns, setTurns] = useState<number>(0);
  const music = useMemo(() => new Audio(song), []);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const playPause = () => {
    if (isPlaying) {
      music.pause();
    } else {
      music.play();
    }
    setIsPlaying((prev) => !prev);
  };

  const handleCardClick = (currentClickedCard: CardType) => {
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
      return;
    }

    setTurns((turns) => turns + 1);

    setTimeout(() => {
      setCards((prev) =>
        prev.map((card) =>
          card.id === clickedCard.id || card.id === currentClickedCard.id
            ? { ...card, flipped: false, clickable: true }
            : card
        )
      );
    }, 1000);
    setClickedCard(undefined);
  };

  useEffect(() => {
    if (matchedPairs === cards.length / 2) {
      alert("GAME WON");
    }
  }, [matchedPairs]);

  return (
    <Background>
      <Grid>
        {cards.map((card) => (
          <Card key={card.id} card={card} callback={handleCardClick} />
        ))}
      </Grid>
      <Turns>{`Turns: ${turns}`}</Turns>
      <PlayButton onClick={playPause}>
        {isPlaying ? "Pause music" : "Play music️️"}
      </PlayButton>
    </Background>
  );
};

export default App;
