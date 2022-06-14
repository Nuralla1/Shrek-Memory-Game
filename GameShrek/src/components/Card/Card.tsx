import React from "react";
import { CardType } from "../../setup";

import { BackImg, FrontImg, Wrapper } from "./Card.styles";

type Props = {
  card: CardType;
  callback: (card: CardType) => void;
  canClick: boolean;
};

const Card: React.FC<Props> = ({ card, callback, canClick }) => {
  const handleClick = () => {
    if (card.clickable && canClick) callback(card);
  };
  return (
    <Wrapper onClick={handleClick}>
      <FrontImg flipped={card.flipped} src={card.frontImage} alt="card-front" />
      <BackImg flipped={card.flipped} src={card.backImage} alt="card-back" />
    </Wrapper>
  );
};

export default Card;
