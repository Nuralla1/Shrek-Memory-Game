import card1 from "./img/shrek1.png";
import card2 from "./img/shrek2.png";
import card3 from "./img/shrek3.jpeg";
import card4 from "./img/shrek4.png";
import card5 from "./img/shrek5.png";
import card6 from "./img/shrek6.png";
import card7 from "./img/shrek7.png";
import card8 from "./img/shrek8.png";
import cardBack from "./img/shrek_cover.png";

export type CardType = {
  id: string;
  flipped: boolean;
  backImage: string;
  frontImage: string;
  clickable: boolean;
  matchingCardId: string;
};

const cards: string[] = [
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
];

export const createBoard = (): CardType[] => {
  return [...cards, ...cards].map((card, i) => ({
    id: `card${i}`,
    flipped: false,
    backImage: cardBack,
    frontImage: card,
    clickable: true,
    matchingCardId:
      i < cards.length ? `card${cards.length + i}` : `card${i - cards.length}`,
  }));
};
