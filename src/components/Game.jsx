import { useState } from "react";
import GameBoards from "./GameBoards";
import GameControls from "./GameControls";
const Game = () => {
  const [letters, setLetters] = useState([]);
  const [guess, setGuess] = useState([]);
  const [victorious, setVictorious] = useState(false);
  const [isError, setIsError] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <section className="game">
      <GameBoards
        letters={letters}
        guess={guess}
        victorious={victorious}
        isError={isError}
        score={score}
      />
      <GameControls
        letters={letters}
        guess={guess}
        setLetters={setLetters}
        setGuess={setGuess}
        victorious={victorious}
        setVictorious={setVictorious}
        setIsError={setIsError}
        setScore={setScore}
        score={score}
      />
    </section>
  );
};

export default Game;
