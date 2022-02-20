interface IHeaderProps {
  matchedCount: number;
  restartGame: () => void;
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const { matchedCount, restartGame } = props;
  return (
    <div>
      <h1 className="text-5xl text-center m-5">Match Two Game</h1>
      <div className="text-3xl flow-root">
        <h2 className="float-left">
          {matchedCount === 0
            ? "No pairs made yet!"
            : `made ${matchedCount} ${matchedCount > 1 ? "pairs" : "pair"}`}
        </h2>
        <button
          onClick={restartGame}
          className="bg-red-500 hover:bg-red-800 font-bold px-4 rounded float-right mb-4 text-black"
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default Header;
