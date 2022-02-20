import * as React from "react";
import Card from "./Card";

interface IBoardProps {
  cards: Card[];
  activeCards: number[];
  foundPairs: number[];
  handleClick: (index: number) => void;
}

const Board: React.FunctionComponent<IBoardProps> = (props) => {
  const { cards, activeCards, foundPairs, handleClick } = props;
  return (
    <div className="grid grid-cols-4 gap-4">
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            card={card}
            flipped={
              activeCards.indexOf(index) !== -1 ||
              foundPairs.indexOf(index) !== -1
            }
            flipCard={() => {
              handleClick(index);
            }}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default Board;
