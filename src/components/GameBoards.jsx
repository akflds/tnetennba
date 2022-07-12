import LetterRack from "./LetterRack";
import "../styles/GameBoards.css";
const GameBoards = ({ letters, guess, victorious, isError, score }) => {
  return victorious ? (
    <p className="congratulations">{`Nice one! You've found ${score} word${
      score === 1 ? "" : "s"
    } 🥳`}</p>
  ) : (
    <section className="game-boards">
      <LetterRack className="letter-selection" letters={letters} />
      <LetterRack className="letter-guess" letters={guess} isError={isError} />
    </section>
  );
};

export default GameBoards;
