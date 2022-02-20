import Card from "./Card";
import ReactCardFlip from "react-card-flip";

interface IBoardProps {
  cards: Card[];
  activeCards: number[];
  foundPairs: number[];
  matchedCount: number;
  handleClick: (index: number) => void;
  restartGame: () => void;
}

const Board: React.FunctionComponent<IBoardProps> = (props) => {
  const {
    cards,
    activeCards,
    foundPairs,
    handleClick,
    matchedCount,
    restartGame,
  } = props;

  const boardFlipped = matchedCount === 8;

  return (
    <div>
      <ReactCardFlip isFlipped={boardFlipped} flipDirection="vertical">
        <div className="grid grid-cols-4 gap-4">
          {cards.map((card: Card, index: number) => {
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
        <div className="flex justify-center content-center mt-56">
          <h1 className="text-5xl text-center m-5">YOU WON</h1>
          <button
            onClick={restartGame}
            className="bg-red-500 hover:bg-red-800 font-bold px-4 rounded float-right mb-5 text-black"
          >
            Play again ?
          </button>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Board;
