import { shuffle } from "lodash";
import { useState } from "react";
import Board from "./componets/Board";
import Header from "./componets/Header";

const unshuffledCards = [
  { match: false, imageSrc: "/images/aircraft.png", id: 1 },
  { match: false, imageSrc: "/images/astronaut.png", id: 2 },
  { match: false, imageSrc: "/images/boat.png", id: 3 },
  { match: false, imageSrc: "/images/car.png", id: 4 },
  { match: false, imageSrc: "/images/helicopter.png", id: 5 },
  { match: false, imageSrc: "/images/motorcycle.png", id: 6 },
  { match: false, imageSrc: "/images/spaceship.png", id: 7 },
  { match: false, imageSrc: "/images/truck.png", id: 8 },
];

function App() {
  const [activeCards, setActiveCards] = useState<number[]>([]);
  const [foundPairs, setFoundPairs] = useState<number[]>([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [matchedCount, setMatchedCount] = useState(0);
  const [cards, setCards] = useState(
    shuffle([...unshuffledCards, ...unshuffledCards])
  );

  const reset = () => {
    setTimeout(() => {
      setActiveCards([]);
      setIsDisabled(false);
    }, 1000);
  };

  const restartGame = () => {
    setActiveCards([]);
    setFoundPairs([]);
    setMatchedCount(0);
    setCards(shuffle([...unshuffledCards, ...unshuffledCards]));
  };

  function handleClick(index: number) {
    if (!isDisabled) {
      setIsDisabled(true);
      if (activeCards.length === 0) {
        setActiveCards([index]);
        setIsDisabled(false);
      } else {
        if (cards[activeCards[0]] === cards[index]) {
          setFoundPairs([...foundPairs, activeCards[0], index]);
          reset();
          setMatchedCount(matchedCount + 1);
        } else {
          setActiveCards([...activeCards, index]);
          reset();
        }
      }
    }
  }

  return (
    <div className="w-[calc(100vh_-_240px)] max-w-[calc(100vw_-_40px)] m-auto font-bangers">
      <Header matchedCount={matchedCount} restartGame={restartGame} />
      <Board
        cards={cards}
        activeCards={activeCards}
        foundPairs={foundPairs}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
