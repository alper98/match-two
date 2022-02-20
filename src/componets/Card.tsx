import ReactCardFlip from "react-card-flip";

interface ICardProps {
  flipCard: () => void;
  index: number;
  card: Card;
  flipped: boolean;
}

const Card: React.FunctionComponent<ICardProps> = (props) => {
  const { flipCard, index, card, flipped } = props;
  const flippedToFront = flipped;
  return (
    <div className="shadow-2xl">
      <ReactCardFlip isFlipped={flippedToFront} flipDirection="horizontal">
        <div onClick={flipCard}>
          <img src={"/images/Alper.png"} alt="card-front" />
        </div>
        <div>
          <img src={card.imageSrc} alt="card-back" />
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Card;
